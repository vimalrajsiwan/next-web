import SEOHead from "@/component/SEOHead";
import Image from "next/image";
import Link from "next/link";

export default function Portfolio() {
  return (
    <>
      <SEOHead
        title="Portfolio - Vizlyx Projects & Case Studies"
        description="Explore Vizlyx's portfolio of successful IT projects — from custom web applications and enterprise software to cloud transformation and mobile app solutions."
        keywords="Vizlyx portfolio, IT projects, software development, cloud solutions, web development, case studies"
        url="https://vizlyx.com/portfolio"
      />

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
    </>
  );
}
