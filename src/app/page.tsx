// //"use client";

// import HeroSection from "@/component/HeroSection";
// import ServicesSection from "@/component/ServicesSection";
// import CTASection from "@/component/CTASection";
// import AboutSection from "@/component/AboutSection";
// import FooterSection from "@/component/FooterSection";
// import WhyChooseUsSection from "@/component/WhyChooseUsSection";
// import IndustriesSection from "@/component/IndustriesSection";

// export default function Page() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 font-sans">
//       <HeroSection />
//       <AboutSection />
//       <ServicesSection />
//       <WhyChooseUsSection />
//       <IndustriesSection />
//       <CTASection />
//     </div>
//   );
// }

// //"use client";

import HeroSection from "@/component/HeroSection";
import AboutSection from "@/component/AboutSection";
import ServicesSection from "@/component/ServicesSection";
import WhyChooseUsSection from "@/component/WhyChooseUsSection";
import IndustriesSection from "@/component/IndustriesSection";
import CTASection from "@/component/CTASection";
import Head from "next/head";
import SEOHead from "@/component/SEOHead";

export default function Page() {
  return (
    <>
      <SEOHead
        // title="IT Services & Solutions"
        title="Home"
        description="Vizlyx provides expert IT services including web development, cloud solutions, and IT consulting. Boost your business with our tailored technology solutions."
        keywords="IT services, web development, cloud solutions, IT consulting, Vizlyx"
        url="https://vizlyx.com"
        image="https://vizlyx.com/og-image.jpg"
      />

      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 text-gray-800 font-sans">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <IndustriesSection />
        <CTASection />
      </div>
    </>
  );
}
