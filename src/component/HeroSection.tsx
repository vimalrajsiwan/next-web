// // //"use client";

// // import { motion } from "framer-motion";
// // import Link from "next/link";

// // export default function HeroSection() {
// //   return (
// //     <section
// //       className="relative h-[90vh] flex items-center justify-center text-center text-white bg-cover bg-center"
// //       style={{
// //         backgroundImage: "url('/images/hero-section.png')",
// //       }}
// //     >
// //       {/* Gradient Overlay */}
// //       <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

// //       {/* Hero Content */}
// //       <motion.div
// //         initial={{ opacity: 0, y: 40 }}
// //         animate={{ opacity: 1, y: 0 }}
// //         transition={{ duration: 1 }}
// //         className="relative z-10 max-w-3xl px-6"
// //       >
// //         <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight mb-6 drop-shadow-lg">
// //           Empowering Businesses with <br className="hidden sm:block" /> Smart IT
// //           Solutions
// //         </h1>

// //         <p className="text-lg sm:text-xl text-gray-200 mb-10 leading-relaxed">
// //           At <span className="font-semibold text-blue-400">vizlyx</span>, we
// //           help startups and enterprises grow through modern web, cloud, and
// //           automation solutions.
// //         </p>
// //       </motion.div>

// //       <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-gray-900/70 to-transparent" />
// //     </section>
// //   );
// // }

// //"use client";

// import { motion } from "framer-motion";
// import Image from "next/image";
// import Link from "next/link";

// export default function HeroSection() {
//   return (
//     <section className="relative w-full h-[90vh] flex items-center justify-center text-center overflow-hidden">
//       <Image
//         src="/images/hero-section.webp"
//         alt="IT team collaboration"
//         fill
//         className="object-cover brightness-75"
//         priority
//       />
//       <div className="relative z-10 max-w-3xl px-6">
//         <motion.h1
//           initial={{ opacity: 0, y: 40 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//           className="text-5xl sm:text-6xl font-extrabold text-white mb-6 drop-shadow-lg"
//         >
//           Empowering Businesses with Smart IT Solutions
//         </motion.h1>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2 }}
//           className="text-xl text-gray-200 mb-8 leading-relaxed"
//         >
//           At <span className="font-semibold text-blue-300">vizlyx</span>, we
//           help startups and enterprises grow through web, cloud, and automation
//           expertise.
//         </motion.p>
//         <Link
//           href="/contact"
//           className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
//         >
//           Get in Touch
//         </Link>
//       </div>
//     </section>
//   );
// }

// "use client";

import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-center text-center overflow-hidden">
      {/* Background Image */}

      <Image
        src="/images/hero-section.webp"
        alt="IT team collaboration"
        fill
        className="object-cover brightness-75"
        priority
        quality={80}
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl px-6">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Empowering Businesses with Smart IT Solutions
        </h1>

        <p className="text-xl text-gray-200 mb-8 leading-relaxed">
          At <span className="font-semibold text-blue-300">Vizlyx</span>, we
          help startups and enterprises grow through web, cloud, and automation
          expertise.
        </p>

        {/* <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:brightness-110 transition-all duration-300"
        >
          Get in Touch
        </Link>
        <Link
          href="/contact"
          className="inline-block bg-gradient-to-r from-sky-500 to-blue-700 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
        >
          Get in Touch
        </Link> */}
      </div>
    </section>
  );
}
