import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { services, cities, BUSINESS_NAME, PHONE_NUMBER, EMAIL_ADDRESS } from "@/data/siteData";

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-site py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <Image
            src="/logo.webp"
            alt={BUSINESS_NAME}
            width={220}
            height={88}
            className="h-20 w-auto brightness-0 invert mb-2"
          />
          <p className="text-primary-foreground/80 text-sm leading-relaxed mb-4">
            Professional painting services for the Merrimack Valley. Fully insured and committed to quality craftsmanship.
          </p>
          <p className="text-primary-foreground/80 text-sm">{PHONE_NUMBER}</p>
          <p className="text-primary-foreground/80 text-sm mb-6">
            <a href={`mailto:${EMAIL_ADDRESS}`} className="hover:text-accent transition-colors">{EMAIL_ADDRESS}</a>
          </p>
          <div className="flex items-center gap-4">
            <a href="https://www.instagram.com/mmacleanpainting/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-primary-foreground/80 hover:text-accent transition-colors">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="https://www.facebook.com/markmpainting/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-primary-foreground/80 hover:text-accent transition-colors">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="https://share.google/modfL4UvBkiOAAWG7" target="_blank" rel="noopener noreferrer" aria-label="Google" className="text-primary-foreground/80 hover:text-accent transition-colors">
              <GoogleIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            {services.map(s => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Areas Served</h4>
          <ul className="space-y-2">
            {cities.map(c => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">
                  {c.name}, {c.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li><Link href="/services" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">All Services</Link></li>
            <li><Link href="/areas" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Areas Served</Link></li>
            <li><Link href="/gallery" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Gallery</Link></li>
            <li><Link href="/contact" className="text-sm text-primary-foreground/80 hover:text-accent transition-colors">Contact</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/70">
        © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
