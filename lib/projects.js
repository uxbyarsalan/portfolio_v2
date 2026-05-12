/**
 * Single source of truth for project data on the site.
 *
 * Schema:
 *   slug         — URL slug, used for /work/<slug>
 *   title        — display title on cards and detail pages
 *   subtitle     — one-line description shown on detail page hero
 *   stat         — big number / metric shown on home card (e.g. "2.1M")
 *   statLabel    — caption under the stat (e.g. "citizens served")
 *   year         — project year(s)
 *   image        — homepage card thumbnail path (1600x1200 JPG)
 *   role         — your role on the project
 *   client       — who you built it for
 *   platforms    — what was shipped
 *   team         — team size
 *   order        — display order in the home work grid / horizontal scroll
 *   hidden       — (optional) hide from the home grid; detail page still works
 *                   if accessed directly. Used for paused/draft projects.
 *
 * Array order in this file matches `order` for readability, but the
 * WorkHorizontalScroll component sorts by `order` defensively in case
 * future ordering changes need to happen without rearranging this file.
 */
export const projects = [
  {
    slug: "city-watch",
    title: "City Watch",
    subtitle: "Real-time surveillance and response platform for public safety",
    stat: "8,000+",
    statLabel: "cameras integrated",
    year: "2022",
    image: "/images/city-watch/v2/city_watch_homepage_card.jpg",
    role: "Principal UX/UI Designer",
    client: "Punjab Safe City Authority",
    platforms: "Web Application",
    team: "5–10 people",
    order: 1,
  },
  {
    slug: "punjab-jobs",
    title: "Punjab Jobs",
    subtitle: "Redesigning Punjab's employment platform for government job seekers",
    stat: "500K+",
    statLabel: "registered users",
    year: "2024",
    image: "/images/punjab-jobs/v2/punjab_jobs_homepage_card.jpg",
    role: "Program Manager — Design",
    client: "PITB",
    platforms: "Web Portal, Recruiter Module",
    team: "2–5 people",
    order: 2,
  },
  {
    slug: "ess",
    title: "Employee Self Service",
    subtitle: "Workplace community platform for 3,500+ PITB employees",
    stat: "98%",
    statLabel: "daily adoption",
    year: "2022",
    image: "/images/ess/v2/ess_homepage_card.jpg",
    role: "Principal UX/UI Designer",
    client: "PITB (internal)",
    platforms: "Native Mobile App",
    team: "5–10 people",
    order: 3,
  },
  {
    slug: "dastak",
    title: "Maryam Ki Dastak",
    subtitle: "Doorstep government services for 110M+ citizens across Punjab",
    stat: "2.1M",
    statLabel: "citizens served",
    year: "2023",
    image: "/images/dastak/v2/dastak_homepage_card.jpg",
    role: "Principal UX/UI Designer",
    client: "Government of Punjab",
    platforms: "Web Portal, Mobile App, Facilitator App, CRM",
    team: "20+ people",
    order: 4,
  },
  {
    slug: "pitb-official",
    title: "PITB Official",
    subtitle: "Flagship web portal for Punjab's technology authority",
    stat: "13",
    statLabel: "screens, 30 hours",
    year: "2025",
    image: "/images/pitb-official/v2/pitb_homepage_card.jpg",
    role: "Program Manager — Design",
    client: "PITB",
    platforms: "Website",
    team: "2–3 people",
    order: 5,
  },
  {
    slug: "aqi",
    title: "Punjab AQI",
    subtitle: "Environmental monitoring platform making air quality actionable",
    stat: "36",
    statLabel: "districts monitored",
    year: "2025",
    image: "/images/aqi/v2/aqi_homepage_card.jpg",
    role: "Program Manager — Design",
    client: "Environmental Protection Department",
    platforms: "Web Dashboard",
    team: "2–5 people",
    order: 6,
  },
  {
    slug: "ebiz",
    title: "eBiz Punjab",
    subtitle: "One portal for business registration, licenses, and permits across multiple departments",
    stat: "100K+",
    statLabel: "business registrations",
    year: "2024–2025",
    image: "/images/ebiz/v2/ebiz_homepage_card.jpg",
    role: "Program Manager — Design",
    client: "Government of Punjab",
    platforms: "Web Portal, Admin CRM",
    team: "5–10 people",
    order: 7,
    // Hide from home grid by setting to `true`. Detail page stays accessible.
    hidden: false,
  },
];
