import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import { cities } from "@/data/siteData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas We Serve in Merrimack Valley, MA",
  description:
    "We serve homeowners across the Merrimack Valley including Andover, Haverhill, Lowell, Methuen, Billerica, and surrounding towns.",
  alternates: { canonical: "/areas" },
};

export default function AreasHub() {
  return (
    <>
      <section className="section-gradient py-20">
        <div className="container-site">
          <FadeIn>
            <h1
              className="text-display text-foreground mb-4"
              style={{ fontSize: "var(--step-5)" }}
            >
              Areas We Serve
            </h1>
            <p
              className="text-muted-foreground max-w-2xl"
              style={{ fontSize: "var(--step-0)" }}
            >
              Proudly serving homes and businesses across the Merrimack Valley.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cities.map((c, i) => (
            <FadeIn key={c.slug} delay={i * 0.04}>
              <Link
                href={`/${c.slug}`}
                className="card-elevated p-8 block group"
              >
                <h2 className="text-display text-xl mb-2 group-hover:text-accent transition-colors">
                  {c.name}, {c.state}
                </h2>
                <span className="text-accent text-sm font-medium flex items-center gap-1">
                  View services <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </section>
    </>
  );
}
