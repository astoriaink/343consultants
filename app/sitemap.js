import { sectors, services, site } from "@/lib/site-data";

export default function sitemap() {
  const staticRoutes = ["", "/services", "/projects", "/about", "/faq", "/contact"];
  const serviceRoutes = services.map((service) => `/services/${service.slug}`);
  const sectorRoutes = sectors.map((sector) => `/sectors/${sector.slug}`);

  return [...staticRoutes, ...serviceRoutes, ...sectorRoutes].map((route) => ({
    url: `${site.url}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "monthly" : "yearly",
    priority: route === "" ? 1 : 0.7
  }));
}
