"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h4 className="text-2xl font-semibold text-white mb-4">VizLix</h4>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering businesses through smart, scalable, and secure IT
            solutions.
          </p>
        </motion.div>

        {/* Company Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h5 className="text-white font-semibold mb-4">Company</h5>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/about" className="hover:text-white">
                About
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-white">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </motion.div>

        {/* Services */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h5 className="text-white font-semibold mb-4">Our Services</h5>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Cloud Solutions</li>
            <li>Automation</li>
            <li>IT Consulting</li>
          </ul>
        </motion.div>

        {/* Contact / Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          <h5 className="text-white font-semibold mb-4">Get in Touch</h5>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a href="mailto:info@vizlix.com" className="hover:text-white">
                info@vizlix.com
              </a>
            </li>
            <li>Phone: +91 98765 43210</li>
            <li>Location: Pune, India</li>
          </ul>

          <div className="flex gap-4 mt-4">
            <Link href="#" className="hover:text-white">
              LinkedIn
            </Link>
            <Link href="#" className="hover:text-white">
              Twitter
            </Link>
            <Link href="#" className="hover:text-white">
              GitHub
            </Link>
          </div>
        </motion.div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-800 pt-6">
        © {new Date().getFullYear()} VizLix. All rights reserved.
      </div>
    </footer>
  );
}
