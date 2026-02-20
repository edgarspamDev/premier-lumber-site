import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Truck } from 'lucide-react';

const BASE_URL = 'https://premierlumberco.com';

const OFFER_CATALOG = {
  "@type": "OfferCatalog",
  "name": "Lumber Yard Services",
  "itemListElement": [
    {
      "@type": "OfferCatalog",
      "name": "Firewood",
      "itemListElement": [{
        "@type": "Offer",
        "url": `${BASE_URL}/firewood`,
        "availability": "https://schema.org/InStock",
        "itemOffered": {
          "@type": "Product",
          "name": "Seasoned Hardwood Firewood",
          "description": "Seasoned hardwood firewood—pickup or delivered year-round.",
          "url": `${BASE_URL}/firewood`
        }
      }]
    },
    {
      "@type": "OfferCatalog",
      "name": "Pallets",
      "itemListElement": [{
        "@type": "Offer",
        "url": `${BASE_URL}/pallets`,
        "availability": "https://schema.org/InStock",
        "itemOffered": {
          "@type": "Product",
          "name": "New & Recycled Pallets",
          "description": "New, recycled, and heat-treated pallets including GMA cores.",
          "url": `${BASE_URL}/pallets`
        }
      }]
    },
    {
      "@type": "OfferCatalog",
      "name": "Sawdust",
      "itemListElement": [{
        "@type": "Offer",
        "url": `${BASE_URL}/sawdust`,
        "availability": "https://schema.org/InStock",
        "itemOffered": {
          "@type": "Product",
          "name": "Bulk Sawdust & Shavings",
          "description": "Bulk sawdust and shavings for bedding, landscaping, and spill cleanup.",
          "url": `${BASE_URL}/sawdust`
        }
      }]
    },
    {
      "@type": "OfferCatalog",
      "name": "Custom Lumber",
      "itemListElement": [{
        "@type": "Offer",
        "url": `${BASE_URL}/custom-lumber`,
        "availability": "https://schema.org/InStock",
        "itemOffered": {
          "@type": "Product",
          "name": "Custom-Cut Hardwood & Slabs",
          "description": "Custom-cut hardwood, slabs, and beams to spec; kiln-dried options available.",
          "url": `${BASE_URL}/custom-lumber`
        }
      }]
    }
  ]
};

interface LocalLandingPageProps {
  city: string;
  service: 'Firewood' | 'Pallets' | 'Mulch';
  description: string;
  image: string;
}

export const LocalLandingPage: React.FC<LocalLandingPageProps> = ({ city, service, description, image }) => {
  const title = `Best ${service} in ${city}, IN | Premier Lumber Co`;
  const metaDescription = `Looking for ${service} in ${city}? Premier Lumber Co offers high-quality ${service.toLowerCase()} with delivery or pickup. Rated 5 stars. Call (219) 354-0720.`;
  const slug = `${city.toLowerCase().replace(/ /g, '-')}-${service.toLowerCase()}`;
  const canonicalUrl = `${BASE_URL}/locations/${slug}`;

  const businessSchema = {
    "@context": "https://schema.org",
    "@type": "LumberYard",
    "name": "Premier Lumber Co",
    "url": canonicalUrl,
    "telephone": "+12193540720",
    "image": `${BASE_URL}/images/logo.png`,
    "priceRange": "$$",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "2"
    },
    "sameAs": [
      "https://www.google.com/maps/place/Premier+Lumber+Co/@41.6006386,-87.2592886,17z/data=!4m16!1m9!3m8!1s0x8811c05177fe3f73:0x3e514e35aa3d585!2sPremier+Lumber+Co!8m2!3d41.6006346!4d-87.2567137!9m1!1b1!16s%2Fg%2F1tfbnyf5!3m5!1s0x8811c05177fe3f73:0x3e514e35aa3d585!8m2!3d41.6006346!4d-87.2567137!16s%2Fg%2F1tfbnyf5?hl=en-US&entry=ttu"
    ],
    "areaServed": [
      { "@type": "City", "name": "Gary" },
      { "@type": "City", "name": "East Chicago" },
      { "@type": "City", "name": "Hammond" },
      { "@type": "City", "name": "Merrillville" },
      { "@type": "City", "name": "Hobart" }
    ],
    "knowsAbout": [
      "Sustainable Forestry",
      "Wood Recycling",
      "Hardwood",
      "Mulch",
      "Firewood",
      "Pallets",
      "Sawdust",
      "Custom Lumber",
      "Log Pickup",
      "Tree Service Partners"
    ],
    "hasOfferCatalog": OFFER_CATALOG
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": service,
    "name": `${service} in ${city}, IN`,
    "description": metaDescription,
    "provider": {
      "@type": "LumberYard",
      "name": "Premier Lumber Co",
      "telephone": "+12193540720",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "6717 Atcheson Dr",
        "addressLocality": "Gary",
        "addressRegion": "IN",
        "postalCode": "46403",
        "addressCountry": "US"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": city,
      "containedInPlace": {
        "@type": "State",
        "name": "Indiana",
        "sameAs": "https://www.wikidata.org/wiki/Q1415"
      }
    },
    "url": canonicalUrl
  };

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={metaDescription} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Premier Lumber Co" />
        <script type="application/ld+json">
          {JSON.stringify(businessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>
      </Helmet>

      <div className="bg-white">
        {/* Hero Section */}
        <div className="relative bg-stone-900 text-white py-20 px-4">
          <div className="absolute inset-0 overflow-hidden">
            <img src={image} alt={`${service} delivery in ${city}`} className="w-full h-full object-cover opacity-20" />
          </div>
          <div className="relative max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-serif">
              Premium {service} in <span className="text-amber-500">{city}, IN</span>
            </h1>
            <p className="text-xl text-stone-300 mb-8 max-w-2xl mx-auto">
              {description}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/contact" className="bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2">
                Get a Quote <ArrowRight size={20} />
              </Link>
              <a href="tel:+12193540720" className="bg-white text-stone-900 hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors">
                Call (219) 354-0720
              </a>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="py-16 px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-stone-50 rounded-lg border border-stone-200">
              <MapPin className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-stone-900">Local to {city}</h3>
              <p className="text-stone-600">
                We are your neighbors. Located just minutes away, we ensure fast and reliable service to {city} residents and businesses.
              </p>
            </div>
            <div className="p-6 bg-stone-50 rounded-lg border border-stone-200">
              <Award className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-stone-900">Top Rated Quality</h3>
              <p className="text-stone-600">
                Rated 5.0 stars by locals. Our {service.toLowerCase()} is inspected for quality, ensuring you get the best value.
              </p>
            </div>
            <div className="p-6 bg-stone-50 rounded-lg border border-stone-200">
              <Truck className="text-amber-600 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-2 text-stone-900">Delivery & Pickup</h3>
              <p className="text-stone-600">
                Need it delivered to {city}? No problem. Prefer to pick up from our yard? We'll load you up.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-stone-100 py-12 px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 font-serif text-stone-900">Ready to Order?</h2>
          <p className="text-stone-600 mb-8">Serving {city} and surrounding Northwest Indiana communities.</p>
          <Link to="/contact" className="inline-block bg-stone-900 hover:bg-stone-800 text-white font-bold py-3 px-8 rounded transition-colors">
            Contact Us Today
          </Link>
        </div>
      </div>
    </>
  );
};

// Helper component for Icon
const Award = ({ className, size }: { className?: string, size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <circle cx="12" cy="8" r="7"></circle>
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
  </svg>
);
