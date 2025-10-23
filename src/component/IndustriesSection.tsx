// //"use client";

// import { motion } from "framer-motion";

// const industries = [
//   "Information Technology & SaaS",
//   "Healthcare & Life Sciences",
//   "Education & E-Learning",
//   "Retail & E-Commerce",
//   "Finance & Banking",
//   "Manufacturing & Logistics",
// ];

// export default function IndustriesSection() {
//   return (
//     <section className="py-20 text-center">
//       <motion.h2
//         initial={{ opacity: 0, y: 30 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         className="text-4xl font-bold mb-10 text-gray-900"
//       >
//         Industries We Serve
//       </motion.h2>
//       <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-6">
//         {industries.map((industry, i) => (
//           <motion.div
//             key={i}
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: i * 0.1 }}
//             className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition"
//           >
//             {industry}
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// }

export default function IndustriesSection() {
  const industries = [
    "Information Technology & SaaS",
    "Healthcare & Life Sciences",
    "Education & E-Learning",
    "Retail & E-Commerce",
    "Finance & Banking",
    "Manufacturing & Logistics",
  ];

  return (
    <section className="py-20 text-center">
      <h2 className="text-4xl font-bold mb-10 text-gray-900">
        Industries We Serve
      </h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 px-6">
        {industries.map((industry, i) => (
          <div
            key={i}
            className="bg-white rounded-xl p-5 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-transform duration-300"
          >
            {industry}
          </div>
        ))}
      </div>
    </section>
  );
}
