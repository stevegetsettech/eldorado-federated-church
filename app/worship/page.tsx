import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Headphones, MessageCircle, Play, Radio, Tv } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { asset, church } from "@/lib/site";

export const metadata: Metadata = { title: "Worship & Media" };

const archive = [
  { label: "Most recent", title: "Sunday Worship", type: "Full service", image: "/images/worship-children.jpg" },
  { label: "Worship archive", title: "Messages for the journey", type: "Video collection", image: "/images/stained-glass.jpg" },
  { label: "Music at Federated", title: "Make a joyful noise", type: "Worship & concerts", image: "/images/music-choir.jpg" },
];

export default function WorshipPage() {
  return (
    <>
      <PageHero eyebrow="Worship & media" title="A living, spacious faith." description="Music, prayer, scripture, silence, and questions come together in worship that makes room for the whole person." image="/images/worship-children.jpg" />
      <section className="section livestream-section">
        <div className="shell livestream-grid">
          <a className="youtube-channel-panel" href={church.youtube} aria-label="Open the El Dorado County Federated Church YouTube channel">
            <img src={asset("/images/worship-children.jpg")} alt="" />
            <div>
              <span className="youtube-channel-kicker"><Tv size={18} /> Federated Church on YouTube</span>
              <h3>Worship, messages, and music.</h3>
              <p>Watch Sunday worship and explore recent services directly on our YouTube channel.</p>
              <span className="youtube-channel-link"><Play size={16} fill="currentColor" /> Open the YouTube channel <ArrowRight size={16} /></span>
            </div>
          </a>
          <div>
            <span className="live-pill"><span /> Live Sundays at 10:00 AM Pacific</span>
            <h2>Worship with us online.</h2>
            <p className="lead">Whether you’re traveling, homebound, exploring, or joining from across the country, you are part of the congregation.</p>
            <div className="platform-links">
              <a href={church.facebook}><MessageCircle /><span><b>Facebook Live</b>Join the conversation</span><ArrowRight /></a>
              <a href={church.youtube}><Tv /><span><b>Federated Church on YouTube</b>Watch live and browse the full archive</span><ArrowRight /></a>
            </div>
          </div>
        </div>
      </section>
      <section className="section section-warm">
        <div className="shell section-heading split-heading align-end"><div><span className="eyebrow">Listen anytime</span><h2>Worship & messages</h2></div><a className="button button-navy" href={church.youtube}><Tv size={17} /> Visit our YouTube channel</a></div>
        <div className="shell archive-grid">
          {archive.map((item, index) => (
            <a className="archive-card" href={church.youtube} key={item.label}>
              <div className="archive-image"><img src={asset(item.image)} alt="" /><span>{index === 2 ? <Headphones /> : <Play fill="currentColor" />}</span></div>
              <div><small>{item.label}</small><h3>{item.title}</h3><p>{item.type}</p></div>
            </a>
          ))}
        </div>
      </section>
      <section className="center-cta section">
        <div className="shell"><Radio /><span className="eyebrow">In-person worship</span><h2>There is a seat for you in the sanctuary.</h2><p>Sunday worship is relaxed, meaningful, and usually under an hour. Children are active participants and Communion is open to all.</p><Link className="button button-navy" href="/visit">Plan your visit <ArrowRight size={17} /></Link></div>
      </section>
    </>
  );
}
