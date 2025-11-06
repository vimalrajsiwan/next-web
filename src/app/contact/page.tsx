import { Metadata } from "next";
import ContactPage from "./ContactPage";

export const metadata: Metadata = {
  title: "Contact Vizlyx | Get in Touch for IT Services",
  description:
    "Reach out to Vizlyx for IT consulting, software development, or cloud solutions. Let’s discuss how we can grow your business together.",
  keywords: [
    "contact Vizlyx",
    "IT services inquiry",
    "software development contact",
    "cloud consulting contact",
  ],
  openGraph: {
    title: "Contact Vizlyx | Let's Build Something Great Together",
    description:
      "Get in touch with Vizlyx to discuss your next IT or software project. We’re here to help.",
    images: ["/og-image.jpg"],
    url: "https://vizlyx.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Vizlyx | Partner for Growth",
    description:
      "Let’s connect and explore how Vizlyx can bring your vision to life through technology.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://vizlyx.com/contact",
  },
};

export default function Contact() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    mainEntity: {
      "@type": "Organization",
      name: "Vizlyx",
      url: "https://vizlyx.com",
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-8851626273",
        email: "info@vizlyx.com",
        contactType: "sales",
        areaServed: "IN",
        availableLanguage: ["English"],
      },
      // address: {
      //   "@type": "PostalAddress",
      //   streetAddress: "Your Office Address",
      //   addressLocality: "City",
      //   addressRegion: "State",
      //   postalCode: "PINCODE",
      //   addressCountry: "IN",
      // },
    },
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <ContactPage />
    </main>
  );
}
