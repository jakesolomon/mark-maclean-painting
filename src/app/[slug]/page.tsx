import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Shield, FileText, Users, Star, icons } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import {
  services,
  cities,
  getServiceBySlug,
  getCityBySlug,
  BUSINESS_NAME,
  PHONE_NUMBER,
  type ServiceInfo,
  type CityInfo,
} from "@/data/siteData";
import { getImagesByService } from "@/data/gallery";

const trustItems = [
  { icon: Shield, label: "Fully Insured" },
  { icon: FileText, label: "Fast, Free Estimates" },
  { icon: Users, label: "Family-Owned" },
  { icon: Star, label: "5-Star Rated" },
];

const DynamicIcon = ({
  name,
  className,
}: {
  name: string;
  className?: string;
}) => {
  const IconComponent = (
    icons as Record<string, React.ComponentType<{ className?: string }>>
  )[name];
  if (!IconComponent) return null;
  return <IconComponent className={className} />;
};

export function generateStaticParams() {
  return [
    ...services.map((s) => ({ slug: s.slug })),
    ...cities.map((c) => ({ slug: c.slug })),
  ];
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const service = getServiceBySlug(params.slug);
  if (service) {
    return {
      title: service.metaTitle.replace(/ \| Mark MacLean Painting$/, ""),
      description: service.metaDesc,
      alternates: { canonical: `/${service.slug}` },
    };
  }

  const city = getCityBySlug(params.slug);
  if (city) {
    return {
      title: `Professional Painters in ${city.name}, ${city.state}`,
      description: `Professional painting services in ${city.name}, ${city.state}. Interior, exterior, cabinet painting & more. Fully Insured. Free estimates.`,
      alternates: { canonical: `/${city.slug}` },
    };
  }

  return {};
}

function ServiceContent({ service }: { service: ServiceInfo }) {
  const related = service.relatedSlugs
    .map((s) => services.find((sv) => sv.slug === s))
    .filter(Boolean);
  const serviceImages = getImagesByService(service.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `https://markmacleanpainting.com/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
      telephone: PHONE_NUMBER,
      url: "https://markmacleanpainting.com",
    },
    areaServed: cities.map((c) => ({
      "@type": "City",
      name: `${c.name}, ${c.state}`,
    })),
    ...(serviceImages.length > 0 && {
      image: `https://markmacleanpainting.com${serviceImages[0].src}`,
    }),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <section className="section-gradient py-20">
        {serviceImages.length > 0 ? (
          <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <FadeIn>
                <Link
                  href="/services"
                  className="text-accent text-sm font-medium mb-4 inline-block hover:underline"
                >
                  &larr; All Services
                </Link>
                <h1
                  className="text-display text-foreground mb-4"
                  style={{ fontSize: "var(--step-3)" }}
                >
                  {service.h1}
                </h1>
              </FadeIn>
              <FadeIn delay={0.1}>
                <p
                  className="text-muted-foreground leading-relaxed"
                  style={{ fontSize: "var(--step--1)" }}
                >
                  {service.description}
                </p>
              </FadeIn>
            </div>
            <FadeIn delay={0.2}>
              <Image
                src={serviceImages[0].src}
                alt={serviceImages[0].alt}
                width={600}
                height={750}
                className="w-full aspect-[4/5] max-h-[60vh] rounded-lg object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </FadeIn>
          </div>
        ) : (
          <div className="container-site">
            <FadeIn>
              <Link
                href="/services"
                className="text-accent text-sm font-medium mb-4 inline-block hover:underline"
              >
                &larr; All Services
              </Link>
              <h1
                className="text-display text-foreground mb-4"
                style={{ fontSize: "var(--step-5)" }}
              >
                {service.h1}
              </h1>
            </FadeIn>
            <FadeIn delay={0.1}>
              <p
                className="text-muted-foreground max-w-3xl leading-relaxed"
                style={{ fontSize: "var(--step-0)" }}
              >
                {service.description}
              </p>
            </FadeIn>
          </div>
        )}
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="container-site">
          <FadeIn>
            <h2 className="text-display text-3xl mb-4">Why Choose Us</h2>
            <p className="text-muted-foreground mb-12 max-w-xl">
              What sets our {service.name.toLowerCase()} service apart.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whyChooseUs.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <div className="card-elevated p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <DynamicIcon
                      name={item.icon}
                      className="w-6 h-6 text-accent"
                    />
                  </div>
                  <h3 className="text-display text-lg mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {serviceImages.length > 0 && (
        <section className="py-20">
          <div className="container-site">
            <FadeIn>
              <h2 className="text-display text-3xl mb-2">Our Work</h2>
              <p className="text-muted-foreground mb-12">
                Examples of our {service.name.toLowerCase()} projects.
              </p>
            </FadeIn>
            <div className={serviceImages.length <= 4 ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4" : "columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4"}>
              {serviceImages.map((img, i) => (
                <FadeIn key={i} delay={i * 0.06}>
                  <div className="break-inside-avoid rounded-lg overflow-hidden">
                    <div className="overflow-hidden">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        width={600}
                        height={400}
                        className="w-full object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="bg-card px-4 py-3">
                      <p className="text-sm text-muted-foreground">
                        {img.town}, {img.state}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Services */}
      {related.length > 0 && (
        <section className="section-gradient py-16">
          <div className="container-site">
            <FadeIn>
              <h2 className="text-display text-2xl mb-8">Related Services</h2>
            </FadeIn>
            <div className="flex flex-wrap gap-4">
              {related.map(
                (r) =>
                  r && (
                    <FadeIn key={r.slug}>
                      <Link
                        href={`/${r.slug}`}
                        className="card-elevated px-6 py-4 flex items-center gap-2 group"
                      >
                        <span className="text-sm font-medium group-hover:text-accent transition-colors">
                          {r.name}
                        </span>
                        <ArrowRight className="w-4 h-4 text-accent" />
                      </Link>
                    </FadeIn>
                  )
              )}
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
    </>
  );
}

function CityContent({ city }: { city: CityInfo }) {
  return (
    <>
      <section className="section-gradient py-20">
        <div className="container-site">
          <FadeIn>
            <Link
              href="/areas"
              className="text-accent text-sm font-medium mb-4 inline-block hover:underline"
            >
              &larr; All Areas
            </Link>
            <h1
              className="text-display text-foreground mb-4"
              style={{ fontSize: "var(--step-5)" }}
            >
              Professional Painters in {city.name}, {city.state}
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

      {/* Services */}
      <section className="py-20">
        <div className="container-site">
          <FadeIn>
            <h2 className="text-display text-3xl mb-4">
              Services in {city.name}
            </h2>
            <p className="text-muted-foreground mb-12">
              Complete painting and finishing services available in {city.name}.
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

      {/* Lead Capture */}
      <section className="py-20 section-gradient">
        <div className="container-site max-w-xl">
          <FadeIn>
            <LeadCaptureForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}

export default function SlugPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (service) return <ServiceContent service={service} />;

  const city = getCityBySlug(params.slug);
  if (city) return <CityContent city={city} />;

  notFound();
}
