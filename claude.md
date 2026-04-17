# Mark MacLean Painting — Project Context

## What this is
Local painting contractor website for Mark MacLean Painting, serving the Merrimack Valley region of Massachusetts (Andover, North Andover, Haverhill, Billerica, Lowell, Methuen and surrounding towns).

## Current state
Migrated from a Lovable-generated React/Vite SPA. Converting to Next.js 14 App Router with TypeScript and Tailwind for SSG and SEO.

## Goals
- Static site generation (SSG) for all pages via generateStaticParams
- SEO-optimized structure: unique meta titles, descriptions, and H1s per page
- LocalBusiness JSON-LD schema on homepage with areaServed array
- Self-referencing canonical tags on every page
- Fast load times, high Lighthouse scores

## Stack
- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- shadcn/ui components
- Deployed on Vercel

## Site structure
- / — Homepage
- /services — Services hub
- /[slug] — Individual service and city pages at root level (exterior-painting, interior-painting, cabinet-painting, drywall-repair, wallpaper-hanging, wallpaper-removal, wood-staining, pressure-washing, plus city slugs)
- /areas — Areas hub
- /gallery — Photo gallery
- /contact — Contact page with estimate form

## Content source
Static data files in /data:
- services.ts — service name, slug, description, expertise signals
- cities.ts — city name, slug, zip, short description

## SEO conventions
- Page title pattern: "[Service Name] in Merrimack Valley, MA | Mark MacLean Painting"
- City page title pattern: "Professional Painters in [City], MA | Mark MacLean Painting"
- Homepage title: "Professional Painter in Merrimack Valley, MA | Mark MacLean Painting"
- Meta descriptions: 150-160 characters

## Design notes
- Existing Lovable design should be preserved as closely as possible during migration
- Do not invent claims not grounded in the service descriptions (no turnaround times, percentage savings, etc.)
- Phone number renders via a Google Voice number (to be added)