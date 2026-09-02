// Generates /robots.txt at build time. Allows all crawlers and points them
// to the sitemap so every route is discoverable.
const BASE = "https://www.uxbyarsalan.com";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${BASE}/sitemap.xml`,
  };
}
