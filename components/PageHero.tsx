import { asset } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  description,
  image,
}: {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
}) {
  return (
    <section className="page-hero" style={{ backgroundImage: `url(${asset(image)})` }}>
      <div className="page-hero-overlay" />
      <div className="shell page-hero-content">
        <span className="eyebrow eyebrow-light">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </section>
  );
}
