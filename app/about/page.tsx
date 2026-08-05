import type { Metadata } from "next";
import { HeartHandshake, Landmark, Scale, Sprout } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { asset } from "@/lib/site";

export const metadata: Metadata = { title: "About Us" };

const staff = [
  { name: "Rev. Dr. Laura Barnes", role: "Senior Pastor", image: "/images/pastor-laura.jpg", text: "Pastor Laura brings more than 20 years of parish ministry, a passion for justice, and deep experience serving families affected by homelessness and disaster." },
  { name: "Rev. Carrie Lane", role: "Parish Associate", image: "/images/carrie-lane.png", text: "Raised at Federated, Carrie supports pastoral care, visitation, worship, and the congregation’s ministry of connection and wellness." },
  { name: "Rebecca Monroe", role: "Director of Music Ministry", image: "/images/rebecca-monroe.jpg", text: "Rebecca leads the choir, handbells, praise band, children’s music, and concert series with joy and musical curiosity." },
  { name: "Cindi Runyon", role: "Director of Children & Youth Ministries", image: "/images/cindi-runyon.jpg", text: "Cindi brings decades of trauma-informed work with children and youth and a commitment to living Micah 6:8." },
  { name: "Jan Laird", role: "Office Manager", image: "/images/jan-laird.jpg", text: "Jan helps keep ministry moving and welcomes questions Tuesday through Friday, 9:00 AM–3:00 PM." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About Federated" title="Tradition with room to grow." description="For more than a century, Placerville Christians have discovered that we are stronger—and more faithful—together." image="/images/steeple.jpg" />

      <section className="section">
        <div className="shell story-grid">
          <div>
            <span className="eyebrow">Our dual heritage</span>
            <h2>One congregation, formed by cooperation.</h2>
          </div>
          <div className="prose-large">
            <p>In the Gold Rush era, Placerville’s Methodist and Presbyterian congregations each faced scarce resources and uncertain leadership. Their response was imaginative: work together.</p>
            <p>Federated Church was established in the 1920s as one worshiping community with members from both traditions. Today, our wide table includes people from many Christian backgrounds, other faith journeys, and no prior church experience at all.</p>
          </div>
        </div>
        <div className="shell timeline">
          <div><b>1851</b><span>The historic Methodist church building is dedicated in Placerville.</span></div>
          <div><b>1920s</b><span>Methodist and Presbyterian congregations become one federated church.</span></div>
          <div><b>Today</b><span>We keep practicing cooperation, inclusion, peacemaking, and service.</span></div>
        </div>
      </section>

      <section className="section values-section">
        <div className="shell">
          <div className="narrow-heading center"><span className="eyebrow eyebrow-light">What shapes us</span><h2>A faith alive in the world.</h2></div>
          <div className="values-grid">
            <article><HeartHandshake /><h3>Radical hospitality</h3><p>Every person is welcomed, included, and affirmed—across ability, age, ethnicity, gender identity, sexual orientation, and tradition.</p></article>
            <article><Scale /><h3>Justice & peace</h3><p>Following Jesus includes changing the conditions that harm our neighbors and standing with people pushed to the margins.</p></article>
            <article><Sprout /><h3>Growing faith</h3><p>Questions are not threats. They are part of a thoughtful, humble, and life-giving spiritual journey.</p></article>
            <article><Landmark /><h3>Shared tradition</h3><p>PC(USA) and UMC practices enrich our worship, leadership, learning, and connection to the wider church.</p></article>
          </div>
        </div>
      </section>

      <section className="section staff-section">
        <div className="shell section-heading split-heading"><div><span className="eyebrow">Our people</span><h2>Staff & pastoral leadership</h2></div><p>People who will learn your name, make space for your story, and help you find a way to participate.</p></div>
        <div className="shell staff-grid">
          {staff.map((person) => (
            <article className="staff-card" key={person.name}>
              <img src={asset(person.image)} alt={person.name} />
              <div><span>{person.role}</span><h3>{person.name}</h3><p>{person.text}</p></div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
