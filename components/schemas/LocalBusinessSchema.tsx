/**
 * Local Business Schema for Google Rich Results
 * Improves SEO and knowledge panel on Google Search
 */

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "FAST Tech Services",
    "description": "Expert électromécanicien terrain. Maintenance et diagnostic d'équipements de garage : ponts élévateurs, compresseurs, cabines peinture, stations lavage. FAST Remote : diagnostic visio.",
    "url": "https://fast-techservices.com",
    "telephone": "+33123456789",
    "email": "contact@fast-techservices.com",
    "areaServed": {
      "@type": "Country",
      "name": "France"
    },
    "image": "https://fast-techservices.com/hero/home/hero.webp",
    "priceRange": "€€€",
    "serviceType": ["Maintenance électromécanique", "Diagnostic équipements", "Dépannage d'urgence", "Diagnostic à distance"],
    "sameAs": [
      "https://www.facebook.com/fastechservices",
      "https://www.linkedin.com/company/fast-tech-services",
      "https://www.instagram.com/fastechservices"
    ],
    "geo": {
      "@type": "GeoShape",
      "box": "42.3 -4.8 51.1 8.3"
    },
    "openingHours": "Mo-Fr 08:00-18:00"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
