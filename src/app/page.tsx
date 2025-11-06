import HeroSection from "@/component/HeroSection";
import AboutSection from "@/component/AboutSection";
import ServicesSection from "@/component/ServicesSection";
import WhyChooseUsSection from "@/component/WhyChooseUsSection";
import IndustriesSection from "@/component/IndustriesSection";
import CTASection from "@/component/CTASection";
// import Head from "next/head";
// import SEOHead from "@/component/SEOHead";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Innovative IT Services & Solutions | Vizlyx",
  description:
    "Vizlyx is a trusted IT solutions provider offering web development, cloud consulting, and digital transformation services tailored for business growth.",
  keywords: [
    "IT solutions",
    "software development",
    "cloud consulting",
    "digital transformation",
    "Vizlyx",
  ],
  openGraph: {
    title: "Innovative IT Services & Solutions | Vizlyx",
    description:
      "Empowering businesses through cutting-edge web, mobile, and cloud technologies.",
    images: ["/og-image.jpg"],
    url: "https://vizlyx.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vizlyx | Innovative IT Services & Solutions",
    description: "Building smarter digital experiences for modern enterprises.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://vizlyx.com/",
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Vizlyx",
    url: "https://vizlyx.com",
    logo: "https://vizlyx.com/og-image.jpg",
    sameAs: [
      "https://www.linkedin.com/company/vizlyx",
      "https://twitter.com/vizlyx",
    ],
    description:
      "Vizlyx provides innovative IT services, web development, and cloud solutions to help businesses scale efficiently.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91-8851626273",
      contactType: "customer support",
      areaServed: "IN",
      availableLanguage: ["English"],
    },
  };

  return (
    <main>
      {/* <SEOHead
        // title="IT Services & Solutions"
        title="Vizlyx IT Services"
        description="Vizlyx provides expert IT services including web development, cloud solutions, and IT consulting. Boost your business with our tailored technology solutions."
        keywords="IT services, web development, cloud solutions, IT consulting, Vizlyx"
        url="https://vizlyx.com"
        image="https://vizlyx.com/og-image.jpg"
      /> */}

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 font-sans">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <IndustriesSection />
        <CTASection />
      </div>
    </main>
  );
}
