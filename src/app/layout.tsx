
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import MobileNav from "./MobileNav";
import Footer from "@/component/footer";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "VizLix IT Services",
  description: "Empowering Your Business with Innovative IT Solutions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <nav className="w-full bg-white shadow-lg border-b border-gray-100 py-3 px-8 flex justify-between items-center sticky top-0 z-50">
              <a href="/" className="flex items-center gap-4">
                <img src="/images/company-pic.png" alt="VizLix Logo" style={{ width: '8rem', height: '2.5rem' }} className="object-cover" />
              </a>
              <div className="hidden md:flex gap-8 text-lg font-semibold font-sans">
                <a href="/" className="text-gray-700 hover:text-indigo-600 transition-colors">Home</a>
                <a href="/services" className="text-gray-700 hover:text-indigo-600 transition-colors">Services</a>
                <a href="/about" className="text-gray-700 hover:text-indigo-600 transition-colors">About</a>
                <a href="/contact" className="text-gray-700 hover:text-indigo-600 transition-colors">Contact</a>
              </div>
              <MobileNav />
            </nav>
        {children}

        <Footer />
      </body>
    </html>
  );
}
