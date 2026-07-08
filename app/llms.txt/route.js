import { faqs, navItems, services, site } from "@/lib/site-data";

export function GET() {
  const body = `# ${site.name}

${site.description}

## Primary Services
${services.map((service) => `- ${service.title}: ${service.description}`).join("\n")}

## Key Topics
- Renewable energy project management Australia
- Solar farm project management Australia
- Wind farm construction management Australia
- Construction management for renewable energy and infrastructure projects
- Safety, risk and security support for Australian project delivery

## Important Pages
${navItems.map((item) => `- ${item.label}: ${site.url}${item.href}`).join("\n")}

## Common Questions
${faqs.map((faq) => `- ${faq.question} ${faq.answer}`).join("\n")}

## Contact
- Phone: ${site.phone}
- Email: ${site.email}
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
