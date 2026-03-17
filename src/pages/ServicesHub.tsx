import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { services } from "@/data/siteData";

const ServicesHub = () => (
  <Layout>
    <SEOHead
      title="Painting Services Merrimack Valley MA | Full Service Painters"
      description="Explore our full range of painting services: exterior, interior, cabinet painting, drywall repair, wallpaper, wood staining, and pressure washing."
      canonical="https://example.com/services"
    />

    <section className="section-gradient py-20">
      <div className="container-site">
        <FadeIn>
          <h1 className="text-display text-foreground mb-4" style={{ fontSize: "var(--step-5)" }}>
            Our Services
          </h1>
          <p className="text-muted-foreground max-w-2xl" style={{ fontSize: "var(--step-0)" }}>
            Complete painting and finishing services for your home.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="py-20">
      <div className="container-site grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((s, i) => (
          <FadeIn key={s.slug} delay={i * 0.05}>
            <Link to={`/${s.slug}`} className="card-elevated p-8 block group">
              <h2 className="text-display text-xl mb-3 group-hover:text-accent transition-colors">{s.name}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{s.shortDesc}</p>
              <span className="text-accent text-sm font-medium flex items-center gap-1">
                View details <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </FadeIn>
        ))}
      </div>
    </section>
  </Layout>
);

export default ServicesHub;
