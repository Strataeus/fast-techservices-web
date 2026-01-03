/**
 * Rate Limiter (in-memory)
 * Simple sliding window rate limiting per IP hash
 * 
 * DOCTRINE: Performance > Precision
 * - In-memory map (fast)
 * - Sliding window (per-IP counter)
 * - Garbage collection on access
 * - Configurable window & max requests
 */

export interface RateLimiterConfig {
  windowMs: number; // Time window in milliseconds
  maxRequests: number; // Max requests per window
}

export interface RateLimitStatus {
  allowed: boolean;
  remaining: number;
  retryAfter?: number; // Seconds to wait before retry
}

/**
 * Simple rate limiter using in-memory Map
 * Good for single-instance deployments
 * 
 * For multi-instance: upgrade to Redis
 */
export class RateLimiter {
  private hits = new Map<string, number[]>();
  private config: RateLimiterConfig;

  constructor(config: RateLimiterConfig = { windowMs: 10 * 60 * 1000, maxRequests: 5 }) {
    this.config = config;
    
    // Cleanup timer: remove stale entries every 5 minutes
    if (typeof globalThis !== "undefined") {
      setInterval(() => this.cleanup(), 5 * 60 * 1000);
    }
  }

  /**
   * Check if request is allowed
   * @param key IP hash or unique identifier
   * @returns RateLimitStatus with allowed flag and retry info
   */
  check(key: string): RateLimitStatus {
    const now = Date.now();
    const windowStart = now - this.config.windowMs;

    // Get requests in current window
    let recentHits = this.hits.get(key) ?? [];
    recentHits = recentHits.filter((timestamp) => timestamp > windowStart);

    // Add current request
    recentHits.push(now);
    this.hits.set(key, recentHits);

    const allowed = recentHits.length <= this.config.maxRequests;
    const remaining = Math.max(0, this.config.maxRequests - recentHits.length);

    // Calculate retry-after (seconds)
    let retryAfter: number | undefined;
    if (!allowed && recentHits.length > 0) {
      const oldestHit = recentHits[0]!;
      const secondsUntilExpiry = Math.ceil((oldestHit + this.config.windowMs - now) / 1000);
      retryAfter = Math.max(1, secondsUntilExpiry);
    }

    return { allowed, remaining, retryAfter };
  }

  /**
   * Reset all limits (for testing)
   */
  reset(): void {
    this.hits.clear();
  }

  /**
   * Cleanup: remove expired entries
   * Called periodically to prevent memory leak
   */
  private cleanup(): void {
    const now = Date.now();
    const windowStart = now - this.config.windowMs;

    for (const [key, timestamps] of this.hits.entries()) {
      const valid = timestamps.filter((t) => t > windowStart);
      if (valid.length === 0) {
        this.hits.delete(key);
      } else if (valid.length !== timestamps.length) {
        this.hits.set(key, valid);
      }
    }
  }
}

/**
 * Global rate limiter instance
 * Used by /api/forms/contact
 * 
 * Config: 5 requests per 10 minutes per IP
 */
export const globalRateLimiter = new RateLimiter({
  windowMs: 10 * 60 * 1000, // 10 minutes
  maxRequests: 5, // Max 5 requests
});
