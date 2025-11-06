"use client";

import Head from "next/head";
import React from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  url,
  image,
}) => {
  const siteName = "Vizlyx";
  const fullTitle = title ? `${title} | ${siteName}` : siteName;
  const canonical = url || "https://vizlyx.com";
  const imageUrl = image || "https://vizlyx.com/og-image.jpg";

  // ✅ Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: canonical,
    logo: imageUrl,
    sameAs: [
      "https://www.linkedin.com/company/vizlyx/",
      "https://twitter.com/vizlyx",
      "https://facebook.com/vizlyx",
    ],
    description:
      description ||
      "Vizlyx is an IT services company providing modern web, cloud, and automation solutions for businesses worldwide.",
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8851626273",
        contactType: "customer support",
        availableLanguage: ["English", "Hindi"],
      },
    ],
  };

  // ✅ Service Schema
  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "IT Consulting & Development",
    provider: {
      "@type": "Organization",
      name: siteName,
      url: canonical,
      logo: imageUrl,
    },
    areaServed: {
      "@type": "Place",
      name: "Worldwide",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "IT Services Offered by Vizlyx",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Web Development",
            description:
              "Custom web applications using ReactJS, Angular, and .NET.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Solutions",
            description:
              "Migration, architecture, and management on Azure and AWS.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Software Development",
            description:
              "End-to-end enterprise-grade development using .NET, C#, and Java.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "IT Consulting",
            description:
              "Digital transformation, automation, and IT strategy consulting.",
          },
        },
      ],
    },
  };

  // ✅ WebSite Schema (adds Google Search box for your site)
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: canonical,
    potentialAction: {
      "@type": "SearchAction",
      target: `${canonical}/search?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <Head>
      {/* ✅ Basic SEO */}
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonical} />

      {/* ✅ Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description || ""} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:url" content={canonical} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />

      {/* ✅ Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description || ""} />
      <meta name="twitter:image" content={imageUrl} />

      {/* ✅ Structured Data: Organization + Services + WebSite */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            servicesSchema,
            websiteSchema,
          ]),
        }}
      />
    </Head>
  );
};

export default SEOHead;
