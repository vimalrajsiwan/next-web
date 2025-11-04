import Image from "next/image";
import type { Metadata } from "next";
import SEOHead from "@/component/SEOHead";
import Link from "next/link";

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
    "software development company",
  ],
  openGraph: {
    title: "IT Services & Solutions | Vizlyx",
    description:
      "Explore Vizlyx’s expert IT services including web, mobile, and cloud solutions designed for scalability and growth.",
    images: ["/og-image.jpg"],
    url: "https://vizlyx.com/services",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Services & Solutions | Vizlyx",
    description: "Transform your business with Vizlyx’s IT expertise.",
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://vizlyx.com/services",
  },
};

export default function Services() {
  return (
    <>
      <SEOHead
        title="Our Services"
        description="Vizlyx provides full-stack web development, cloud solutions, and enterprise software services using .NET, Angular, ReactJS, Java, and Azure."
        keywords="software development, web app, Azure cloud, .NET, Angular, ReactJS, enterprise IT services"
        url="https://vizlyx.com/services"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 font-sans text-gray-800">
        <section className="max-w-5xl mx-auto mb-16 text-center">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-6">
            Our IT Services
          </h1>
          <p className="text-lg max-w-3xl mx-auto text-gray-700 leading-relaxed">
            At <strong>Vizlyx</strong>, we combine innovation, technology, and
            strategy to help businesses scale efficiently. From custom
            application development to secure cloud solutions, our services are
            built to deliver measurable results.
          </p>
        </section>

        {/* --- Services Grid --- */}
        <section className="max-w-5xl mx-auto grid gap-8 md:grid-cols-3">
          {[
            {
              img: "/images/web-development.jpg",
              title: "Custom Software Development",
              desc: "Web, mobile, and desktop solutions tailored to your business needs using .NET, Java, and modern frameworks.",
            },
            {
              img: "/images/cloud-ai.jpg",
              title: "Cloud Solutions",
              desc: "Cloud migration, management, and optimization for scalability, cost-efficiency, and security — powered by Azure.",
            },
            {
              img: "/images/mobile-apps.jpg",
              title: "Cybersecurity",
              desc: "Comprehensive security audits, monitoring, and protection to safeguard your digital assets and data.",
            },
            {
              img: "/images/about.jpg",
              title: "IT Consulting",
              desc: "Align your technology investments with business goals through expert consulting and strategy planning.",
            },
            {
              img: "/images/horo-section.jpg",
              title: "Digital Transformation",
              desc: "Leverage AI, automation, and data analytics to modernize and optimize your business operations.",
            },
            {
              img: "/images/about.jpg",
              title: "Support & Maintenance",
              desc: "Reliable post-deployment support, monitoring, and maintenance for uninterrupted performance.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <Image
                src={service.img}
                alt={service.title}
                width={80}
                height={80}
                className="mb-4 rounded-lg object-cover"
                priority={i === 0}
              />
              <h2 className="text-xl font-semibold mb-2 text-indigo-800">
                {service.title}
              </h2>
              <p className="text-gray-700 text-center">{service.desc}</p>
            </div>
          ))}
        </section>

        {/* --- Detailed Section --- */}
        <section className="max-w-4xl mx-auto mt-20 text-center">
          <h2 className="text-3xl font-bold text-indigo-700 mb-6">
            End-to-End Technology Solutions
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Whether you’re a startup or an enterprise, our full-cycle
            development services cover every phase — from concept and design to
            deployment and ongoing support. We emphasize performance, security,
            and scalability to ensure your systems grow as your business does.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our development practices follow agile methodology with a focus on
            user-centric design, continuous delivery, and cloud-native
            architecture. We help clients reduce time-to-market and optimize
            resources while maintaining quality and compliance.
          </p>
        </section>

        {/* --- Why Choose Us --- */}
        <section className="max-w-5xl mx-auto mt-20">
          <h2 className="text-3xl font-bold text-indigo-700 text-center mb-10">
            Why Choose Vizlyx
          </h2>
          <ul className="grid md:grid-cols-2 gap-6 text-gray-700">
            {[
              "Proven expertise in .NET, ReactJS, Angular, and Azure Cloud.",
              "End-to-end delivery from planning to deployment.",
              "Client-first approach ensuring measurable ROI.",
              "Agile, transparent, and collaborative process.",
              "24/7 dedicated support and maintenance.",
              "Focus on performance, scalability, and security.",
            ].map((point, i) => (
              <li
                key={i}
                className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition flex items-start gap-3"
              >
                <span className="text-green-600 mt-1">✅</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* --- CTA Section --- */}
        <section className="text-center mt-24">
          <h2 className="text-3xl font-bold text-indigo-700 mb-4">
            Let’s Build Your Next Project
          </h2>
          <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
            Partner with <strong>Vizlyx</strong> to transform your digital
            journey. Whether it’s a modern web app, enterprise software, or
            secure cloud environment — we bring your ideas to life.
          </p>

          <Link
            href="/contact"
            className="px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-200 transition"
          >
            Contact Us
          </Link>
        </section>
      </div>
    </>
  );
}
