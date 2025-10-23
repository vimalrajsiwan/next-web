"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-20 px-6 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-gray-900"
      >
        About Us
      </motion.h2>
      <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
        <strong>vizlyx</strong> is a technology-driven IT services company that
        blends innovation, creativity, and technical excellence. We help
        organizations transform digitally through scalable and secure solutions
        built on modern technologies like{" "}
        <strong>.NET, ReactJS, Angular, Java</strong>, and{" "}
        <strong>Azure Cloud</strong>.
      </p>

      <div className="mt-10 space-y-6 max-w-3xl mx-auto">
        <p className="text-gray-700">
          <strong>Our Mission:</strong> To empower businesses with smart,
          efficient, and reliable technology that drives success.
        </p>
        <p className="text-gray-700">
          <strong>Our Vision:</strong> To be a global IT partner recognized for
          delivering measurable results and innovation excellence.
        </p>
      </div>
    </section>
  );
}
