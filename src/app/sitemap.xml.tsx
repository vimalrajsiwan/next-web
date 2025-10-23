// pages/sitemap.xml.tsx
import { GetServerSideProps } from "next";

interface SitemapPage {
  url: string;
  lastmod: string;
  changefreq: string;
  priority: number;
}

export default function Sitemap() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = "https://vizlyx.com";

  const staticPages: SitemapPage[] = [
    {
      url: "",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 1.0,
    },
    {
      url: "/services",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.9,
    },
    {
      url: "/about",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.8,
    },
    {
      url: "/contact",
      lastmod: new Date().toISOString(),
      changefreq: "monthly",
      priority: 0.7,
    },
    // Add more pages as needed
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
        .map(
          (page) => `
        <url>
          <loc>${baseUrl}${page.url}</loc>
          <lastmod>${page.lastmod}</lastmod>
          <changefreq>${page.changefreq}</changefreq>
          <priority>${page.priority}</priority>
        </url>
      `
        )
        .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};
