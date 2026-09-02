import { projects } from "@/lib/projects";

// Generates /sitemap.xml at build time. Static routes plus one entry per
// case study, derived from lib/projects.js so the sitemap stays in sync with
// the work grid (hidden/draft projects are excluded from indexing).
const BASE = "https://www.uxbyarsalan.com";

export default function sitemap() {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1.0, changeFrequency: "monthly" },
    { path: "/resume", priority: 0.8, changeFrequency: "monthly" },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" },
    { path: "/making-of", priority: 0.6, changeFrequency: "yearly" },
    { path: "/privacy", priority: 0.2, changeFrequency: "yearly" },
  ];

  const workRoutes = projects
    .filter((p) => !p.hidden)
    .map((p) => ({
      path: `/work/${p.slug}`,
      priority: 0.8,
      changeFrequency: "yearly",
    }));

  return [...staticRoutes, ...workRoutes].map(({ path, priority, changeFrequency }) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
