import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://fast-techservices.com";
  const staticRoutes = [
    "",
    "/services",
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
