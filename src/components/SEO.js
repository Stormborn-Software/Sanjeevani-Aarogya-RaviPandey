import Head from "next/head";

/**
 * SEO component
 * Props:
 * - title: string
 * - description: string
 * - keywords: string | string[]
 * - canonical: string (absolute URL)
 * - ogImage: string (absolute or relative)
 * - noindex: boolean (default false)
 * - jsonLd: object | object[] (structured data to embed)
 */
export default function SEO({
  title = "Sanjeevani Aarogya Kendra - Dr. Ravi Pandey",
  description = "Expert dermatology and skin care in Maksi, Ujjain, Indore, Dewas, and Shajapur. चर्म रोग, सफेद दाग (vitiligo), सोरायसिस (psoriasis) और बालों की समस्याओं के सर्वश्रेष्ठ डॉक्टर - Dr. Ravi Pandey.",
  keywords = [
    "Dr. Ravi Pandey",
    "Sanjeevani Aarogya Kendra",
    "best dermatologist in Ujjain",
    "best dermatologist in Indore",
    "dermatologist in Maksi",
    "skin doctor near me",
    "vitiligo doctor",
    "psoriasis treatment",
    "safed daag doctor",
    "सफेद दाग डॉक्टर",
    "सफेद दाग का पक्का इलाज",
    "सोरायसिस का इलाज",
    "त्वचा रोग विशेषज्ञ",
    "त्वचा डॉक्टर",
    "चर्म रोग विशेषज्ञ मक्सी",
    "Maksi",
    "Ujjain",
    "Indore",
    "Dewas",
    "Shajapur",
  ],
  canonical,
  ogImage = "/images/og-image.jpg",
  noindex = false,
  jsonLd,
}) {
  const keywordsContent = Array.isArray(keywords) ? keywords.join(", ") : keywords;

  // Default LocalBusiness Schema
  const defaultLocalBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Sanjeevani Aarogya Kendra",
    "image": process.env.NEXT_PUBLIC_SITE_URL ? `${process.env.NEXT_PUBLIC_SITE_URL}/images/og-image.jpg` : "https://sanjeevaniarogyakendra.com/images/og-image.jpg",
    "@id": process.env.NEXT_PUBLIC_SITE_URL || "https://sanjeevaniarogyakendra.com",
    "url": process.env.NEXT_PUBLIC_SITE_URL || "https://sanjeevaniarogyakendra.com",
    "telephone": "+919131170076",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "In Front of 96 Shop, Kanasiya Naka",
      "addressLocality": "Maksi",
      "addressRegion": "Madhya Pradesh",
      "postalCode": "465106",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 23.2709, // Approximate coordinates for Maksi
      "longitude": 76.2625
    },
    "areaServed": [
      { "@type": "City", "name": "Maksi" },
      { "@type": "City", "name": "Ujjain" },
      { "@type": "City", "name": "Indore" },
      { "@type": "City", "name": "Dewas" },
      { "@type": "City", "name": "Shajapur" }
    ],
    "medicalSpecialty": [
      "Dermatology",
      "Gynecology"
    ]
  };

  // Merge the default schema with any custom jsonLd passed to the page
  let structuredData = [defaultLocalBusinessSchema];
  if (jsonLd) {
    structuredData = structuredData.concat(Array.isArray(jsonLd) ? jsonLd : [jsonLd]);
  }

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {keywordsContent && <meta name="keywords" content={keywordsContent} />}
      <meta name="robots" content={noindex ? "noindex,nofollow" : "index,follow"} />

      {/* Canonical */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Sanjeevani Aarogya Kendra" />
      <meta property="og:locale" content="en_IN" />
      <meta property="og:locale:alternate" content="hi_IN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />

      {/* Viewport */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
}
