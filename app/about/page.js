import Image from "next/image";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { proofPoints } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "About 343 Consultants | Australian Renewable Energy Project Support",
  description:
    "343 Consultants is a veteran-owned project and construction management business supporting renewable energy, solar, wind and infrastructure projects across Australia.",
  path: "/about",
  image: "/images/simon-jones.jpg"
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "About", path: "/about" }])} />
      <PageHero
        eyebrow="About 343 Consultants"
        title="Trusted to lead. Proven to deliver."
        text="343 Consultants is a veteran-owned business founded by Simon Jones, bringing military leadership experience into Australian renewable energy, solar, wind, construction and infrastructure delivery."
        image="/images/simon-jones-portrait.jpg"
        imageClassName="portrait-panel"
      />
      <section className="section narrow">
        <div className="grid-2">
          <div className="content-panel">
            <p className="eyebrow">Founder</p>
            <h2>Simon Jones</h2>
            <p>
              343 Consultants is a veteran-owned business founded by Simon Jones, bringing over 15 years of military experience into Australia's construction and renewable energy sectors.
            </p>
            <p>
              With five operational deployments in high-risk environments, Simon developed a leadership style built on discipline, accountability and delivering outcomes under pressure. That same approach now drives every project.
            </p>
            <p>
              Today, 343 Consultants provides project and construction management services for Australian renewable energy, solar, wind and infrastructure projects with a strong focus on safety, efficiency and execution. From coordinating stakeholders to managing risk and overseeing delivery, the business takes a hands-on approach to ensure projects are completed to a high standard.
            </p>
          </div>
          <div className="image-panel portrait-panel">
            <Image src="/images/simon-jones-portrait.jpg" alt="Simon Jones, Founder of 343 Consultants" fill sizes="(max-width: 980px) 100vw, 36vw" />
          </div>
        </div>
      </section>
      <section className="section dark-band">
        <div className="section-heading">
          <p className="eyebrow">How 343 Consultants works</p>
          <h2>Disciplined, accountable and practical.</h2>
        </div>
        <div className="card-grid">
          {proofPoints.map((point) => (
            <div className="content-panel" key={point}>
              <h3>{point}</h3>
              <p>
                A core part of 343 Consultants' positioning and delivery approach, drawn from the current company site and founder experience.
              </p>
            </div>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
