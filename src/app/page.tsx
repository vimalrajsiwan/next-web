
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-900">
      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-white text-gray-900 shadow-xl border-b border-gray-100">
        <Image src="/images/horo-section.jpg" alt="Team working" width={600} height={320} className="rounded-2xl mb-10 shadow-xl object-cover w-full max-w-2xl" priority />
        <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight text-center font-sans">VizLix</h1>
        <p className="text-2xl sm:text-3xl mb-10 text-center max-w-3xl font-sans">Empowering Your Business with Innovative IT Solutions</p>
        {/* <a href="#contact" className="bg-indigo-700/500 text-white font-semibold px-10 py-4 rounded-full shadow-lg hover:bg-indigo-800 transition text-lg">Get in Touch</a> */}
      </section>

      
    </div>
  );
}
