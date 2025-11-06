import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://vizlyx.com";
  const pages = ["", "/services", "/about", "/contact", "/portfolio"];
  return pages.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
  }));
}
