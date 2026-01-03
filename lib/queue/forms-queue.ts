/**
 * Forms Queue
 * Stores leads locally when FASTCore is unavailable
 * Implements SAFE-BY-DEFAULT: if backend down → queue locally, retry later
 * 
 * DOCTRINE:
 * - Persistent storage (file-based JSON)
 * - Server-side only (no client exposure)
 * - Simple append/flush pattern
 * - Bounded size (prevent disk fill)
 */

import fs from "fs";
import path from "path";
import type { Lead } from "@/lib/schemas/contact-form";

const QUEUE_DIR = path.join(process.cwd(), ".data");
const QUEUE_FILE = path.join(QUEUE_DIR, "forms-queue.json");
const MAX_QUEUE_SIZE = 1000; // Max 1000 leads in queue before dropping

/**
 * Ensure queue directory exists
 */
function ensureQueueDir(): void {
  if (!fs.existsSync(QUEUE_DIR)) {
    fs.mkdirSync(QUEUE_DIR, { recursive: true });
  }
}

/**
 * Load queue from file
 */
function loadQueue(): Lead[] {
  try {
    if (!fs.existsSync(QUEUE_FILE)) return [];
    const content = fs.readFileSync(QUEUE_FILE, "utf-8");
    return JSON.parse(content) as Lead[];
  } catch (error) {
    console.error("[FormsQueue] Error loading queue:", error);
    return [];
  }
}

/**
 * Save queue to file
 */
function saveQueue(items: Lead[]): void {
  try {
    ensureQueueDir();
    fs.writeFileSync(QUEUE_FILE, JSON.stringify(items, null, 2));
  } catch (error) {
    console.error("[FormsQueue] Error saving queue:", error);
  }
}

/**
 * Add lead to queue
 */
export function enqueueForm(lead: Lead): void {
  const queue = loadQueue();
  
  // Prevent unbounded growth
  if (queue.length >= MAX_QUEUE_SIZE) {
    console.warn(
      `[FormsQueue] Queue is full (${queue.length}/${MAX_QUEUE_SIZE}), dropping oldest item`
    );
    queue.shift();
  }
  
  queue.push(lead);
  saveQueue(queue);
  console.log(`[FormsQueue] Lead queued (total: ${queue.length})`);
}

/**
 * Get all queued leads
 */
export function peekQueue(): Lead[] {
  return loadQueue();
}

/**
 * Remove all queued leads (after successful flush)
 */
export function clearQueue(): void {
  saveQueue([]);
  console.log("[FormsQueue] Queue cleared");
}

/**
 * Dequeue all and return them
 */
export function dequeueAll(): Lead[] {
  const items = loadQueue();
  if (items.length > 0) {
    clearQueue();
  }
  return items;
}

/**
 * Get queue stats
 */
export function getQueueStats(): { pending: number; maxSize: number } {
  const queue = loadQueue();
  return {
    pending: queue.length,
    maxSize: MAX_QUEUE_SIZE,
  };
}
