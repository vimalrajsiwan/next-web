"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-20 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold mb-6 text-gray-900"
      >
        Let’s Build Something Great Together
      </motion.h2>
      <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-700">
        Ready to elevate your business with cutting-edge technology? Let’s talk
        about your next project — from web applications to cloud solutions.
      </p>
      <Link
        href="/contact"
        className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300"
      >
        Contact Us
      </Link>
    </section>
  );
}
