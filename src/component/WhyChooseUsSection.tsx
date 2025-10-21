"use client";

import { motion } from "framer-motion";

const points = [
  "Proven expertise in .NET, C#, ReactJS, Angular, and Azure.",
  "Client-first approach with measurable outcomes.",
  "Agile, transparent, and collaborative work process.",
  "Full-stack development capabilities across technologies.",
  "Focus on scalability, performance, and security.",
];

export default function WhyChooseUsSection() {
  return (
    <section className="py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-10 text-gray-900"
      >
        Why Choose VizLix
      </motion.h2>
      <ul className="max-w-4xl mx-auto space-y-4 text-lg text-gray-700">
        {points.map((p, i) => (
          <motion.li
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition"
          >
            ✅ {p}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
