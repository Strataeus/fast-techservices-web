import { MetadataRoute } from "next";
import { services } from "../lib/content/services";
import { proofs } from "../lib/content/proofs";
import { zones } from "../lib/content/zones";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fast-techservices.com";
  const staticRoutes = [
    "",
    "/services",
    "/methode",
    "/preuves",
    "/zones",
    "/mentions-legales",
    "/confidentialite",
  ];

  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const proofRoutes = proofs.map((proof) => `/preuves/${proof.slug}`);
  const zoneRoutes = zones.map((zone) => `/zones/${zone.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...proofRoutes, ...zoneRoutes].map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })
  );
}
