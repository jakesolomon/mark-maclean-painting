import { Link, Navigate, useLocation } from "react-router-dom";
import { ArrowRight, icons } from "lucide-react";
import Layout from "@/components/Layout";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import SEOHead from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { getServiceBySlug, services } from "@/data/siteData";

const DynamicIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = (icons as Record<string, React.ComponentType<{ className?: string }>>)[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

const ServicePage = () => {
  const location = useLocation();
  const slug = location.pathname.slice(1);
  const service = getServiceBySlug(slug);

  if (!service) return <Navigate to="/404" replace />;

  const related = service.relatedSlugs
    .map(s => services.find(sv => sv.slug === s))
    .filter(Boolean);

  return (
    <Layout>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDesc}
        canonical={`https://example.com/${service.slug}`}
      />

      <section className="section-gradient py-20">
        <div className="container-site">
          <FadeIn>
            <Link to="/services" className="text-accent text-sm font-medium mb-4 inline-block hover:underline">← All Services</Link>
            <h1 className="text-display text-foreground mb-4" style={{ fontSize: "var(--step-5)" }}>
              {service.h1}
            </h1>
          </FadeIn>
          <FadeIn delay={0.1}>
            <p className="text-muted-foreground max-w-3xl leading-relaxed" style={{ fontSize: "var(--step-0)" }}>
              {service.description}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-site">
          <FadeIn>
            <h2 className="text-display text-3xl mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground mb-12 max-w-xl">What sets our {service.name.toLowerCase()} service apart.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whyChooseUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="card-elevated p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <DynamicIcon name={item.icon} className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="text-display text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-gradient py-20">
        <div className="container-site">
          <FadeIn>
            <h2 className="text-display text-3xl mb-12">Our Process</h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.processSteps.map((step, i) => (
              <FadeIn key={step.step} delay={i * 0.1}>
                <div className="card-elevated p-6">
                  <span className="text-accent font-display font-bold text-2xl tabular-nums">{step.step}</span>
                  <h3 className="text-display text-lg mt-2 mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20">
        <div className="container-site">
          <FadeIn>
            <h2 className="text-display text-3xl mb-2">Our Work</h2>
            <p className="text-muted-foreground mb-12">Examples of our {service.name.toLowerCase()} projects.</p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {service.galleryImages.map((img, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className="rounded-lg overflow-hidden">
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 object-cover hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section-gradient py-16">
          <div className="container-site">
            <FadeIn>
              <h2 className="text-display text-2xl mb-8">Related Services</h2>
            </FadeIn>
            <div className="flex flex-wrap gap-4">
              {related.map(r => r && (
                <FadeIn key={r.slug}>
                  <Link to={`/${r.slug}`} className="card-elevated px-6 py-4 flex items-center gap-2 group">
                    <span className="text-sm font-medium group-hover:text-accent transition-colors">{r.name}</span>
                    <ArrowRight className="w-4 h-4 text-accent" />
                  </Link>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lead Capture */}
      <section className="py-20">
        <div className="container-site max-w-xl">
          <FadeIn>
            <LeadCaptureForm />
          </FadeIn>
        </div>
      </section>
    </Layout>
  );
};

export default ServicePage;
