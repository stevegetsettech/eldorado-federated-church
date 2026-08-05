import type { Metadata } from "next";
import { ArrowRight, Check, HandCoins, Heart, LockKeyhole, Repeat2, Sprout } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { church } from "@/lib/site";

export const metadata: Metadata = { title: "Giving & Stewardship" };

export default function GivePage() {
  return (
    <>
      <PageHero eyebrow="Giving & stewardship" title="Your generosity becomes care." description="Together, our gifts sustain worship, nurture children, feed neighbors, pursue justice, and keep a wide welcome alive in Placerville." image="/images/stained-glass.jpg" />
      <section className="section">
        <div className="shell giving-grid">
          <div>
            <span className="eyebrow">Give online</span>
            <h2>A simple, secure way to share.</h2>
            <p className="lead">Make a one-time gift, set up recurring giving, fulfill a pledge, or support a special mission fund through our established giving partner.</p>
            <ul className="check-list">
              <li><Check /> General ministry & annual pledges</li>
              <li><Check /> Recurring weekly or monthly gifts</li>
              <li><Check /> SHARE food ministry & Housing El Dorado</li>
              <li><Check /> Pastor’s discretionary fund & special missions</li>
            </ul>
            <a className="button button-gold button-large" href={church.giving}>Give securely online <ArrowRight size={18} /></a>
            <p className="secure-note"><LockKeyhole size={15} /> You’ll continue to the church’s secure Presbyterian Foundation giving form.</p>
          </div>
          <div className="impact-card">
            <span className="eyebrow eyebrow-gold">Why we give</span>
            <blockquote>“Where your treasure is, there your heart will be also.”</blockquote>
            <p>— Matthew 6:21</p>
            <hr />
            <p>Giving is not a price of admission. Your presence is already a gift. Financial generosity is one way we practice gratitude and join God’s healing work.</p>
          </div>
        </div>
      </section>
      <section className="section section-warm">
        <div className="shell narrow-heading center"><span className="eyebrow">Ways to give</span><h2>Choose what fits your intention.</h2></div>
        <div className="shell give-options">
          <article><Repeat2 /><h3>Recurring giving</h3><p>Create a steady rhythm of support and update your gift through your online profile at any time.</p></article>
          <article><Heart /><h3>Special missions</h3><p>Direct a gift to food access, housing, disaster response, peace and justice, or pastoral care.</p></article>
          <article><Sprout /><h3>Legacy giving</h3><p>Include Federated Church in your estate plan to sustain welcome and service for future generations.</p></article>
        </div>
      </section>
      <section className="giving-help section-dark">
        <div className="shell"><HandCoins /><div><span className="eyebrow eyebrow-gold">Need a hand?</span><h2>We’re here to help.</h2><p>For assistance with a gift, pledge, recurring donation, or special designation, contact the church office.</p></div><a className="button button-ghost" href={`mailto:${church.email}?subject=Question about giving`}>Contact the office</a></div>
      </section>
    </>
  );
}
