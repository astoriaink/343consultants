import Link from "next/link";
import { ArrowRight, Mail, Phone } from "lucide-react";
import { site } from "@/lib/site-data";

export default function CTA({ title = "Let's discuss your next project", text }) {
  return (
    <section className="cta-band">
      <div>
        <p className="eyebrow">Ready to talk</p>
        <h2>{title}</h2>
        <p>{text || "Speak with 343 Consultants about project management, construction management or risk support for your next renewable energy, solar, wind or infrastructure project in Australia."}</p>
      </div>
      <div className="cta-actions">
        <Link className="button primary" href="/contact">
          Get in touch
          <ArrowRight size={18} aria-hidden="true" />
        </Link>
        <a className="button secondary" href={`tel:${site.phone.replace(/\s/g, "")}`}>
          <Phone size={18} aria-hidden="true" />
          {site.phone}
        </a>
        <a className="button secondary" href={`mailto:${site.email}`}>
          <Mail size={18} aria-hidden="true" />
          Email
        </a>
      </div>
    </section>
  );
}
