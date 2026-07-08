import Image from "next/image";

export default function PageHero({ eyebrow, title, text, image, imageClassName = "", children }) {
  return (
    <section className="page-hero">
      <div className="page-hero-copy">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p>{text}</p>
        {children}
      </div>
      {image ? (
        <div className={`page-hero-image ${imageClassName}`.trim()}>
          <Image src={image} alt="" fill sizes="(max-width: 860px) 100vw, 46vw" priority />
        </div>
      ) : null}
    </section>
  );
}
