# Meherun Nessa Ferdausi — Developer Portfolio

A modern, responsive developer portfolio built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Live Demo

[meheroon-portfolio.vercel.app](https://meheroon-portfolio.vercel.app/)

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **Testing**: Jest + React Testing Library

## Features

- Fully responsive navbar with mobile menu
- Hero section with profile photo, designation, and social links
- Skills section with animated progress bars
- 6 project cards with dynamic detail pages (`/projects/[slug]`)
- Contact form with client-side validation
- Resume page with print-optimized layout
- SEO: dynamic metadata, Open Graph tags, sitemap, robots.txt
- Security headers (X-Frame-Options, CSP, Referrer-Policy)
- Scroll reveal animations via Framer Motion

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Run tests
npm test
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
portfolio-next/
├── app/                    # Next.js App Router pages
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── skills/page.tsx     # Skills page
│   ├── projects/           # Projects + dynamic [slug]
│   ├── contact/page.tsx    # Contact page
│   └── resume/page.tsx     # Resume page
├── components/             # Reusable React components
│   ├── layout/             # Navbar, Footer, PageHeader
│   ├── home/               # Hero, About, Skills, Projects, Experience, Contact sections
│   ├── ui/                 # Button, SkillBar, SocialLinks, ScrollReveal, etc.
│   └── [feature]/          # Page-specific components
├── lib/                    # Data and utilities
│   ├── data.ts             # All portfolio content
│   └── utils.ts            # cn() helper
└── public/images/          # Static assets
```

## Deployment

Deployed on [Vercel](https://meheroon-portfolio.vercel.app/).

## Contact

- **Email**: meherun.dev@gmail.com
- **LinkedIn**: [Meherun Nessa Ferdausi](https://www.linkedin.com/in/meherun-nessa-ferdausi-korobi/)
- **GitHub**: [meheroon](https://github.com/meheroon)
- **Facebook**: [rooonroon](https://www.facebook.com/rooonroon)
