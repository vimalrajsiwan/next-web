import Head from "next/head";
import Image from "next/image";

import type { Metadata } from "next";
import SEOHead from "@/component/SEOHead";

export const metadata: Metadata = {
  title: "IT Services & Solutions | Vizlyx",
  description:
    "Vizlyx provides expert IT services including web development, cloud solutions, and IT consulting. Boost your business with our tailored technology solutions.",
  keywords: [
    "IT services",
    "web development",
    "cloud solutions",
    "IT consulting",
    "Vizlyx",
  ],
  openGraph: {
    title: "IT Services & Solutions | Vizlyx",
    description: "Expert IT services for modern businesses...",
    images: ["/og-image.jpg"],
    url: "https://vizlyx.com/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services & Solutions | Vizlyx",
    description: "Expert IT services for modern businesses...",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://vizlyx.com/services",
  },
};
export default function Services() {
  return (
    <>
      {/* <SEOHead
        title="IT Services & Solutions"
        description="Vizlyx provides expert IT services including web development, cloud solutions, and IT consulting. Boost your business with our tailored technology solutions."
        keywords="IT services, web development, cloud solutions, IT consulting, Vizlyx"
        url="https://vizlyx.com/services"
        image="https://vizlyx.com/og-image.jpg"
      /> */}

      <SEOHead
        title="Our Services"
        description="Vizlyx provides full-stack web development, cloud solutions, and enterprise software services using .NET, Angular, ReactJS, Java, and Azure."
        keywords="software development, web app, Azure cloud, .NET, Angular, ReactJS, enterprise IT services"
        url="https://vizlyx.com/services"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 font-sans">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">
            Our IT Services
          </h1>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
              <Image
                src="/images/web-development.jpg"
                alt="Custom Software Development"
                width={80}
                height={80}
                className="mb-4 rounded-lg object-cover"
              />
              <h2 className="text-xl font-semibold mb-2 text-indigo-800">
                Custom Software Development
              </h2>
              <p className="text-gray-700">
                Web, mobile, and desktop solutions tailored to your business
                needs.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
              <Image
                src="/images/cloud-ai.jpg"
                alt="Cloud Solutions"
                width={80}
                height={80}
                className="mb-4 rounded-lg object-cover"
              />
              <h2 className="text-xl font-semibold mb-2 text-indigo-800">
                Cloud Solutions
              </h2>
              <p className="text-gray-700">
                Cloud migration, management, and optimization for scalability
                and security.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
              <Image
                src="/images/mobile-apps.jpg"
                alt="Cybersecurity"
                width={80}
                height={80}
                className="mb-4 rounded-lg object-cover"
              />
              <h2 className="text-xl font-semibold mb-2 text-indigo-800">
                Cybersecurity
              </h2>
              <p className="text-gray-700">
                Security assessments, monitoring, and protection for your
                digital assets.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
              <Image
                src="/images/about.jpg"
                alt="IT Consulting"
                width={80}
                height={80}
                className="mb-4 rounded-lg object-cover"
              />
              <h2 className="text-xl font-semibold mb-2 text-indigo-800">
                IT Consulting
              </h2>
              <p className="text-gray-700">
                Strategic IT advice to align technology with your business
                goals.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
              <Image
                src="/images/horo-section.jpg"
                alt="Digital Transformation"
                width={80}
                height={80}
                className="mb-4 rounded-lg object-cover"
              />
              <h2 className="text-xl font-semibold mb-2 text-indigo-800">
                Digital Transformation
              </h2>
              <p className="text-gray-700">
                Modernize your business with automation and digital tools.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
              <Image
                src="/images/about.jpg"
                alt="Support & Maintenance"
                width={80}
                height={80}
                className="mb-4 rounded-lg object-cover"
              />
              <h2 className="text-xl font-semibold mb-2 text-indigo-800">
                Support & Maintenance
              </h2>
              <p className="text-gray-700">
                Ongoing support to keep your systems running smoothly.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
