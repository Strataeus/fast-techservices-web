/**
 * Tests for rate limiter
 */

import { RateLimiter } from "@/lib/utils/rate-limit";

describe("RateLimiter", () => {
  let limiter: RateLimiter;

  beforeEach(() => {
    // Create a test limiter: 3 requests per 100ms window
    limiter = new RateLimiter({
      windowMs: 100,
      maxRequests: 3,
    });
  });

  it("should allow requests within limit", () => {
    const status1 = limiter.check("ip-1");
    expect(status1.allowed).toBe(true);
    expect(status1.remaining).toBe(2);

    const status2 = limiter.check("ip-1");
    expect(status2.allowed).toBe(true);
    expect(status2.remaining).toBe(1);

    const status3 = limiter.check("ip-1");
    expect(status3.allowed).toBe(true);
    expect(status3.remaining).toBe(0);
  });

  it("should reject requests exceeding limit", () => {
    limiter.check("ip-2");
    limiter.check("ip-2");
    limiter.check("ip-2");

    const status4 = limiter.check("ip-2");
    expect(status4.allowed).toBe(false);
    expect(status4.remaining).toBe(0);
    expect(status4.retryAfter).toBeDefined();
    expect(status4.retryAfter).toBeGreaterThan(0);
  });

  it("should track different IPs separately", () => {
    limiter.check("ip-a");
    limiter.check("ip-a");
    limiter.check("ip-a");
    limiter.check("ip-a"); // Should fail for ip-a

    const status = limiter.check("ip-b");
    expect(status.allowed).toBe(true); // But should work for ip-b
  });

  it("should reset after window expires", (done) => {
    const fastLimiter = new RateLimiter({
      windowMs: 50,
      maxRequests: 1,
    });

    // Use up the quota
    fastLimiter.check("ip-test");
    const status1 = fastLimiter.check("ip-test");
    expect(status1.allowed).toBe(false);

    // Wait for window to expire
    setTimeout(() => {
      const status2 = fastLimiter.check("ip-test");
      expect(status2.allowed).toBe(true);
      done();
    }, 60);
  });

  it("should reset limiter", () => {
    limiter.check("ip-test");
    limiter.check("ip-test");
    limiter.check("ip-test");
    expect(limiter.check("ip-test").allowed).toBe(false);

    limiter.reset();
    expect(limiter.check("ip-test").allowed).toBe(true);
  });

  it("should handle retryAfter calculation", (done) => {
    const fastLimiter = new RateLimiter({
      windowMs: 100,
      maxRequests: 1,
    });

    fastLimiter.check("ip-x");
    const status = fastLimiter.check("ip-x");

    expect(status.allowed).toBe(false);
    expect(status.retryAfter).toBeGreaterThan(0);
    expect(status.retryAfter).toBeLessThanOrEqual(1); // Should be ~1 second

    done();
  });
});
