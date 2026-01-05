import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fast-techservices.com";
  const staticRoutes = [
    "",
    "/services",
    "/services/ponts-elevateurs",
    "/services/compresseurs-air",
    "/services/cabines-peinture-ventilation",
    "/services/stations-lavage",
    "/methode",
    "/preuves",
    "/zones",
    "/fast-remote",
    "/contact",
    "/mentions-legales",
    "/confidentialite",
  ];

  return staticRoutes.map(
    (route) => ({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
    })
  );
}
