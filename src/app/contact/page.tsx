import { Phone, Mail } from "lucide-react";
import { FadeIn } from "@/components/FadeIn";
import LeadCaptureForm from "@/components/LeadCaptureForm";
import { PHONE_NUMBER, EMAIL_ADDRESS } from "@/data/siteData";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Mark MacLean Painting for a free estimate. Call, email, or fill out our form. Serving the Merrimack Valley, MA.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <section className="section-gradient py-20">
        <div className="container-site">
          <FadeIn>
            <h1
              className="text-display text-foreground mb-4"
              style={{ fontSize: "var(--step-5)" }}
            >
              Contact Us
            </h1>
            <p
              className="text-muted-foreground max-w-2xl"
              style={{ fontSize: "var(--step-0)" }}
            >
              Ready to get started? Reach out for a free, no-obligation
              estimate.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="py-20">
        <div className="container-site grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <FadeIn>
              <h2 className="text-display text-2xl mb-6">Get in Touch</h2>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="space-y-6">
                <a
                  href={`tel:${PHONE_NUMBER.replace(/[^0-9]/g, "")}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Call us</p>
                    <p className="text-lg font-medium group-hover:text-accent transition-colors">
                      {PHONE_NUMBER}
                    </p>
                  </div>
                </a>
                <a
                  href={`mailto:${EMAIL_ADDRESS}`}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <Mail className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email us</p>
                    <p className="text-lg font-medium group-hover:text-accent transition-colors">
                      {EMAIL_ADDRESS}
                    </p>
                  </div>
                </a>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.2}>
            <LeadCaptureForm />
          </FadeIn>
        </div>
      </section>
    </>
  );
}
