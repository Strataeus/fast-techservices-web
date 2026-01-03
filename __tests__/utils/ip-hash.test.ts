/**
 * Tests for IP hashing utility
 */

import { hashClientIp, hashUserAgent } from "@/lib/utils/ip-hash";

describe("IP Hashing", () => {
  describe("hashClientIp", () => {
    it("should hash IP to consistent value", () => {
      const ip = "192.168.1.1";
      const hash1 = hashClientIp(ip);
      const hash2 = hashClientIp(ip);

      expect(hash1).toBe(hash2);
    });

    it("should produce different hashes for different IPs", () => {
      const hash1 = hashClientIp("192.168.1.1");
      const hash2 = hashClientIp("192.168.1.2");

      expect(hash1).not.toBe(hash2);
    });

    it("should produce hash without plaintext IP", () => {
      const ip = "192.168.1.1";
      const hash = hashClientIp(ip);

      expect(hash).not.toContain(ip);
      expect(hash.length).toBeLessThan(50); // SHA256 truncated to 16 chars
    });

    it("should be safe for logging", () => {
      const hash = hashClientIp("8.8.8.8");
      // Hash should be hex string
      expect(/^[a-f0-9]{16}$/.test(hash)).toBe(true);
    });
  });

  describe("hashUserAgent", () => {
    it("should hash user agent consistently", () => {
      const ua = "Mozilla/5.0 (Windows; U; Windows NT 5.1; en-US)";
      const hash1 = hashUserAgent(ua);
      const hash2 = hashUserAgent(ua);

      expect(hash1).toBe(hash2);
    });

    it("should handle empty user agent", () => {
      const hash = hashUserAgent("");
      expect(hash).toBeDefined();
      expect(/^[a-f0-9]{16}$/.test(hash)).toBe(true);
    });
  });
});
