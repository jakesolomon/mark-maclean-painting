import { Link } from "react-router-dom";
import { Phone, Shield, Award } from "lucide-react";
import { PHONE_NUMBER, LICENSE_NUMBER, BUSINESS_NAME } from "@/data/siteData";

const UtilityBar = () => (
  <div className="sticky top-0 z-50 bg-card/80 backdrop-blur-md border-b border-border">
    <div className="container-site flex items-center justify-between h-14">
      <Link to="/" className="text-display text-lg text-primary">
        {BUSINESS_NAME}
      </Link>
      <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
        <span className="flex items-center gap-1.5">
          <Shield className="w-4 h-4" />
          Licensed &amp; Insured
        </span>
        <span className="flex items-center gap-1.5">
          <Award className="w-4 h-4" />
          {LICENSE_NUMBER}
        </span>
      </div>
      <div className="flex items-center gap-4">
        <a href={`tel:${PHONE_NUMBER.replace(/[^0-9]/g, "")}`} className="flex items-center gap-2 text-sm font-medium text-primary">
          <Phone className="w-4 h-4" />
          <span className="hidden sm:inline">{PHONE_NUMBER}</span>
        </a>
        <Link to="/#quote" className="btn-cta text-sm !py-2 !px-5">
          Get a Quote
        </Link>
      </div>
    </div>
  </div>
);

export default UtilityBar;
