// import SEOHead from "@/component/SEOHead";
import { Metadata } from "next";
// import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfolio | Vizlyx IT Projects & Case Studies",
  description:
    "Explore Vizlyx’s portfolio of successful IT projects — custom web apps, cloud migration, enterprise software, and AI chatbot solutions tailored for global clients.",
  keywords: [
    "Vizlyx portfolio",
    "IT projects",
    "software development",
    "web development",
    "cloud solutions",
    "AI chatbot",
    "enterprise software",
    "case studies",
  ],
  openGraph: {
    title: "Portfolio | Vizlyx IT Projects & Case Studies",
    description:
      "See how Vizlyx helps businesses grow with web, mobile, and cloud-based IT solutions.",
    url: "https://vizlyx.com/portfolio",
    type: "website",
    images: ["/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Vizlyx IT Projects & Case Studies",
    description:
      "Showcasing Vizlyx’s proven expertise in IT consulting, web, and cloud projects.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://vizlyx.com/portfolio",
  },
};

export default function Portfolio() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vizlyx Project Portfolio",
    description:
      "A showcase of Vizlyx’s successful IT projects in software development, cloud migration, and AI automation.",
    numberOfItems: 6,
    itemListElement: [
      {
        "@type": "CreativeWork",
        position: 1,
        name: "E-commerce Web Platform",
        description:
          "Developed a scalable online store with integrated payments and analytics.",
        url: "https://vizlyx.com/portfolio#ecommerce-platform",
      },
      {
        "@type": "CreativeWork",
        position: 2,
        name: "Healthcare Management System",
        description:
          "Built a HIPAA-compliant platform for patient scheduling and data security.",
        url: "https://vizlyx.com/portfolio#healthcare-system",
      },
      {
        "@type": "CreativeWork",
        position: 3,
        name: "Cloud Migration Project",
        description:
          "Migrated financial systems to AWS, improving performance and reducing costs.",
        url: "https://vizlyx.com/portfolio#cloud-migration",
      },
      {
        "@type": "CreativeWork",
        position: 4,
        name: "Mobile Banking App",
        description:
          "Created a secure mobile banking app with biometric login and live tracking.",
        url: "https://vizlyx.com/portfolio#mobile-banking",
      },
      {
        "@type": "CreativeWork",
        position: 5,
        name: "SaaS Analytics Dashboard",
        description:
          "Built a data-driven SaaS dashboard using React and Node.js.",
        url: "https://vizlyx.com/portfolio#saas-dashboard",
      },
      {
        "@type": "CreativeWork",
        position: 6,
        name: "AI Chatbot Solution",
        description:
          "Implemented a conversational AI system for customer support automation.",
        url: "https://vizlyx.com/portfolio#ai-chatbot",
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* <SEOHead
        title="Portfolio - Vizlyx Projects & Case Studies"
        description="Explore Vizlyx's portfolio of successful IT projects — from custom web applications and enterprise software to cloud transformation and mobile app solutions."
        keywords="Vizlyx portfolio, IT projects, software development, cloud solutions, web development, case studies"
        url="https://vizlyx.com/portfolio"
      /> */}

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 font-sans py-16 px-6">
        <section className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">
            Our Portfolio
          </h1>
          <p className="text-lg text-gray-700 mb-12 max-w-3xl mx-auto">
            Discover how Vizlyx has empowered businesses across industries with
            cutting-edge IT solutions. Each project showcases our expertise in
            design, development, and innovation — helping clients achieve
            digital excellence.
          </p>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
              {/* <Image
                src="/images/portfolio/project1.jpg"
                alt="E-commerce Web Platform"
                width={500}
                height={300}
                className="object-cover w-full h-56"
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  E-commerce Web Platform
                </h3>
                <p className="text-gray-700 mb-4">
                  Built a scalable online store with advanced search, payment
                  gateway integration, and real-time analytics for a global
                  retailer.
                </p>
                <Link
                  href="#"
                  className="inline-block text-indigo-600 font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
              {/* <Image
                src="/images/portfolio/project2.jpg"
                alt="Healthcare Management System"
                width={500}
                height={300}
                className="object-cover w-full h-56"
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Healthcare Management System
                </h3>
                <p className="text-gray-700 mb-4">
                  Delivered a HIPAA-compliant patient management system with
                  secure data handling, scheduling, and reporting features.
                </p>
                <Link
                  href="#"
                  className="inline-block text-indigo-600 font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
              {/* <Image
                src="/images/portfolio/project3.jpg"
                alt="Cloud Migration Project"
                width={500}
                height={300}
                className="object-cover w-full h-56"
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Cloud Migration Project
                </h3>
                <p className="text-gray-700 mb-4">
                  Assisted a finance company in migrating legacy systems to AWS,
                  reducing costs by 40% and improving scalability.
                </p>
                <Link
                  href="#"
                  className="inline-block text-indigo-600 font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
              {/* <Image
                src="/images/portfolio/project4.jpg"
                alt="Mobile Banking App"
                width={500}
                height={300}
                className="object-cover w-full h-56"
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  Mobile Banking App
                </h3>
                <p className="text-gray-700 mb-4">
                  Designed and developed a secure mobile banking app with
                  biometric login and real-time transaction tracking.
                </p>
                <Link
                  href="#"
                  className="inline-block text-indigo-600 font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
              {/* <Image
                src="/images/portfolio/project5.jpg"
                alt="SaaS Dashboard Platform"
                width={500}
                height={300}
                className="object-cover w-full h-56"
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  SaaS Analytics Dashboard
                </h3>
                <p className="text-gray-700 mb-4">
                  Created an intuitive analytics dashboard using React and
                  Node.js with live data visualization for SaaS performance
                  metrics.
                </p>
                <Link
                  href="#"
                  className="inline-block text-indigo-600 font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition overflow-hidden">
              {/* <Image
                src="/images/portfolio/project6.jpg"
                alt="AI Chatbot Solution"
                width={500}
                height={300}
                className="object-cover w-full h-56"
              /> */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700 mb-2">
                  AI Chatbot Solution
                </h3>
                <p className="text-gray-700 mb-4">
                  Implemented a conversational AI chatbot for a telecom company
                  to automate customer support and enhance engagement.
                </p>
                <Link
                  href="#"
                  className="inline-block text-indigo-600 font-medium hover:underline"
                >
                  View Details →
                </Link>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-indigo-700 mb-4">
              Want to Build Something Amazing?
            </h2>
            <p className="text-gray-700 mb-6">
              Let’s collaborate to bring your digital vision to life. From
              concept to launch, Vizlyx is your trusted IT partner.
            </p>
            <Link
              href="/contact"
              className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition"
            >
              Contact Us
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
