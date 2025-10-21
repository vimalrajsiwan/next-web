// components/StructuredData.tsx
import Script from "next/script";

interface OrganizationStructuredData {
  name: string;
  url: string;
  logo: string;
  description: string;
  sameAs: string[];
}

interface StructuredDataProps {
  data: OrganizationStructuredData;
}

export default function StructuredData({ data }: StructuredDataProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: data.name,
    url: data.url,
    logo: data.logo,
    description: data.description,
    sameAs: data.sameAs,
  };

  return (
    <Script
      id="structured-data"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
