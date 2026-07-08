import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { navItems, services, site } from "@/lib/site-data";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <p className="footer-title">{site.legalName}</p>
          <p>{site.tagline}</p>
          <div className="footer-contact">
            <a href={`tel:${site.phone.replace(/\s/g, "")}`}>
              <Phone size={16} aria-hidden="true" />
              {site.phone}
            </a>
            <a href={`mailto:${site.email}`}>
              <Mail size={16} aria-hidden="true" />
              {site.email}
            </a>
          </div>
        </div>
        <div>
          <p className="footer-title">Services</p>
          {services.map((service) => (
            <Link key={service.slug} href={`/services/${service.slug}`}>
              {service.title}
            </Link>
          ))}
        </div>
        <div>
          <p className="footer-title">Company</p>
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-main">
          <span>© 2026 {site.legalName}</span>
          <span>Renewable Energy Project Management Australia</span>
        </div>
        <a
          className="site-credit"
          href="https://rankmyvisibility.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Website built by AI Visibility
        </a>
      </div>
    </footer>
  );
}
