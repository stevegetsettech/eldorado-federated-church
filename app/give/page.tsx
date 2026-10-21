import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight, Check, HandCoins, Heart, LockKeyhole, QrCode, Repeat2, Sprout } from "lucide-react";
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
              <li><Check /> One-time or recurring gifts through Vanco</li>
              <li><Check /> General and pledged giving through PayPal</li>
              <li><Check /> Designated ministries selected in PayPal</li>
            </ul>
            <a className="button button-gold button-large" href={church.giving} target="_blank" rel="noreferrer">Give securely with Vanco <ArrowRight size={18} /></a>
            <p className="secure-note"><LockKeyhole size={15} /> You’ll continue to Federated Church’s secure Vanco giving page.</p>
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
        <div className="shell narrow-heading center"><span className="eyebrow">Online giving</span><h2>Choose the giving option that works for you.</h2></div>
        <div className="shell giving-methods">
          <article className="giving-method">
            <div className="giving-method-icon"><Repeat2 /></div>
            <span className="eyebrow">Vanco eGiving</span>
            <h3>One-time or recurring gifts</h3>
            <p>Use Vanco for a single gift or to establish a dependable weekly or monthly giving schedule.</p>
            <a className="button button-navy" href={church.giving} target="_blank" rel="noreferrer">Open Vanco <ArrowRight size={17} /></a>
          </article>
          <article className="giving-method giving-method-paypal">
            <div className="giving-method-copy">
              <div className="giving-method-icon"><Heart /></div>
              <span className="eyebrow">PayPal donations</span>
              <h3>Select the fund for your gift</h3>
              <p>PayPal’s <strong>“Use this donation for”</strong> menu lets you choose the purpose of your gift. That selection stays with the donation so the finance team knows where it belongs.</p>
              <a className="button button-gold" href={church.paypalGiving} target="_blank" rel="noreferrer">Donate with PayPal <ArrowRight size={17} /></a>
            </div>
            <div className="giving-qr">
              <QrCode aria-hidden="true" />
              <Image src="/images/paypal-giving-qr.png" width={208} height={208} alt="QR code for El Dorado County Federated Church PayPal giving" />
              <p>Scan to open PayPal</p>
            </div>
          </article>
        </div>
      </section>
      <section className="section legacy-giving">
        <div className="shell legacy-giving-inner">
          <Sprout />
          <div><span className="eyebrow">Legacy giving</span><h2>A gift that carries welcome forward.</h2><p>Including Federated Church in your estate plan can sustain worship, care, and community service for future generations.</p></div>
        </div>
      </section>
      <section className="giving-help section-dark">
        <div className="shell"><HandCoins /><div><span className="eyebrow eyebrow-gold">Need a hand?</span><h2>We’re here to help.</h2><p>For assistance with a gift, pledge, recurring donation, or special designation, contact the church office.</p></div><a className="button button-ghost" href={`mailto:${church.email}?subject=Question about giving`}>Contact the office</a></div>
      </section>
    </>
  );
}
