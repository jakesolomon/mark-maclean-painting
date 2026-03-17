import { Link } from "react-router-dom";
import { Shield, Award, Clock, ArrowRight, Star } from "lucide-react";
import Layout from "@/components/Layout";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import SEOHead from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { services, cities, BUSINESS_NAME, PHONE_NUMBER } from "@/data/siteData";

const BASE_URL = "https://example.com";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS_NAME,
  telephone: PHONE_NUMBER,
  description: "Professional painting services in the Merrimack Valley, MA.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "MA",
    addressCountry: "US",
  },
  areaServed: cities.map(c => ({
    "@type": "City",
    name: `${c.name}, ${c.state}`,
  })),
  priceRange: "$$",
};

const trustItems = [
  { icon: Shield, label: "Licensed & Insured" },
  { icon: Award, label: "Lead-Safe Certified" },
  { icon: Clock, label: "98% On-Time Completion" },
];

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Mark and his team painted the entire exterior of our Andover colonial. The prep work was thorough and the finished result looks incredible. We couldn't be happier with the quality.",
  },
  {
    name: "David R.",
    rating: 5,
    text: "Had our kitchen cabinets painted instead of replacing them. The finish is smooth and flawless — everyone thinks they're brand new. Highly recommend Mark MacLean Painting.",
  },
  {
    name: "Jennifer L.",
    rating: 5,
    text: "Professional from start to finish. They covered everything, fixed some drywall issues we didn't even ask about, and left our home cleaner than they found it. Will use again for sure.",
  },
];

const Index = () => (
  <Layout>
    <SEOHead
      title="Professional Painter in Merrimack Valley, MA | Mark MacLean Painting"
      description="Professional painting services in the Merrimack Valley. Interior, exterior, cabinet painting & more. Serving Andover, Haverhill, Lowell, Methuen & surrounding towns."
      canonical={`${BASE_URL}/`}
      jsonLd={jsonLd}
    />

    {/* Hero */}
    <section className="section-gradient py-20 md:py-32">
      <div className="container-site">
        <FadeIn>
          <h1 className="text-display text-foreground leading-[1.1] mb-6" style={{ fontSize: "var(--step-5)" }}>
            Professional Painters<br />for the Merrimack Valley
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <p className="text-muted-foreground max-w-2xl mb-8" style={{ fontSize: "var(--step-0)" }}>
            Andover to Lowell. Interior, Exterior, and Cabinetry Refinishing.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-4">
            <a href="#quote" className="btn-cta">Get Your Free Estimate</a>
            <Link to="/services" className="btn-primary">View Our Services</Link>
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
          <h2 className="text-display text-3xl md:text-4xl mb-4">Our Services</h2>
          <p className="text-muted-foreground mb-12 max-w-xl">We don't just paint houses. We protect your largest investment.</p>
        </FadeIn>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <FadeIn key={s.slug} delay={i * 0.05}>
              <Link to={`/${s.slug}`} className="card-elevated p-6 block group">
                <h3 className="text-display text-lg mb-2 group-hover:text-accent transition-colors">{s.name}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.shortDesc}</p>
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
          <h2 className="text-display text-3xl md:text-4xl mb-4">What Our Clients Say</h2>
          <p className="text-muted-foreground mb-12 max-w-xl">Hear from homeowners across the Merrimack Valley.</p>
        </FadeIn>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.1}>
              <div className="card-elevated p-8">
                <div className="flex gap-0.5 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed mb-6">"{t.text}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <span className="text-accent font-display font-bold text-sm">{t.name[0]}</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">Google Review</p>
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
          <h2 className="text-display text-3xl md:text-4xl mb-4">Areas We Serve</h2>
          <p className="text-muted-foreground mb-12 max-w-xl">Proudly serving homeowners across the Merrimack Valley region of Massachusetts.</p>
        </FadeIn>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {cities.map((c, i) => (
            <FadeIn key={c.slug} delay={i * 0.03}>
              <Link to={`/${c.slug}`} className="card-elevated p-4 block text-center group">
                <span className="text-display text-sm group-hover:text-accent transition-colors">{c.name}, {c.state}</span>
              </Link>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.2}>
          <div className="mt-8 text-center">
            <Link to="/areas" className="text-accent font-medium text-sm hover:underline">View all areas →</Link>
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
  </Layout>
);

export default Index;
