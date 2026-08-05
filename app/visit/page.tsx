import type { Metadata } from "next";
import Link from "next/link";
import { Accessibility, ArrowRight, Baby, Car, Clock3, Coffee, MapPin, Shirt, UtensilsCrossed } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { church } from "@/lib/site";

export const metadata: Metadata = { title: "Plan a Visit" };

const expectations = [
  { icon: Shirt, title: "Wear what feels like you", text: "Jeans, Sunday best, or anything in between—comfort is welcome here." },
  { icon: Clock3, title: "About an hour", text: "Worship begins at 10:00 AM. Arrive around 9:40 to meet a greeter and settle in." },
  { icon: Baby, title: "Children belong", text: "Children begin in worship, then may join Godly Play or use the quiet activity area." },
  { icon: UtensilsCrossed, title: "An open table", text: "Communion is offered regularly and everyone may receive, regardless of background or age." },
];

export default function VisitPage() {
  return (
    <>
      <PageHero
        eyebrow="New here?"
        title="Come as you are."
        description="You don’t need to know the words, have the answers, or look a certain way. We’ll be glad to meet you."
        image="/images/church-exterior.jpg"
      />
      <section className="section">
        <div className="shell narrow-heading center">
          <span className="eyebrow">Your first Sunday</span>
          <h2>Here’s what to expect.</h2>
          <p className="lead">A thoughtful, energetic, multigenerational service with music, prayer, scripture, and plenty of grace.</p>
        </div>
        <div className="shell expectation-grid">
          {expectations.map(({ icon: Icon, title, text }) => (
            <article className="icon-card" key={title}><Icon /><h3>{title}</h3><p>{text}</p></article>
          ))}
        </div>
      </section>

      <section className="section section-warm">
        <div className="shell arrival-grid">
          <div>
            <span className="eyebrow">When you arrive</span>
            <h2>We’ve made room for you.</h2>
            <div className="detail-list">
              <div><Car /><span><h3>Parking</h3><p>Free parking surrounds the campus. Accessible spaces are near the sanctuary entrance.</p></span></div>
              <div><Accessibility /><span><h3>Accessibility</h3><p>Ramps, accessible seating, and helpful greeters are available. Let us know how we can support you.</p></span></div>
              <div><Coffee /><span><h3>After worship</h3><p>Stay for conversation and, on many Sundays, refreshments in Price Hall. No pressure—just welcome.</p></span></div>
            </div>
          </div>
          <div className="visit-card">
            <span className="eyebrow eyebrow-gold">This Sunday</span>
            <h2>{church.worshipTime}</h2>
            <p>In the sanctuary and livestreamed online.</p>
            <hr />
            <div><MapPin /><span>{church.address}</span></div>
            <div><Clock3 /><span>Greeters are ready from 9:40 AM</span></div>
            <a className="button button-gold" href={church.mapUrl}>Get directions <ArrowRight size={17} /></a>
            <Link className="button button-ghost" href="/worship">Join online</Link>
          </div>
        </div>
      </section>

      <section className="section center-cta">
        <div className="shell">
          <span className="eyebrow">Still wondering?</span>
          <h2>Ask us anything before you come.</h2>
          <p>We know visiting a church can feel like a big step. A real person from our office will be happy to help.</p>
          <a className="button button-navy" href={`mailto:${church.email}?subject=Question before my first visit`}>Email the church office</a>
        </div>
      </section>
    </>
  );
}
