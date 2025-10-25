//"use client";

import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-16">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <h4 className="text-2xl font-semibold text-white mb-4">Vizlyx</h4>
          <p className="text-sm leading-relaxed text-gray-400">
            Empowering businesses through smart, scalable, and secure IT
            solutions.
          </p>
        </div>

        {/* Company Links */}
        <div>
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
        </div>

        {/* Services */}
        <div>
          <h5 className="text-white font-semibold mb-4">Our Services</h5>
          <ul className="space-y-2 text-sm">
            <li>Web Development</li>
            <li>Cloud Solutions</li>
            <li>Automation</li>
            <li>IT Consulting</li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h5 className="text-white font-semibold mb-4">Get in Touch</h5>
          <ul className="space-y-2 text-sm">
            <li>
              Email:{" "}
              <a href="mailto:info@vizlyx.com" className="hover:text-white">
                info@vizlyx.com
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
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 mt-12 border-t border-gray-800 pt-6">
        &copy; {new Date().getFullYear()} Vizlyx. All rights reserved.
      </div>

      {/* <footer className="w-full py-6 bg-black text-white text-center">
        &copy; {new Date().getFullYear()} vizlyx. All rights reserved.
      </footer> */}
    </footer>
  );
}
