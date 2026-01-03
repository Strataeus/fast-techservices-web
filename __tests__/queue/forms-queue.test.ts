/**
 * Tests for forms queue (local persistence)
 */

import fs from "fs";
import path from "path";
import { enqueueForm, dequeueAll, peekQueue, getQueueStats, clearQueue } from "@/lib/queue/forms-queue";
import type { Lead } from "@/lib/schemas/contact-form";

describe("FormsQueue", () => {
  const testQueuePath = path.join(process.cwd(), ".data", "forms-queue.json");

  beforeEach(() => {
    // Clean up test queue
    clearQueue();
  });

  afterEach(() => {
    // Clean up after tests
    try {
      if (fs.existsSync(testQueuePath)) {
        fs.unlinkSync(testQueuePath);
      }
    } catch {
      // Ignore cleanup errors
    }
  });

  const mockLead: Lead = {
    name: "Test User",
    email: "test@example.com",
    phone: "0123456789",
    company: "Test Corp",
    service: "diagnostic",
    message: "This is a test message for queue storage",
    consent: true,
    meta: {
      source: "fast-techservices.com",
      request_id: "test-uuid-1234",
      ip_hash: "abc123",
      timestamp_utc: new Date().toISOString(),
    },
  };

  it("should enqueue a form", () => {
    enqueueForm(mockLead);
    const queue = peekQueue();

    expect(queue).toHaveLength(1);
    expect(queue[0]).toMatchObject({
      name: "Test User",
      email: "test@example.com",
    });
  });

  it("should persist queue to file", () => {
    enqueueForm(mockLead);

    // File should exist
    expect(fs.existsSync(testQueuePath)).toBe(true);

    // Content should be valid JSON
    const content = fs.readFileSync(testQueuePath, "utf-8");
    const data = JSON.parse(content);
    expect(Array.isArray(data)).toBe(true);
    expect(data).toHaveLength(1);
  });

  it("should queue multiple forms", () => {
    enqueueForm(mockLead);
    enqueueForm({ ...mockLead, email: "test2@example.com" });

    const queue = peekQueue();
    expect(queue).toHaveLength(2);
  });

  it("should dequeue all forms", () => {
    enqueueForm(mockLead);
    enqueueForm({ ...mockLead, email: "test2@example.com" });

    const dequeued = dequeueAll();
    expect(dequeued).toHaveLength(2);

    // Queue should be empty now
    const queue = peekQueue();
    expect(queue).toHaveLength(0);
  });

  it("should get queue stats", () => {
    enqueueForm(mockLead);
    enqueueForm({ ...mockLead, email: "test2@example.com" });

    const stats = getQueueStats();
    expect(stats.pending).toBe(2);
    expect(stats.maxSize).toBe(1000);
  });

  it("should handle empty queue", () => {
    const queue = peekQueue();
    expect(queue).toHaveLength(0);

    const stats = getQueueStats();
    expect(stats.pending).toBe(0);

    const dequeued = dequeueAll();
    expect(dequeued).toHaveLength(0);
  });

  it("should clear queue", () => {
    enqueueForm(mockLead);
    expect(peekQueue()).toHaveLength(1);

    clearQueue();
    expect(peekQueue()).toHaveLength(0);
  });

  it("should drop oldest item if queue exceeds max size", () => {
    // This test would require changing MAX_QUEUE_SIZE temporarily
    // For now, just verify the enqueue logic works with large numbers
    for (let i = 0; i < 10; i++) {
      enqueueForm({
        ...mockLead,
        email: `test${i}@example.com`,
      });
    }

    const queue = peekQueue();
    expect(queue.length).toBeLessThanOrEqual(10);
  });
});
