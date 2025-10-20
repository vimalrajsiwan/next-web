import Image from "next/image";

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 font-sans">
      <section className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-extrabold text-indigo-700 mb-8 text-center">Our IT Services</h1>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
            <Image src="/images/web-development.jpg" alt="Custom Software Development" width={80} height={80} className="mb-4 rounded-lg object-cover" />
            <h2 className="text-xl font-semibold mb-2 text-indigo-800">Custom Software Development</h2>
            <p className="text-gray-700">Web, mobile, and desktop solutions tailored to your business needs.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
            <Image src="/images/cloud-ai.jpg" alt="Cloud Solutions" width={80} height={80} className="mb-4 rounded-lg object-cover" />
            <h2 className="text-xl font-semibold mb-2 text-indigo-800">Cloud Solutions</h2>
            <p className="text-gray-700">Cloud migration, management, and optimization for scalability and security.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
            <Image src="/images/mobile-apps.jpg" alt="Cybersecurity" width={80} height={80} className="mb-4 rounded-lg object-cover" />
            <h2 className="text-xl font-semibold mb-2 text-indigo-800">Cybersecurity</h2>
            <p className="text-gray-700">Security assessments, monitoring, and protection for your digital assets.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
            <Image src="/images/about.jpg" alt="IT Consulting" width={80} height={80} className="mb-4 rounded-lg object-cover" />
            <h2 className="text-xl font-semibold mb-2 text-indigo-800">IT Consulting</h2>
            <p className="text-gray-700">Strategic IT advice to align technology with your business goals.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
            <Image src="/images/horo-section.jpg" alt="Digital Transformation" width={80} height={80} className="mb-4 rounded-lg object-cover" />
            <h2 className="text-xl font-semibold mb-2 text-indigo-800">Digital Transformation</h2>
            <p className="text-gray-700">Modernize your business with automation and digital tools.</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition flex flex-col items-center">
            <Image src="/images/about.jpg" alt="Support & Maintenance" width={80} height={80} className="mb-4 rounded-lg object-cover" />
            <h2 className="text-xl font-semibold mb-2 text-indigo-800">Support & Maintenance</h2>
            <p className="text-gray-700">Ongoing support to keep your systems running smoothly.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
