import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  product?: {
    name: string;
    description: string;
    image?: string;
    price?: string;
    currency?: string;
    availability?: 'InStock' | 'OutOfStock' | 'PreOrder';
  };
  service?: {
    name: string;
    description: string;
    image?: string;
    areaServed?: string[];
  };
  breadcrumb?: Array<{
    name: string;
    item: string;
  }>;
  faq?:Array<{
    question: string;
    answer: string;
  }>;
}

const SITE_NAME = 'Premier Lumber Co';
const BASE_URL = 'https://premierlumber.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/logo.png`;

export function SEO({ title, description, path = '/', ogImage, product, service, breadcrumb, faq }: SEOProps) {
  const fullTitle = path === '/' ? title : `${title} | ${SITE_NAME}`;
  const canonicalUrl = `${BASE_URL}${path}`;
  const image = ogImage || DEFAULT_OG_IMAGE;

  /* Structured Data for LocalBusiness */
  const schema = {
    "@context": "https://schema.org",
    "@type": "LumberYard",
    "name": SITE_NAME,
    "image": image,
    "url": canonicalUrl,
    "telephone": "+12193540720",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "6717 Atcheson Dr",
      "addressLocality": "Gary",
      "addressRegion": "IN",
      "postalCode": "46403",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.6006346, 
      "longitude": -87.2567137 
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "06:00",
        "closes": "15:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Friday", "Saturday"],
        "opens": "06:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.google.com/maps/place/Premier+Lumber+Co/@41.6006386,-87.2592886,17z/data=!4m16!1m9!3m8!1s0x8811c05177fe3f73:0x3e514e35aa3d585!2sPremier+Lumber+Co!8m2!3d41.6006346!4d-87.2567137!9m1!1b1!16s%2Fg%2F1tfbnyf5!3m5!1s0x8811c05177fe3f73:0x3e514e35aa3d585!8m2!3d41.6006346!4d-87.2567137!16s%2Fg%2F1tfbnyf5?hl=en-US&entry=ttu"
    ],
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "2"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "Gary"
      },
      {
        "@type": "City",
        "name": "East Chicago"
      },
      {
        "@type": "City",
        "name": "Hammond"
      },
      {
        "@type": "City",
        "name": "Merrillville"
      },
      {
        "@type": "City",
        "name": "Hobart"
      }
    ],
    "knowsAbout": [
      "Sustainable Forestry",
      "Mulch",
      "Wood Recycling",
      "Hardwood",
      "Firewood",
      "Pallets",
      "Sawdust",
      "Custom Lumber",
      "Log Pickup",
      "Tree Service Partners"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Lumber Yard Services",
      "itemListElement": [
        {
          "@type": "OfferCatalog",
          "name": "Firewood",
          "itemListElement": [
            {
              "@type": "Offer",
              "url": `${BASE_URL}/firewood`,
              "availability": "https://schema.org/InStock",
              "itemOffered": {
                "@type": "Product",
                "name": "Seasoned Hardwood Firewood",
                "description": "Seasoned hardwood firewood—pickup or delivered year-round.",
                "url": `${BASE_URL}/firewood`
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Pallets",
          "itemListElement": [
            {
              "@type": "Offer",
              "url": `${BASE_URL}/pallets`,
              "availability": "https://schema.org/InStock",
              "itemOffered": {
                "@type": "Product",
                "name": "New & Recycled Pallets",
                "description": "New, recycled, and heat-treated pallets including GMA cores.",
                "url": `${BASE_URL}/pallets`
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Sawdust",
          "itemListElement": [
            {
              "@type": "Offer",
              "url": `${BASE_URL}/sawdust`,
              "availability": "https://schema.org/InStock",
              "itemOffered": {
                "@type": "Product",
                "name": "Bulk Sawdust & Shavings",
                "description": "Bulk sawdust and shavings for bedding, landscaping, and spill cleanup.",
                "url": `${BASE_URL}/sawdust`
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Custom Lumber",
          "itemListElement": [
            {
              "@type": "Offer",
              "url": `${BASE_URL}/custom-lumber`,
              "availability": "https://schema.org/InStock",
              "itemOffered": {
                "@type": "Product",
                "name": "Custom-Cut Hardwood & Slabs",
                "description": "Custom-cut hardwood, slabs, and beams to spec; kiln-dried options available.",
                "url": `${BASE_URL}/custom-lumber`
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Log Pickup",
          "itemListElement": [
            {
              "@type": "Offer",
              "url": `${BASE_URL}/log-pickup`,
              "itemOffered": {
                "@type": "Service",
                "name": "Hardwood Log Pickup",
                "description": "We pick up hardwood logs and buy qualifying loads—fast turnaround in NW Indiana.",
                "url": `${BASE_URL}/log-pickup`
              }
            }
          ]
        },
        {
          "@type": "OfferCatalog",
          "name": "Tree Service Partners",
          "itemListElement": [
            {
              "@type": "Offer",
              "url": `${BASE_URL}/tree-service-partners`,
              "itemOffered": {
                "@type": "Service",
                "name": "Tree Service Partnerships",
                "description": "Partnership program for tree services needing reliable log outlets and lumber supply.",
                "url": `${BASE_URL}/tree-service-partners`
              }
            }
          ]
        }
      ]
    }
  };

  const productSchema = product ? {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image || image,
    "brand": {
      "@type": "Brand",
      "name": SITE_NAME
    },
    "offers": {
      "@type": "Offer",
      "url": canonicalUrl,
      "priceCurrency": product.currency || "USD",
      "price": product.price || "0.00",
      "availability": `https://schema.org/${product.availability || 'InStock'}`
    }
  } : null;

  const faqSchema = faq ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faq.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  } : null;

  const serviceSchema = service ? {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.name,
    "description": service.description,
    "image": service.image || image,
    "provider": {
      "@type": "LocalBusiness",
      "name": SITE_NAME
    },
    "areaServed": service.areaServed?.map(area => ({
      "@type": "City",
      "name": area
    }))
  } : null;

  const breadcrumbSchema = breadcrumb ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@id": `${BASE_URL}${item.item}`,
        "name": item.name
      }
    }))
  } : null;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content={product ? "product" : "website"} />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
      {productSchema && (
        <script type="application/ld+json">
          {JSON.stringify(productSchema)}
        </script>
      )}
      {faqSchema && (
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      )}
      {serviceSchema && (
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      )}
      {breadcrumbSchema && (
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      )}
    </Helmet>
  );
}
