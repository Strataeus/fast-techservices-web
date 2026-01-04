"""Email notifications service"""

import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
from datetime import datetime
import logging
import os
from typing import List

logger = logging.getLogger(__name__)


class EmailService:
    """Send emails via SMTP"""
    
    def __init__(self):
        self.smtp_host = os.getenv("SMTP_HOST", "localhost")
        self.smtp_port = int(os.getenv("SMTP_PORT", "587"))
        self.smtp_user = os.getenv("SMTP_USER", "")
        self.smtp_password = os.getenv("SMTP_PASSWORD", "")
        self.from_email = os.getenv("FROM_EMAIL", "noreply@fast-techservices.com")
        self.admin_email = os.getenv("ADMIN_EMAIL", "admin@fast-techservices.com")
        self.use_tls = os.getenv("SMTP_TLS", "true").lower() == "true"
    
    def send_email(
        self,
        to: str,
        subject: str,
        html_content: str,
        text_content: str = ""
    ) -> bool:
        """Send email"""
        try:
            msg = MIMEMultipart("alternative")
            msg["Subject"] = subject
            msg["From"] = self.from_email
            msg["To"] = to
            
            # Attach text and HTML
            if text_content:
                msg.attach(MIMEText(text_content, "plain"))
            msg.attach(MIMEText(html_content, "html"))
            
            # Send via SMTP
            with smtplib.SMTP(self.smtp_host, self.smtp_port) as server:
                if self.use_tls:
                    server.starttls()
                
                if self.smtp_user and self.smtp_password:
                    server.login(self.smtp_user, self.smtp_password)
                
                server.send_message(msg)
            
            logger.info(f"Email sent to {to}", extra={"subject": subject})
            return True
            
        except Exception as e:
            logger.error(
                f"Failed to send email: {str(e)}",
                extra={"to": to, "subject": subject},
                exc_info=True
            )
            return False
    
    def send_welcome_email(self, email: str, name: str) -> bool:
        """Send welcome email to form submitter"""
        subject = "Merci pour votre demande - FAST"
        
        text_content = f"""
Bonjour {name},

Merci d'avoir rempli notre formulaire de contact.
Nous avons bien reçu votre demande et nous vous recontacterons dans les 24 heures.

Cordialement,
L'équipe FAST
        """.strip()
        
        html_content = f"""
<html>
<body style="font-family: Arial, sans-serif; color: #333;">
    <p>Bonjour {name},</p>
    
    <p>Merci d'avoir rempli notre formulaire de contact.</p>
    
    <p>Nous avons bien reçu votre demande et nous vous recontacterons dans les 24 heures.</p>
    
    <p style="color: #999; font-size: 12px; margin-top: 30px;">
        L'équipe FAST
    </p>
</body>
</html>
        """.strip()
        
        return self.send_email(email, subject, html_content, text_content)
    
    def send_admin_alert(self, alert_type: str, details: dict) -> bool:
        """Send alert email to admin"""
        timestamp = datetime.utcnow().isoformat()
        
        if alert_type == "queue_size_high":
            subject = f"⚠️ ALERTE: Queue size élevée ({details.get('queue_size', 0)} leads)"
            text = f"""
ALERTE QUEUE FLUSH

Queue size: {details.get('queue_size', 0)} leads
Timestamp: {timestamp}

Action requise: Vérifier les logs et relancer le flush manually si nécessaire.
            """.strip()
            
            html = f"""
<html>
<body style="font-family: Arial, sans-serif;">
    <h2 style="color: #d9534f;">⚠️ ALERTE QUEUE FLUSH</h2>
    
    <table style="border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Queue size</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold; color: #d9534f;">{details.get('queue_size', 0)} leads</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Timestamp</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">{timestamp}</td>
        </tr>
    </table>
    
    <p style="color: #d9534f;">Action requise: Vérifier les logs et relancer le flush manually si nécessaire.</p>
</body>
</html>
            """.strip()
        
        elif alert_type == "flush_failed":
            subject = f"❌ Queue flush failed - {details.get('reason', 'Unknown error')}"
            text = f"""
QUEUE FLUSH FAILED

Reason: {details.get('reason', 'Unknown')}
Failed count: {details.get('failed_count', 0)}
Timestamp: {timestamp}

Logs available in FastCore container.
            """.strip()
            
            html = f"""
<html>
<body style="font-family: Arial, sans-serif;">
    <h2 style="color: #d9534f;">❌ QUEUE FLUSH FAILED</h2>
    
    <table style="border-collapse: collapse; margin: 20px 0;">
        <tr style="background: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Reason</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">{details.get('reason', 'Unknown')}</td>
        </tr>
        <tr>
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Failed count</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd; color: #d9534f; font-weight: bold;">{details.get('failed_count', 0)}</td>
        </tr>
        <tr style="background: #f5f5f5;">
            <td style="padding: 10px; border: 1px solid #ddd;"><strong>Timestamp</strong></td>
            <td style="padding: 10px; border: 1px solid #ddd;">{timestamp}</td>
        </tr>
    </table>
    
    <p>Logs available in FastCore container.</p>
</body>
</html>
            """.strip()
        
        else:
            return False
        
        return self.send_email(self.admin_email, subject, html, text)


# Global email service instance
email_service = EmailService()
