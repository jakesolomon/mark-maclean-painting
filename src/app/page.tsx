import Link from "next/link";
import { Shield, FileText, ArrowRight, Users, Star } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { services, cities, BUSINESS_NAME, PHONE_NUMBER } from "@/data/siteData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  description:
    "Professional painting services in the Merrimack Valley. Interior, exterior, cabinet painting & more. Serving Andover, Haverhill, Lowell, Methuen & surrounding towns.",
  alternates: { canonical: "/" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS_NAME,
  url: "https://markmacleanpainting.com",
  telephone: PHONE_NUMBER,
  description: "Professional painting services in the Merrimack Valley, MA.",
  image: "https://markmacleanpainting.com/gallery/exterior-painting/North-Andover-MA-1.png",
  address: {
    "@type": "PostalAddress",
    addressRegion: "MA",
    addressCountry: "US",
  },
  areaServed: cities.map((c) => ({
    "@type": "City",
    name: `${c.name}, ${c.state}`,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5.0",
    reviewCount: "15",
    bestRating: "5",
  },
  priceRange: "$$",
  sameAs: [
    "https://www.instagram.com/mmacleanpainting/",
    "https://www.facebook.com/markmpainting/",
    "https://share.google/modfL4UvBkiOAAWG7",
  ],
};

const trustItems = [
  { icon: Shield, label: "Fully Insured" },
  { icon: FileText, label: "Fast, Free Estimates" },
  { icon: Users, label: "Family-Owned" },
  { icon: Star, label: "5-Star Rated" },
];

const testimonials = [
  {
    name: "Matt Desmond",
    rating: 5,
    text: "I bought a new home that needed some updates to become my dream home. These guys painted the entire (100 year old) interior and now it looks like a completely new, BEAUTIFUL place. They're fast, well priced, great to work with, and amazing at getting the fine details right like trims. I'll never use another painting company ever again.",
  },
  {
    name: "John Bushnell",
    rating: 5,
    text: "I would most definitely hire this man again. Not only did he do an outstanding job (I had inside and outside painting done) he's right on target with his pricing, which is very fair and probably one of the nicest and most personable I’ve ever had do work on and in my house. If you’re looking for excellent and fair pricing and a well done job, this is the person to hire.",
  },
  {
    name: "Ryan F",
    rating: 5,
    text: "I hired Mark to paint my kitchen cabinets, him and his crew were professional, reliable and got the job done in a timely manner. I would recommend them!",
  },
  {
    name: "Anita D",
    rating: 5,
    text: "Hire him you won't be disappointed, he went above and beyond to match colors, did what he said he would do and finished on time. When he cleaned up you'd never know he was there. Very polite and wants customer to be happy with his work.",
  },
  {
    name: "Candace Gartside",
    rating: 5,
    text: "I have hired Mark on numerous occasions. Not only is he meticulous in his work, but he leaves no mess and is very reasonably priced. I HIGHLY recommend his services!",
  },
  {
    name: "Jodi Tiberio",
    rating: 5,
    text: "I needed the inside of my house painted. Mark's company came highly recommended and I can't say enough about them. I received a call back quickly. They were very professional and detailed about everything. Definitely would call them for future jobs inside and outside!",
  },
];

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="section-gradient py-20 md:py-32">
        <div className="container-site">
          <FadeIn>
            <h1
              className="text-display text-foreground leading-[1.1] mb-6"
              style={{ fontSize: "var(--step-5)" }}
            >
              Professional Painters
              <br />
              for the Merrimack Valley
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p
              className="text-muted-foreground max-w-2xl mb-8"
              style={{ fontSize: "var(--step-0)" }}
            >
              30+ years of trusted interior and exterior painting for homes and businesses.
            </p>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <a href="#quote" className="btn-cta">
                Get Your Free Estimate
              </a>
              <Link href="/services" className="btn-primary">
                View Our Services
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="border-b border-border">
        <div className="container-site py-6 flex flex-wrap justify-center gap-8 md:gap-16">
          {trustItems.map(({ icon: Icon, label }) => (
            <FadeIn key={label}>
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <Icon className="w-5 h-5 text-accent" />
                {label}
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container-site">
          <FadeIn>
            <h2 className="text-display text-3xl md:text-4xl mb-4">
              Our Services
            </h2>
            <p className="text-muted-foreground mb-12 max-w-xl">
              Quality painting and surface prep services that extend the life and look of your property.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.05}>
                <Link
                  href={`/${s.slug}`}
                  className="card-elevated p-6 block group"
                >
                  <h3 className="text-display text-lg mb-2 group-hover:text-accent transition-colors">
                    {s.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {s.shortDesc}
                  </p>
                  <span className="text-accent text-sm font-medium flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-gradient py-20">
        <div className="container-site">
          <FadeIn>
            <h2 className="text-display text-3xl md:text-4xl mb-4">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground mb-12 max-w-xl">
              5-star rated by homeowners and businesses across the Merrimack Valley.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <FadeIn key={t.name} delay={i * 0.1}>
                <div className="card-elevated p-8">
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star
                        key={j}
                        className="w-5 h-5 fill-accent text-accent"
                      />
                    ))}
                  </div>
                  <p className="text-foreground text-sm leading-relaxed mb-6">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                      <span className="text-accent font-display font-bold text-sm">
                        {t.name[0]}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">
                        {t.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        Google Review
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-20">
        <div className="container-site">
          <FadeIn>
            <h2 className="text-display text-3xl md:text-4xl mb-4">
              Areas We Serve
            </h2>
            <p className="text-muted-foreground mb-12 max-w-xl">
              Proudly serving homes and businesses across the Merrimack Valley.
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cities.map((c, i) => (
              <FadeIn key={c.slug} delay={i * 0.03}>
                <Link
                  href={`/${c.slug}`}
                  className="card-elevated p-4 block text-center group"
                >
                  <span className="text-display text-sm group-hover:text-accent transition-colors">
                    {c.name}, {c.state}
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.2}>
            <div className="mt-8 text-center">
              <Link
                href="/areas"
                className="text-accent font-medium text-sm hover:underline"
              >
                View all areas &rarr;
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-20 section-gradient" id="quote">
        <div className="container-site max-w-xl">
          <FadeIn>
            <LeadCaptureForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
