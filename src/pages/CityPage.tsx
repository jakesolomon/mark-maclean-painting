import { Link, Navigate, useLocation } from "react-router-dom";
import { Shield, Award, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import SEOHead from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { getCityBySlug, services } from "@/data/siteData";

const CityPage = () => {
  const location = useLocation();
  const slug = location.pathname.slice(1);
  const city = getCityBySlug(slug);

  if (!city) return <Navigate to="/404" replace />;

  return (
    <Layout>
      <SEOHead
        title={`Professional Painters in ${city.name}, ${city.state} | Painting Services Near Me`}
        description={`Professional painting services in ${city.name}, ${city.state}. Interior, exterior, cabinet painting & more. Licensed & Insured. Free estimates.`}
        canonical={`https://example.com/${city.slug}`}
      />

      <section className="section-gradient py-20">
        <div className="container-site">
          <FadeIn>
            <Link to="/areas" className="text-accent text-sm font-medium mb-4 inline-block hover:underline">← All Areas</Link>
            <h1 className="text-display text-foreground mb-4" style={{ fontSize: "var(--step-5)" }}>
              Professional Painters in {city.name}, {city.state}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground max-w-3xl leading-relaxed" style={{ fontSize: "var(--step-0)" }}>
              {city.contextualCopy}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="border-b border-border">
        <div className="container-site py-6 flex flex-wrap justify-center gap-8 md:gap-16">
          <div className="flex items-center gap-2 text-sm font-medium">
            <Shield className="w-5 h-5 text-accent" />
            Licensed &amp; Insured
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Award className="w-5 h-5 text-accent" />
            Lead-Safe Certified
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container-site">
          <FadeIn>
            <h2 className="text-display text-3xl mb-4">Services in {city.name}</h2>
            <p className="text-muted-foreground mb-12">Complete painting and finishing services available in {city.name}.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s, i) => (
              <FadeIn key={s.slug} delay={i * 0.05}>
                <Link to={`/${s.slug}`} className="card-elevated p-6 block group">
                  <h3 className="text-display text-lg mb-2 group-hover:text-accent transition-colors">{s.name}</h3>
                  <span className="text-accent text-sm font-medium flex items-center gap-1">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-20 section-gradient">
        <div className="container-site max-w-xl">
          <FadeIn>
            <LeadCaptureForm />
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default CityPage;
