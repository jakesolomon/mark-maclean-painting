import Layout from "@/components/Layout";
import SEOHead from "@/components/SEOHead";
import { FadeIn } from "@/components/FadeIn";
import { galleryImages } from "@/data/siteData";

const Gallery = () => (
  <Layout>
    <SEOHead
      title="Project Gallery | Mark MacLean Painting"
      description="Browse our portfolio of interior painting, exterior painting, and cabinet refinishing projects across the Merrimack Valley."
      canonical="https://example.com/gallery"
    />

    <section className="section-gradient py-20">
      <div className="container-site">
        <FadeIn>
          <h1 className="text-display text-foreground mb-4" style={{ fontSize: "var(--step-5)" }}>
            Project Gallery
          </h1>
          <p className="text-muted-foreground max-w-2xl" style={{ fontSize: "var(--step-0)" }}>
            A selection of our painting and finishing work across the Merrimack Valley.
          </p>
        </FadeIn>
      </div>
    </section>

    <section className="py-20">
      <div className="container-site columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {galleryImages.map((img, i) => (
          <FadeIn key={i} delay={i * 0.04}>
            <div className="break-inside-avoid rounded-lg overflow-hidden">
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="bg-card px-4 py-3">
                <span className="text-xs font-medium text-accent uppercase tracking-wider">{img.category}</span>
                <p className="text-sm text-muted-foreground mt-1">{img.alt}</p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  </Layout>
);

export default Gallery;
