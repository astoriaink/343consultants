import Image from "next/image";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { breadcrumbSchema, pageMetadata, serviceSchema } from "@/lib/seo";
import { services } from "@/lib/site-data";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) return {};
  return pageMetadata({
    title: `${service.title} for Renewable Energy Projects in Australia | 343 Consultants`,
    description: service.description,
    path: `/services/${service.slug}`,
    image: service.image
  });
}

export default async function ServicePage({ params }) {
  const { slug } = await params;
  const service = services.find((item) => item.slug === slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: service.title, path: `/services/${service.slug}` }
        ])}
      />
      <PageHero eyebrow="Service" title={service.title} text={service.description} image={service.image} />
      <section className="section narrow">
        <div className="grid-2">
          <div className="content-panel">
            <p className="eyebrow">What is included</p>
            <h2>Practical support for Australian renewable energy project environments.</h2>
            <ul className="check-list">
              {service.outcomes.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div className="content-panel">
            <p className="eyebrow">Best suited to</p>
            <h2>Where this service helps most in Australia.</h2>
            <p>{service.bestFor}</p>
            <div className="project-image">
              <Image src={service.image} alt="" fill sizes="(max-width: 980px) 100vw, 46vw" />
            </div>
          </div>
        </div>
      </section>
      <CTA title={`Talk to 343 Consultants about ${service.title.toLowerCase()} in Australia`} />
    </>
  );
}
