import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import { ServiceCard, StatCard } from "@/components/Cards";
import { breadcrumbSchema } from "@/lib/seo";
import { projects, proofPoints, services } from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }])} />
      <section className="hero">
        <div className="hero-media">
          <Image
            src="/images/hero-renewable-site.jpg"
            alt="Renewable energy construction site managed by 343 Consultants"
            fill
            sizes="100vw"
            priority
          />
        </div>
        <div className="hero-copy">
          <p className="eyebrow">Renewable energy project leadership</p>
          <h1>Project delivery for renewable energy.</h1>
          <p>
            343 Consultants supports complex Australian renewable energy, solar, wind, construction and infrastructure projects from planning through to delivery with a focus on safety, efficiency and results.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="/contact">
              Discuss a project
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <Link className="button secondary" href="/services">
              View services
            </Link>
          </div>
        </div>
      </section>

      <section className="section narrow">
        <div className="grid-2">
          <div className="section-heading">
            <p className="eyebrow">What 343 Consultants does</p>
            <h2>Practical project support for field-heavy delivery environments.</h2>
            <p className="section-lead">
              343 Consultants provides hands-on project and construction management services across Australia's renewable energy, solar, wind and construction sectors. The business is built around disciplined leadership, clear communication and reliable delivery under pressure.
            </p>
          </div>
          <div className="stat-grid">
            <StatCard value="15+" label="Years of Military Experience" />
            <StatCard value="5" label="Operational Deployments" />
            <StatCard value="$1.6B" label="Renewable Development Listed on Current Site" />
          </div>
        </div>
      </section>

      <section className="section dark-band">
        <div className="section-heading">
          <p className="eyebrow">Services</p>
          <h2>Focused support where delivery risk is real.</h2>
          <p>
            From stakeholder coordination to on-site oversight and risk analysis, 343 Consultants brings practical project leadership to Australian renewable energy teams that need momentum, safety and accountability.
          </p>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
      </section>

      <section className="section narrow">
        <div className="founder-card">
          <div className="founder-card-image">
            <Image src="/images/simon-jones-portrait.jpg" alt="Simon Jones, founder of 343 Consultants" fill sizes="(max-width: 980px) 100vw, 36vw" />
          </div>
          <div className="founder-card-copy">
            <p className="eyebrow">About the founder</p>
            <h2>Led by Simon Jones.</h2>
            <p>
              343 Consultants is a veteran-owned business founded by Simon Jones, bringing more than 15 years of military experience into Australia's construction and renewable energy sectors.
            </p>
            <p>
              With five operational deployments in high-risk environments, Simon developed a leadership style built on discipline, accountability and delivering outcomes under pressure. That same approach now drives every project.
            </p>
            <ul className="check-list">
              {proofPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="hero-actions">
              <Link className="button primary" href="/about">Read about 343 Consultants</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="eyebrow">Project experience</p>
          <h2>Proven experience across major Australian renewable energy projects.</h2>
          <p>
            The current 343 Consultants site lists Australian renewable energy experience across Darling Downs Solar Farm, Kennedy Energy Park, Finley and Glenrowan Solar Farms, Coolumboola Solar Farm, Dulacca Wind Farm, Boulder Creek Wind Farm, Tarong West Wind Farm and Wambo Wind Farm.
          </p>
        </div>
        <div className="featured-projects" aria-label="Project and client experience">
          {projects.slice(0, 5).map((project) => (
            <article className="featured-project-card" key={project.slug}>
              <span className="featured-project-image">
                <Image src={project.image} alt="" fill sizes="(max-width: 980px) 50vw, 20vw" />
              </span>
              <span className="featured-project-body">
                <Image src={project.logo} alt={project.client} width={120} height={54} />
                <strong>{project.title}</strong>
                <span>{project.sector}</span>
              </span>
            </article>
          ))}
        </div>
      </section>

      <CTA />
    </>
  );
}
