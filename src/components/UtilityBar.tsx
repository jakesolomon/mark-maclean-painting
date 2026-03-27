import Link from "next/link";
import Image from "next/image";
import { Phone, Shield, Star } from "lucide-react";
import { PHONE_NUMBER, BUSINESS_NAME } from "@/data/siteData";

const UtilityBar = () => (
  <div className="sticky top-0 z-50">
    {/* Credibility bar */}
    <div className="hidden md:block bg-primary text-primary-foreground text-xs">
      <div className="container-site flex items-center justify-center gap-8 py-1.5">
        <span className="flex items-center gap-1.5">
          <Shield className="w-3.5 h-3.5" />
          Fully Insured
        </span>
        <span className="flex items-center gap-1.5">
          <Star className="w-3.5 h-3.5" />
          5-Star Rated
        </span>
      </div>
    </div>

    {/* Main nav */}
    <div className="bg-card/80 backdrop-blur-md border-b border-border">
      <div className="container-site flex items-center justify-between h-14">
        <Link href="/">
          <Image
            src="/logo.webp"
            alt={BUSINESS_NAME}
            width={140}
            height={56}
            priority
            className="h-10 w-auto"
          />
        </Link>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/services" className="font-medium text-foreground hover:text-accent transition-colors">Services</Link>
            <Link href="/areas" className="font-medium text-foreground hover:text-accent transition-colors">Areas</Link>
            <Link href="/gallery" className="font-medium text-foreground hover:text-accent transition-colors">Gallery</Link>
          </nav>
          <a href={`tel:${PHONE_NUMBER.replace(/[^0-9]/g, "")}`} aria-label={`Call ${PHONE_NUMBER}`} className="flex items-center gap-2 text-sm font-medium text-primary">
            <Phone className="w-4 h-4" />
            <span className="hidden sm:inline">{PHONE_NUMBER}</span>
          </a>
          <Link href="/#quote" className="btn-cta text-sm !py-2 !px-5">
            Get a Quote
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default UtilityBar;
