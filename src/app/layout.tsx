import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import MobileNav from "./MobileNav";
import Footer from "@/component/footer";
import SEOHead from "@/component/SEOHead";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "vizlyx IT Services",
  description: "Empowering Your Business with Innovative IT Solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SEOHead />
        {/* NAVBAR */}
        <nav className="w-full bg-white shadow-lg border-b border-gray-100 py-3 px-8 flex justify-between items-center sticky top-0 z-50">
          <Link href="/" className="flex items-center gap-4">
            <img
              src="/images/company-pic.png"
              alt="vizlyx Logo"
              style={{ width: "8rem", height: "2.5rem" }}
              className="object-cover"
            />
          </Link>

          <div className="hidden md:flex gap-8 text-lg font-semibold font-sans">
            <Link href="/">Home</Link>
            <Link href="/services">Services</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/contact">Contact</Link>
          </div>

          <MobileNav />
        </nav>

        {/* MAIN CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
