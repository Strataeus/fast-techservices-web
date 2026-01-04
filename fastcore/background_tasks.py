"""Background tasks for FASTCore"""

from apscheduler.schedulers.background import BackgroundScheduler
from apscheduler.triggers.interval import IntervalTrigger
import httpx
import json
import logging
import os
from datetime import datetime
from typing import Optional
from pathlib import Path

logger = logging.getLogger(__name__)


class QueueFlusher:
    """Flush form queue to FastAPI endpoint with retry logic"""
    
    def __init__(self):
        self.queue_file = Path(".data/forms-queue.json")
        self.fastcore_url = os.getenv("FASTCORE_BASE_URL", "http://localhost:8000")
        self.fastcore_token = os.getenv("FASTCORE_SITE_INGEST_TOKEN", "")
        self.max_retries = 3
        self.retry_delay_base = 2  # seconds, exponential backoff
        
    def load_queue(self) -> list:
        """Load forms from queue file"""
        if not self.queue_file.exists():
            return []
        
        try:
            with open(self.queue_file, 'r') as f:
                return json.load(f)
        except Exception as e:
            logger.error(f"Error loading queue: {str(e)}")
            return []
    
    def save_queue(self, forms: list):
        """Save forms to queue file"""
        try:
            self.queue_file.parent.mkdir(parents=True, exist_ok=True)
            with open(self.queue_file, 'w') as f:
                json.dump(forms, f, indent=2)
        except Exception as e:
            logger.error(f"Error saving queue: {str(e)}")
    
    async def submit_lead_to_fastcore(self, lead: dict, retry: int = 0) -> bool:
        """
        Submit lead to FastCore endpoint
        Returns True if successful, False otherwise
        """
        try:
            headers = {
                "Authorization": f"Bearer {self.fastcore_token}",
                "Content-Type": "application/json"
            }
            
            async with httpx.AsyncClient(timeout=10) as client:
                response = await client.post(
                    f"{self.fastcore_url}/inbound/leads",
                    json=lead,
                    headers=headers
                )
                
                if response.status_code == 201:
                    logger.info(
                        f"Lead submitted to FastCore",
                        extra={
                            "lead_id": lead.get("meta", {}).get("request_id"),
                            "retry_count": retry
                        }
                    )
                    return True
                elif response.status_code == 400:
                    # Validation error, don't retry
                    logger.error(
                        f"Lead validation error: {response.text}",
                        extra={"request_id": lead.get("meta", {}).get("request_id")}
                    )
                    return False
                else:
                    logger.warning(
                        f"FastCore returned {response.status_code}",
                        extra={
                            "request_id": lead.get("meta", {}).get("request_id"),
                            "status": response.status_code
                        }
                    )
                    return False
                    
        except httpx.TimeoutException:
            logger.warning(
                f"FastCore timeout (retry {retry}/{self.max_retries})",
                extra={"request_id": lead.get("meta", {}).get("request_id")}
            )
            return False
        except Exception as e:
            logger.error(
                f"Error submitting lead: {type(e).__name__}: {str(e)}",
                extra={"request_id": lead.get("meta", {}).get("request_id")},
                exc_info=True
            )
            return False
    
    async def flush_queue(self):
        """Flush queue to FastCore with retry logic"""
        forms = self.load_queue()
        
        if not forms:
            logger.debug("Queue is empty")
            return
        
        logger.info(f"Starting queue flush (size: {len(forms)})")
        
        retry_forms = []
        successful = 0
        failed = 0
        
        for form in forms:
            retry_count = form.get("_retry_count", 0)
            
            # Try to submit
            success = await self.submit_lead_to_fastcore(form, retry_count)
            
            if success:
                successful += 1
            else:
                # Check if we should retry
                if retry_count < self.max_retries:
                    retry_forms.append({
                        **form,
                        "_retry_count": retry_count + 1
                    })
                    failed += 1
                else:
                    # Max retries exceeded, log and discard
                    logger.error(
                        f"Lead discarded after {self.max_retries} retries",
                        extra={"request_id": form.get("meta", {}).get("request_id")}
                    )
                    failed += 1
        
        # Save remaining forms
        self.save_queue(retry_forms)
        
        # Log summary
        logger.info(
            f"Queue flush complete",
            extra={
                "submitted": successful,
                "failed": failed,
                "remaining": len(retry_forms),
                "queue_size": len(retry_forms)
            }
        )
    
    def get_queue_stats(self) -> dict:
        """Get queue statistics"""
        forms = self.load_queue()
        
        retry_count = {0: 0, 1: 0, 2: 0, 3: 0}
        for form in forms:
            retries = form.get("_retry_count", 0)
            if retries <= 3:
                retry_count[retries] += 1
        
        return {
            "queue_size": len(forms),
            "oldest_form": min([f.get("meta", {}).get("timestamp_utc", "") for f in forms], default=None),
            "by_retry_count": retry_count,
            "timestamp": datetime.utcnow().isoformat()
        }


class SchedulerManager:
    """Manage background scheduler"""
    
    def __init__(self):
        self.scheduler: Optional[BackgroundScheduler] = None
        self.queue_flusher = QueueFlusher()
    
    def start(self):
        """Start the scheduler"""
        try:
            self.scheduler = BackgroundScheduler()
            
            # Add queue flush job (every 5 minutes)
            self.scheduler.add_job(
                self.queue_flusher.flush_queue,
                trigger=IntervalTrigger(minutes=5),
                id="queue_flush",
                name="Queue Flush Job",
                replace_existing=True
            )
            
            self.scheduler.start()
            logger.info("Background scheduler started")
        except Exception as e:
            logger.error(f"Failed to start scheduler: {str(e)}")
            raise
    
    def stop(self):
        """Stop the scheduler"""
        if self.scheduler and self.scheduler.running:
            self.scheduler.shutdown()
            logger.info("Background scheduler stopped")
    
    def get_jobs(self) -> list:
        """Get list of scheduled jobs"""
        if not self.scheduler:
            return []
        
        return [
            {
                "id": job.id,
                "name": job.name,
                "next_run_time": str(job.next_run_time) if job.next_run_time else None
            }
            for job in self.scheduler.get_jobs()
        ]


# Global scheduler instance
scheduler_manager = SchedulerManager()
