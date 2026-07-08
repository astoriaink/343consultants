import Image from "next/image";
import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { breadcrumbSchema, pageMetadata } from "@/lib/seo";
import { projects } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "Australian Renewable Energy Project Experience | 343 Consultants",
  description:
    "Australian project experience across solar, wind and hybrid renewable energy developments listed by 343 Consultants.",
  path: "/projects",
  image: "/images/aerial-renewable-site.jpg"
});

export default function ProjectsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Projects", path: "/projects" }])} />
      <PageHero
        eyebrow="Projects"
        title="Experience across major Australian renewable energy projects."
        text="343 Consultants has experience connected with large-scale solar, wind, hybrid renewable energy and infrastructure projects, working with leading contractors and developers across Australia."
        image="/images/aerial-renewable-site.jpg"
      />
      <section className="section">
        <div className="project-list">
          {projects.map((project) => (
            <article className="project-row" key={project.slug}>
              <div className="project-row-image">
                <Image src={project.image} alt="" fill sizes="(max-width: 760px) 100vw, 260px" />
              </div>
              <div>
                <span className="pill">{project.sector}</span>
                <h2>{project.title}</h2>
                <p>{project.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
      <CTA />
    </>
  );
}
