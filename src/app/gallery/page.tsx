import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { galleryImages } from "@/data/gallery";
import { services } from "@/data/siteData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Project Gallery",
  description:
    "Browse our portfolio of interior painting, exterior painting, and cabinet refinishing projects across the Merrimack Valley.",
  alternates: { canonical: "/gallery" },
};

export default function Gallery() {
  return (
    <>
      <section className="section-gradient py-20">
        <div className="container-site">
          <FadeIn>
            <h1
              className="text-display text-foreground mb-4"
              style={{ fontSize: "var(--step-5)" }}
            >
              Project Gallery
            </h1>
            <p
              className="text-muted-foreground max-w-2xl"
              style={{ fontSize: "var(--step-0)" }}
            >
              A selection of our painting and finishing work across the
              Merrimack Valley.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {galleryImages.map((img, i) => (
            <FadeIn key={i} delay={i * 0.04}>
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
                  <span className="text-xs font-medium text-accent uppercase tracking-wider">
                    {services.find((s) => s.slug === img.service)?.name}
                  </span>
                  <p className="text-sm text-muted-foreground mt-1">
                    {img.town}, {img.state}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
