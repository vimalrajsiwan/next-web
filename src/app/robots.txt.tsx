// pages/robots.txt.tsx
import { GetServerSideProps } from "next";

export default function RobotsTxt() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const robotsText = `
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://vizlyx.com/sitemap.xml
  `;

  res.setHeader("Content-Type", "text/plain");
  res.write(robotsText);
  res.end();

  return {
    props: {},
  };
};
