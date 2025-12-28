import { siteConfig } from "../lib/site";

function buildJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: "https://fast-techservices.com",
    email: siteConfig.contact.email || undefined,
    telephone: siteConfig.contact.phone || undefined,
    areaServed: siteConfig.contact.area || undefined,
  };

  return JSON.stringify(data);
}

export default function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: buildJsonLd() }}
    />
  );
}
