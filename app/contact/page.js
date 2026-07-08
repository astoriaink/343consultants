import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { services, site } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Contact 343 Consultants | Renewable Energy Project Management Australia",
  description:
    "Contact 343 Consultants to discuss project management, construction management, safety or risk support for renewable energy, solar, wind and infrastructure projects in Australia.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Contact", path: "/contact" }])} />
      <PageHero
        eyebrow="Contact"
        title="Let's discuss your next project."
        text="Contact 343 Consultants for Australian renewable energy project management, construction management, safety analysis or security risk assessment support."
        image="/images/hero-renewable-site.jpg"
      />
      <section className="section">
        <div className="contact-grid">
          <div className="contact-panel">
            <p className="eyebrow">Direct contact</p>
            <h2>{site.legalName}</h2>
            <p>{site.tagline}</p>
            <div className="contact-actions">
              <a className="button primary" href={`tel:${site.phone.replace(/\s/g, "")}`}>
                <Phone size={18} aria-hidden="true" />
                {site.phone}
              </a>
              <a className="button secondary" href={`mailto:${site.email}`}>
                <Mail size={18} aria-hidden="true" />
                {site.email}
              </a>
            </div>
            <ul className="check-list">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`}>{service.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="contact-panel">
            <p className="eyebrow">Project enquiry</p>
            <form className="contact-form" action={`mailto:${site.email}`} method="post" encType="text/plain">
              <label>
                Name
                <input name="name" autoComplete="name" required />
              </label>
              <label>
                Email
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label>
                Service
                <select name="service" defaultValue="">
                  <option value="" disabled>Select a service</option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.title}>{service.title}</option>
                  ))}
                </select>
              </label>
              <label>
                Project details
                <textarea name="message" placeholder="Tell 343 Consultants about the project location, stage, timing and support required." required />
              </label>
              <button className="button primary" type="submit">Send enquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
