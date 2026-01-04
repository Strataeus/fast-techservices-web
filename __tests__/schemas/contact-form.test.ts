/**
 * Tests for contact-form schema (Zod validation)
 */

import { ContactFormSchema, FastRemoteFormSchema } from "@/lib/schemas/contact-form";

describe("ContactFormSchema", () => {
  describe("Valid forms", () => {
    it("should parse valid minimal form", () => {
      const data = {
        name: "Jean Dupont",
        email: "jean@example.com",
        message: "Mon équipement a un problème sérieux qui doit être corrigé",
        consent: true,
      };

      const result = ContactFormSchema.safeParse(data);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe("Jean Dupont");
        expect(result.data.email).toBe("jean@example.com");
      }
    });

    it("should parse valid full form with all optional fields", () => {
      const data = {
        name: "Marie Martin",
        email: "marie@example.com",
        phone: "+33612345678",
        company: "ACME SAS",
        service: "diagnostic" as const,
        message: "Nous avons besoin d'un diagnostic complet de nos équipements",
        consent: true,
        honeypot: "",
      };

      const result = ContactFormSchema.safeParse(data);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.phone).toBe("+33612345678");
        expect(result.data.company).toBe("ACME SAS");
      }
    });

    it("should normalize email to lowercase", () => {
      const data = {
        name: "Test",
        email: "TEST@EXAMPLE.COM",
        message: "This is a test message that is definitely longer than forty characters minimum",
        consent: true,
      };

      const result = ContactFormSchema.safeParse(data);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.email).toBe("test@example.com");
      }
    });
  });

  describe("Invalid forms", () => {
    it("should reject missing required fields", () => {
      const data = {
        name: "Jean",
        // missing email, message, consent
      };

      const result = ContactFormSchema.safeParse(data);
      expect(result.success).toBe(false);
    });

    it("should reject invalid email", () => {
      const data = {
        name: "Jean",
        email: "not-an-email",
        message: "This is a long test message that exceeds the forty character minimum requirement",
        consent: true,
      };

      const result = ContactFormSchema.safeParse(data);
      expect(result.success).toBe(false);
    });

    it("should reject message too short", () => {
      const data = {
        name: "Jean",
        email: "jean@example.com",
        message: "Short",
        consent: true,
      };

      const result = ContactFormSchema.safeParse(data);
      expect(result.success).toBe(false);
    });

    it("should reject consent=false", () => {
      const data = {
        name: "Jean",
        email: "jean@example.com",
        message: "Test message here",
        consent: false,
      };

      const result = ContactFormSchema.safeParse(data);
      expect(result.success).toBe(false);
    });

    it("should reject filled honeypot", () => {
      const data = {
        name: "Jean",
        email: "jean@example.com",
        message: "Test message here",
        consent: true,
        honeypot: "FILLED",
      };

      const result = ContactFormSchema.safeParse(data);
      expect(result.success).toBe(false);
    });

    it("should reject invalid phone format", () => {
      const data = {
        name: "Jean",
        email: "jean@example.com",
        message: "Test message here",
        phone: "123",
        consent: true,
      };

      const result = ContactFormSchema.safeParse(data);
      expect(result.success).toBe(false);
    });

    it("should reject invalid service enum", () => {
      const data = {
        name: "Jean",
        email: "jean@example.com",
        message: "Test message here",
        service: "invalid_service",
        consent: true,
      };

      const result = ContactFormSchema.safeParse(data);
      expect(result.success).toBe(false);
    });
  });

  describe("Field trimming and normalization", () => {
    it("should trim whitespace from name", () => {
      const data = {
        name: "  Jean Dupont  ",
        email: "jean@example.com",
        message: "This is a test message that is definitely longer than forty characters minimum",
        consent: true,
      };

      const result = ContactFormSchema.safeParse(data);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.name).toBe("Jean Dupont");
      }
    });

    it("should handle optional fields as empty strings", () => {
      const data = {
        name: "Jean",
        email: "jean@example.com",
        message: "Test message here is now definitely longer than the forty character minimum requirement",
        phone: "",
        company: "",
        consent: true,
      };

      const result = ContactFormSchema.safeParse(data);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data.phone).toBe("");
        expect(result.data.company).toBe("");
      }
    });
  });
});

describe("FastRemoteFormSchema", () => {
  it("should parse valid FAST Remote form", () => {
    const data = {
      name: "Jean",
      email: "jean@example.com",
      message: "Urgent: compresseur en panne, débit très faible depuis ce matin",
      consent: true,
      equipement: "Compresseur ATLAS COPCO",
      urgence: "arret-total" as const,
      disponibilite: "Demain après-midi",
      codePostal: "75008",
      ville: "Paris",
    };

    const result = FastRemoteFormSchema.safeParse(data);
    expect(result.success).toBe(true);
  });

  it("should reject invalid urgence value", () => {
    const data = {
      name: "Jean",
      email: "jean@example.com",
      message: "This is a long test message that exceeds the forty character minimum requirement",
      consent: true,
      urgence: "invalid",
    };

    const result = FastRemoteFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });

  it("should reject invalid postal code", () => {
    const data = {
      name: "Jean",
      email: "jean@example.com",
      message: "This is a long test message that exceeds the forty character minimum requirement",
      consent: true,
      codePostal: "ABC",
    };

    const result = FastRemoteFormSchema.safeParse(data);
    expect(result.success).toBe(false);
  });
});
