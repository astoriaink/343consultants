import { services, site } from "./site-data";

export function pageMetadata({ title, description, path = "/", image = "/images/hero-renewable-site.jpg", keywords = site.keywords }) {
  const url = `${site.url}${path}`;
  return {
    metadataBase: new URL(site.url),
    title,
    description,
    keywords,
    alternates: {
      canonical: url
    },
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: "en_AU",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image]
    },
    icons: {
      icon: [
        { url: "/favicon.ico", sizes: "32x32" },
        { url: "/favicon.png", sizes: "512x512", type: "image/png" }
      ],
      apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
    }
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    founder: {
      "@type": "Person",
      name: site.founder,
      jobTitle: "Founder"
    },
    areaServed: {
      "@type": "Country",
      name: "Australia"
    },
    serviceType: [
      "Renewable Energy Project Management Australia",
      "Solar Farm Project Management Australia",
      "Wind Farm Construction Management Australia",
      "Project Management",
      "Construction Management",
      "Safety and Risk Analysis",
      "Security Risk Assessment"
    ],
    knowsAbout: [
      "renewable energy project management",
      "solar farm construction",
      "wind farm delivery",
      "Australian infrastructure projects",
      "construction management",
      "project risk management"
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Renewable energy project management services in Australia",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          areaServed: {
            "@type": "Country",
            name: "Australia"
          }
        }
      }))
    },
    slogan: site.tagline,
    image: `${site.url}/images/hero-renewable-site.jpg`
  };
}

export function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.url}${item.path}`
    }))
  };
}

export function serviceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    provider: {
      "@id": `${site.url}/#organization`
    },
    areaServed: {
      "@type": "Country",
      name: "Australia"
    },
    serviceType: `${service.title} for Australian renewable energy projects`,
    audience: {
      "@type": "Audience",
      audienceType: "Renewable energy, solar, wind, construction and infrastructure project teams in Australia"
    },
    url: `${site.url}/services/${service.slug}`
  };
}

export function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    }))
  };
}
