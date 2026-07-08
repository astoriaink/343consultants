import CTA from "@/components/CTA";
import JsonLd from "@/components/JsonLd";
import PageHero from "@/components/PageHero";
import { breadcrumbSchema, faqSchema, pageMetadata } from "@/lib/seo";
import { faqs } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "FAQ | Renewable Energy Project Management Australia | 343 Consultants",
  description:
    "Answers to common questions about 343 Consultants' project management, construction management, renewable energy, solar, wind and remote project support in Australia.",
  path: "/faq",
  image: "/images/aerial-renewable-site.jpg"
});

export default function FAQPage() {
  return (
    <>
      <JsonLd data={faqSchema(faqs)} />
      <JsonLd data={breadcrumbSchema([{ name: "Home", path: "/" }, { name: "FAQ", path: "/faq" }])} />
      <PageHero
        eyebrow="FAQ"
        title="Common project questions."
        text="Answers about how 343 Consultants supports renewable energy, solar, wind, construction and infrastructure project delivery across Australia."
        image="/images/aerial-renewable-site.jpg"
      />
      <section className="section narrow">
        <div className="faq-grid">
          {faqs.map((faq) => (
            <article className="faq-item" key={faq.question}>
              <h2>{faq.question}</h2>
              <p>{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>
      <CTA title="Have a project-specific question?" />
    </>
  );
}
