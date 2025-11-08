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
    "Vizlyx empowers businesses with smart IT services — web development, cloud consulting, and digital transformation for modern enterprises.",
  keywords: [
    "IT solutions",
    "software development",
    "cloud consulting",
    "digital transformation",
    "Vizlyx",
    "web development",
    "IT consulting",
  ],
  openGraph: {
    title: "Innovative IT Services & Solutions | Vizlyx",
    description:
      "Empowering businesses through cutting-edge web, mobile, and cloud technologies.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vizlyx - Empowering Businesses with Smart IT Solutions",
      },
    ],
    url: "https://vizlyx.com/",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vizlyx | Innovative IT Services & Solutions",
    description:
      "Building smarter digital experiences for modern enterprises with Vizlyx IT consulting and cloud solutions.",
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
    description: "Empowering Businesses with Smart IT Solutions",
    sameAs: ["https://linkedin.com/company/vizlyx", "https://x.com/vizlyx"],
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+91-8851626273",
        contactType: "Customer Support",
        areaServed: "IN",
        availableLanguage: ["English"],
      },
    ],
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
