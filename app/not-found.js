import Link from "next/link";

export default function NotFound() {
  return (
    <section className="section narrow">
      <div className="content-panel">
        <p className="eyebrow">404</p>
        <h1>Page not found</h1>
        <p>The page you are looking for is not available.</p>
        <Link className="button primary" href="/">Return home</Link>
      </div>
    </section>
  );
}
