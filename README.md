# uxbyarsalan.com — Portfolio

A Scandinavian minimal portfolio with data confidence. Built with Next.js 15, React 19, Tailwind CSS 4, and Framer Motion.

## Quick start

### Prerequisites
- **Node.js 18+** — Download from https://nodejs.org (LTS version)
- **VS Code** — Download from https://code.visualstudio.com (recommended editor)

### Setup

```bash
# 1. Open terminal, navigate to this folder
cd portfolio

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open http://localhost:3000 in your browser
```

## Project structure

```
portfolio/
├── app/
│   ├── globals.css          # Design tokens and global styles
│   ├── layout.js            # Root layout (meta, fonts)
│   ├── page.js              # Homepage
│   ├── contact/
│   │   └── page.js          # Contact page
│   └── work/
│       ├── city-watch/       # Case study pages (one per project)
│       ├── dastak/           # ← Template example built out
│       ├── punjab-jobs/
│       ├── ess/
│       ├── pitb-official/
│       └── aqi/
├── components/
│   ├── Nav.js               # Navigation (fixed, scrolls, mobile menu)
│   ├── Footer.js            # Footer with CTA and social links
│   ├── ProjectCard.js       # Project card for work grid
│   └── SectionLabel.js      # Section label component
├── lib/
│   └── projects.js          # Project data (all 6 projects)
├── public/
│   └── images/              # Place project images here
└── package.json
```

## Adding your images

Place project images in `/public/images/`:
- `dastak.jpg` — Dastak hero/thumbnail
- `citywatch.jpg` — City Watch hero/thumbnail
- `punjabjobs.jpg` — Punjab Jobs hero/thumbnail
- `ess.jpg` — Employee Self Service hero/thumbnail
- `pitb.jpg` — PITB Official hero/thumbnail
- `aqi.jpg` — AQI hero/thumbnail

Recommended size: 1200x750px, optimized JPG or WebP.

## Building remaining case study pages

The Dastak case study (`app/work/dastak/page.js`) is fully built as a template. To create the other 5:

1. Copy the Dastak page structure
2. Replace the content with the web-ready copy from your documents
3. Update metadata, stats, and image placeholders

## Design system

### Colors
- Background: `#FAFAFA` (warm off-white)
- Cards: `#F0F0F0` (subtle gray)
- Text: `#1A1A1A` (near-black)
- Muted: `#6B6B6B` (secondary text)
- Subtle: `#999999` (hints, labels)
- Accent: `#1A1A1A` (black — single accent)

### Typography
- Font: Inter (400, 500, 600)
- H1: text-4xl to text-6xl, font-medium, tracking-tight
- Body: text-sm to text-base, leading-relaxed
- Labels: text-[11px], uppercase, tracking-[0.25em]

### Spacing
- Sections: pb-24 (generous)
- Cards: gap-6
- Content max-width: max-w-6xl (1152px)
- Case study content: max-w-3xl (768px)

## Deployment

```bash
# Build for production
npm run build

# Deploy to Vercel (recommended)
# 1. Push to GitHub
# 2. Connect repo at vercel.com
# 3. Auto-deploys on every push
```

## Next steps

- [ ] Add project images to /public/images/
- [ ] Build remaining 5 case study pages from web-ready documents
- [ ] Add Framer Motion entrance animations
- [ ] Connect contact form to a service (Formspree, Resend, etc.)
- [ ] Add LinkedIn URL to social links
- [ ] Set up custom domain (uxbyarsalan.com)
- [ ] Run Lighthouse audit and optimize
