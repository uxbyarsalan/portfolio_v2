/**
 * Single source of truth for project data on the site.
 *
 * Schema:
 *   slug         — URL slug, used for /work/<slug>
 *   title        — project name; shown as the small name TAG on home cards,
 *                  and as the display title on detail pages
 *   headline     — outcome-led card heading shown as the main line on home cards
 *   subtitle     — one-line description (detail page hero / legacy)
 *   stat         — raw big number (legacy / detail use, e.g. "2.1M")
 *   statLabel    — caption for the raw stat (legacy)
 *   stats        — combined stat line shown on the home card (e.g. "8,000+ cameras · SUS 78.25")
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
    headline: "From live footage to fast decisions",
    subtitle: "Real-time surveillance and response platform for public safety",
    stat: "8,000+",
    statLabel: "cameras integrated",
    stats: "8,000+ cameras · SUS 78.25",
    year: "2022",
    image: "/images/city-watch/v2/city_watch_homepage_card.jpg",
    role: "Principal UX/UI Designer",
    client: "Punjab Safe City Authority",
    platforms: "Web Application",
    team: "5–10 people",
    order: 1,
  },
  {
    slug: "dastak",
    title: "Maryam Ki Dastak",
    headline: "Rebuilding how services reach people",
    subtitle: "Doorstep government services for 110M+ citizens across Punjab",
    stat: "2.1M",
    statLabel: "citizens served",
    stats: "2.1M+ services · 40 districts",
    year: "2023",
    image: "/images/dastak/v2/dastak_homepage_card.jpg",
    role: "Principal UX/UI Designer",
    client: "Government of Punjab",
    platforms: "Web Portal, Mobile App, Facilitator App, CRM",
    team: "20+ people",
    order: 2,
  },
  {
    slug: "punjab-jobs",
    title: "Punjab Jobs",
    headline: "From spreadsheets to a hiring platform",
    subtitle: "Redesigning Punjab's employment platform for government job seekers",
    stat: "500K+",
    statLabel: "registered users",
    stats: "500K+ users · 168 departments",
    year: "2024",
    image: "/images/punjab-jobs/v2/punjab_jobs_homepage_card.jpg",
    role: "Program Manager — Design",
    client: "PITB",
    platforms: "Web Portal, Recruiter Module",
    team: "2–5 people",
    order: 3,
  },
  {
    slug: "aqi",
    title: "Punjab AQI",
    headline: "Turning air data into action",
    subtitle: "Environmental monitoring platform making air quality actionable",
    stat: "36",
    statLabel: "districts monitored",
    stats: "36 districts · 6 pollutants",
    year: "2025",
    image: "/images/aqi/v2/aqi_homepage_card.jpg",
    role: "Program Manager — Design",
    client: "Environmental Protection Department",
    platforms: "Web Dashboard",
    team: "2–5 people",
    order: 4,
  },
  {
    slug: "ess",
    title: "Employee Self Service",
    headline: "From scattered tools to one workplace",
    subtitle: "Workplace community platform for 3,500+ PITB employees",
    stat: "98%",
    statLabel: "daily adoption",
    stats: "3,500+ employees · 98% daily use",
    year: "2022",
    image: "/images/ess/v2/ess_homepage_card.jpg",
    role: "Principal UX/UI Designer",
    client: "PITB (internal)",
    platforms: "Native Mobile App",
    team: "5–10 people",
    order: 5,
  },
  {
    slug: "ebiz",
    title: "eBiz Punjab",
    headline: "Cutting the red tape out of registering",
    subtitle: "One portal for business registration, licenses, and permits across multiple departments",
    stat: "100K+",
    statLabel: "business registrations",
    stats: "7 days to 2 · 100K+ registrations",
    year: "2024–2025",
    image: "/images/ebiz/v2/ebiz_homepage_card.jpg",
    role: "Program Manager — Design",
    client: "Government of Punjab",
    platforms: "Web Portal, Admin CRM",
    team: "5–10 people",
    order: 6,
    // Hide from home grid by setting to `true`. Detail page stays accessible.
    hidden: false,
  },
  {
    slug: "pitb-official",
    title: "PITB Official",
    headline: "A flagship redesign at sprint speed",
    subtitle: "Flagship web portal for Punjab's technology authority",
    stat: "13",
    statLabel: "screens, 30 hours",
    stats: "13 screens · 30 hours",
    year: "2025",
    image: "/images/pitb-official/v2/pitb_homepage_card.jpg",
    role: "Program Manager — Design",
    client: "PITB",
    platforms: "Website",
    team: "2–3 people",
    order: 7,
  },
];
