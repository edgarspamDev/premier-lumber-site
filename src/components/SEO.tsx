import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
}

const SITE_NAME = 'Premier Lumber Co';
const BASE_URL = 'https://premierlumber.com';
const DEFAULT_OG_IMAGE = `${BASE_URL}/images/logo.png`;

export function SEO({ title, description, path = '/', ogImage }: SEOProps) {
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
    "telephone": "+12193982010",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "724 Chicago Ave",
      "addressLocality": "East Chicago",
      "addressRegion": "IN",
      "postalCode": "46312",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 41.6288, 
      "longitude": -87.4953 
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
    "priceRange": "$$"
  };

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
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE_NAME} />

      {/* JSON-LD Schema */}
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
}
