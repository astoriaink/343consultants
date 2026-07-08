import Image from "next/image";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { ServiceCard } from "@/components/Cards";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { services } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Renewable Energy Project Management Australia | 343 Consultants",
  description:
    "Project management, construction management, safety and risk analysis, and security risk assessment for renewable energy, solar, wind and infrastructure projects across Australia.",
  path: "/services",
  image: "/images/services-site.jpg"
});

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Services", path: "/services" }])} />
      <PageHero
        eyebrow="Services"
        title="Hands-on renewable energy project support across Australia."
        text="343 Consultants supports Australian renewable energy, solar, wind, infrastructure and construction projects with disciplined planning, site oversight, risk awareness and clear delivery communication."
        image="/images/services-site.jpg"
      />
      <section className="section">
        <div className="card-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>
      <section className="section narrow">
        <div className="grid-2">
          <div className="content-panel">
            <p className="eyebrow">Why 343 Consultants</p>
            <h2>Built for projects where coordination and risk matter.</h2>
            <ul className="check-list">
              <li>Experience across major Australian renewable energy and infrastructure projects</li>
              <li>Practical, hands-on approach</li>
              <li>Focus on safety, efficiency and results</li>
              <li>Ability to deploy to remote and regional locations across Australia</li>
            </ul>
          </div>
          <div className="image-panel">
            <Image src="/images/pre-works-rosslyn-bay.jpg" alt="Pre-works site preparation" fill sizes="(max-width: 980px) 100vw, 46vw" />
          </div>
        </div>
      </section>
      <CTA />
    </>
  );
}
