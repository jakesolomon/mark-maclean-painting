import { Link } from "react-router-dom";
import { services, cities, BUSINESS_NAME, PHONE_NUMBER } from "@/data/siteData";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container-site py-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h3 className="text-display text-xl mb-4">{BUSINESS_NAME}</h3>
          <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
            Professional painting services for the Merrimack Valley. Licensed, insured, and committed to quality craftsmanship.
          </p>
          <p className="text-primary-foreground/70 text-sm">{PHONE_NUMBER}</p>
        </div>
        <div>
          <h4 className="font-display font-semibold mb-4">Services</h4>
          <ul className="space-y-2">
            {services.map(s => (
              <li key={s.slug}>
                <Link to={`/${s.slug}`} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
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
                <Link to={`/${c.slug}`} className="text-sm text-primary-foreground/70 hover:text-accent transition-colors">
                  {c.name}, {c.state}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
