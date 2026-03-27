# Mark MacLean Painting

Marketing website and lead generation tool for a local painting contractor serving the Merrimack Valley region of Massachusetts and southern New Hampshire.

## Stack

- **Framework:** Next.js 14 (App Router) with TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Hosting:** Vercel (static site generation + serverless functions)
- **Email:** AWS SES for transactional form submissions
- **Domain:** markmacleanpainting.com

## Architecture

The site is fully statically generated at build time using `generateStaticParams`, with a single serverless API route for the quote request form. No database, no CMS, no client-side routing beyond what Next.js provides.

### Pages

| Route | Purpose |
|---|---|
| `/` | Homepage with hero, services, testimonials, trust signals |
| `/services` | Services hub |
| `/:service-slug` | Individual service pages with gallery (8 services) |
| `/areas` | Areas served hub |
| `/:city-slug` | City landing pages (12 cities) |
| `/gallery` | Photo gallery with masonry layout |
| `/contact` | Contact info + quote request form |

**31 pages total**, all pre-rendered as static HTML.

### Data Model

All content lives in static TypeScript files under `src/data/`:
- `siteData.ts` - Services, cities, business constants
- `gallery.ts` - Gallery images with service/location metadata

### API

`POST /api/quote` - Serverless function that validates form input, applies honeypot bot detection, and sends an HTML email via AWS SES.

## SEO

- Unique meta title, description, and canonical tag per page
- LocalBusiness JSON-LD schema on homepage (with `aggregateRating`, `areaServed`, `sameAs`)
- Service JSON-LD schema on each service page
- Open Graph meta tags for social sharing
- Auto-generated `sitemap.xml` and `robots.txt`
- Self-referencing canonical tags

## Local Development

```bash
npm install
npm run dev
```

The quote form requires AWS SES credentials. Create a `.env.local`:

```
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_SES_REGION=us-east-1
SES_FROM_EMAIL=
SES_TO_EMAIL=
```

## Build

```bash
npm run build
npm run start
```

## Deployment

Deployed on Vercel with automatic builds from `main`. Environment variables are configured in the Vercel dashboard.
