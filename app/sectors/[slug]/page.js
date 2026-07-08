import Image from "next/image";
import { notFound } from "next/navigation";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { sectors } from "@/lib/site-data";

export function generateStaticParams() {
  return sectors.map((sector) => ({ slug: sector.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const sector = sectors.find((item) => item.slug === slug);
  if (!sector) return {};
  return pageMetadata({
    title: `${sector.title} Project Support Australia | 343 Consultants`,
    description: sector.summary,
    path: `/sectors/${sector.slug}`,
    image: sector.image
  });
}

export default async function SectorPage({ params }) {
  const { slug } = await params;
  const sector = sectors.find((item) => item.slug === slug);
  if (!sector) notFound();

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: sector.title, path: `/sectors/${sector.slug}` }
        ])}
      />
      <PageHero eyebrow={sector.eyebrow} title={sector.title} text={sector.summary} image={sector.image} />
      <section className="section narrow">
        <div className="grid-2">
          <div className="content-panel">
            <p className="eyebrow">Sector support</p>
            <h2>Australian delivery support with field experience behind it.</h2>
            <p>{sector.detail}</p>
            <ul className="check-list">
              {sector.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="image-panel">
            <Image src={sector.image} alt="" fill sizes="(max-width: 980px) 100vw, 46vw" />
          </div>
        </div>
      </section>
      <CTA title={`Discuss ${sector.title.toLowerCase()} project support in Australia`} />
    </>
  );
}
