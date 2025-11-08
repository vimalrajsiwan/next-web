import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import MobileNav from "./MobileNav";
// import Footer from "@/component/footer";
// import SEOHead from "@/component/SEOHead";
import FooterSection from "@/component/FooterSection";
// import Head from "next/head";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Vizlyx | Empowering Businesses with Smart IT Solutions",
    template: "%s | Vizlyx",
  },
  description:
    "Vizlyx empowers businesses with smart IT solutions, web development, and cloud consulting for digital growth.",
  keywords: [
    "IT solutions",
    "software development",
    "cloud consulting",
    "digital transformation",
    "Vizlyx",
    "web development",
    "IT consulting",
  ],
  metadataBase: new URL("https://vizlyx.com"),
  openGraph: {
    title: "Vizlyx | Empowering Businesses with Smart IT Solutions",
    description:
      "Vizlyx delivers innovative IT, software, and cloud solutions to help companies thrive in the digital age.",
    url: "https://vizlyx.com",
    siteName: "Vizlyx",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Vizlyx - Empowering Businesses with Smart IT Solutions",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vizlyx | Empowering Businesses with Smart IT Solutions",
    description:
      "Transform your business digitally with Vizlyx IT consulting and software development services.",
    images: ["/og-image.jpg"],
    creator: "@vizlyx",
  },
  icons: {
    icon: "/favicon.ico",
  },
  alternates: {
    canonical: "https://vizlyx.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Vizlyx",
              image: "https://vizlyx.com/og-image.jpg",
              url: "https://vizlyx.com",
              logo: "https://vizlyx.com/og-image.jpg",
              description: "Empowering Businesses with Smart IT Solutions",
              telephone: "+91-8851626273",
              sameAs: [
                "https://linkedin.com/company/vizlyx",
                "https://x.com/vizlyx",
              ],

              // "@context": "https://schema.org",
              // "@type": "LocalBusiness",
              // name: "Vizlyx",
              // image: "https://vizlyx.com/og-image.jpg",
              // url: "https://vizlyx.com",
              // telephone: "+91-8851626273",
              // priceRange: "$$",
              // address: {

              //   "@type": "PostalAddress",
              //   streetAddress: "Your Office Address",
              //   addressLocality: "City",
              //   addressRegion: "State",
              //   postalCode: "PINCODE",
              //   addressCountry: "IN",
              // },
            }),
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* <SEOHead /> */}
        <nav className="w-full bg-white shadow-lg border-b border-gray-100 py-3 px-8 flex justify-between items-center sticky top-0 z-50">
          <Link prefetch={true} href="/" className="flex items-center gap-4">
            <img
              src="/images/company-pic-updated.webp"
              alt="Vizlyx IT solutions team working on software development"
              style={{ width: "8rem", height: "2.5rem" }}
              className="object-cover"
            />
          </Link>

          <div className="hidden md:flex gap-8 text-lg font-semibold font-sans">
            <Link prefetch={true} href="/">
              Home
            </Link>
            <Link prefetch={true} href="/services">
              Services
            </Link>
            <Link prefetch={true} href="/about">
              About
            </Link>
            <Link prefetch={true} href="/portfolio">
              Portfolio
            </Link>
            <Link prefetch={true} href="/contact">
              Contact
            </Link>
          </div>

          <MobileNav />
        </nav>

        {/* MAIN CONTENT */}
        <main>{children}</main>

        {/* FOOTER */}
        {/* <Footer /> */}
        <FooterSection />
      </body>
    </html>
  );
}
