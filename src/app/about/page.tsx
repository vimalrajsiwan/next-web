import SEOHead from "@/component/SEOHead";
import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <SEOHead
        title="About Us"
        description="Learn about Vizlyx — a trusted IT consulting company providing digital transformation, cloud modernization, and custom software solutions for global enterprises."
        keywords="About Vizlyx, IT consulting, software development company, digital transformation"
        url="https://vizlyx.com/about"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 font-sans">
        <section className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">
            About VizLix
          </h1>
          <div className="flex flex-col items-center mb-8">
            <Image
              src="/images/about.jpg"
              alt="VizLix Team"
              width={180}
              height={180}
              className="rounded-xl shadow-lg object-cover mb-4"
            />
            <p className="text-lg mb-6 text-gray-800 text-center">
              VizLix is dedicated to delivering innovative IT solutions that
              empower businesses to thrive in the digital era. Our mission is to
              provide reliable, scalable, and secure technology services
              tailored to our clients' unique needs.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              Our Mission
            </h2>
            <p className="text-gray-700">
              To drive business success through technology innovation,
              exceptional service, and trusted partnerships.
            </p>
          </div>
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              Our Vision
            </h2>
            <p className="text-gray-700">
              To be a global leader in IT services, recognized for our
              expertise, integrity, and commitment to client growth.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-indigo-600 mb-2">
              Our Team
            </h2>
            <p className="text-gray-700">
              Our team consists of passionate professionals with deep expertise
              in software development, cloud, cybersecurity, and digital
              transformation. We work collaboratively to deliver outstanding
              results for our clients.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
