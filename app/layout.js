import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Motion from "@/components/Motion";
import { organizationSchema, pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site-data";

export const metadata = pageMetadata({
  title: "343 Consultants | Renewable Energy Project Management Australia",
  description: site.description,
  path: "/"
});

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU">
      <body>
        <JsonLd data={organizationSchema()} />
        <Header />
        <main className="main">{children}</main>
        <Footer />
        <Motion />
      </body>
    </html>
  );
}
