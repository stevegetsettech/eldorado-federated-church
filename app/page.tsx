import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  HeartHandshake,
  Leaf,
  MapPin,
  Play,
  Radio,
  Sparkles,
  Tv,
} from "lucide-react";
import { asset, church, ministries } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <picture className="home-hero-visual">
          <source media="(max-width: 820px)" srcSet={asset("/images/church-rainbow-solar-portrait.jpg")} />
          <img src={asset("/images/church-rainbow-solar.jpg")} alt="Federated Church with its rainbow welcome mural and rooftop solar panels" />
        </picture>
        <div className="home-hero-overlay" />
        <div className="shell hero-content">
          <div className="hero-tag"><Sparkles size={16} /> A community of welcome in Placerville</div>
          <h1>All Are Welcome<br />at God’s Table</h1>
          <p>
            Come as you are. Bring your questions, your gifts, and your whole self to a community practicing Jesus’ radical hospitality.
          </p>
          <div className="button-row">
            <Link className="button button-gold" href="/visit">Plan a Visit <ArrowRight size={17} /></Link>
            <Link className="button button-ghost" href="/worship"><Play size={17} /> Watch Live / Sermons</Link>
            <Link className="button button-text-light" href="/give">Give Online <ArrowRight size={16} /></Link>
          </div>
          <div className="hero-values" aria-label="Our commitments">
            <span><HeartHandshake size={17} /> LGBTQIA+ affirming</span>
            <span><Leaf size={17} /> Environmental justice</span>
          </div>
        </div>
        <div className="hero-rail shell">
          <div><Clock3 /><span><strong>Sundays at 10:00 AM</strong>In person & online</span></div>
          <div><MapPin /><span><strong>Placerville, California</strong>1031 Thompson Way</span></div>
          <div><Radio /><span><strong>Worship from anywhere</strong>Facebook & YouTube</span></div>
        </div>
      </section>

      <section className="service-location section">
        <div className="shell service-grid">
          <div className="service-copy">
            <span className="eyebrow">Join us this Sunday</span>
            <h2>A place to breathe, belong, and become.</h2>
            <p className="lead">
              Our joyful, thoughtful worship brings generations together through scripture, music, prayer, and an open table. We offer Godly Play for children ages 5–5th grade and welcome all youth (grades 6–12) to join us for a variety of activities throughout the month.
            </p>
            <div className="service-facts">
              <div><CalendarDays /><span><b>Sunday worship</b>{church.worshipTime}</span></div>
              <div><MapPin /><span><b>In the sanctuary</b>{church.address}</span></div>
            </div>
            <div className="button-row">
              <Link className="button button-navy" href="/visit">What to expect</Link>
              <a className="text-link" href={church.mapUrl}>Get directions <ArrowRight size={16} /></a>
            </div>
          </div>
          <div className="map-card">
            <iframe
              title="Map to El Dorado County Federated Church"
              src="https://www.google.com/maps?q=1031%20Thompson%20Way%2C%20Placerville%2C%20CA%2095667&z=15&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="map-caption"><MapPin size={19} /><span><b>Federated Church</b>Easy parking · Accessible entrance</span></div>
          </div>
        </div>
      </section>

      <section className="identity-section section">
        <div className="shell identity-grid">
          <div className="image-stack">
            <img className="identity-main-image" src={asset("/images/stained-glass.jpg")} alt="Colorful stained glass window at Federated Church" />
            <div className="identity-quote">“All are welcome — all the time.”</div>
          </div>
          <div className="identity-copy">
            <span className="eyebrow">One church · Two traditions</span>
            <h2>Rooted in faith.<br />Growing toward justice.</h2>
            <p className="lead">
              Federated Church is a unique congregation of the Presbyterian Church (U.S.A.) and The United Methodist Church—together since the 1920s. We have had a worshipping presence in El Dorado County since 1851.
            </p>
            <p>
              We are progressive Christians, spiritual seekers, longtime believers, and curious neighbors. We are active in mission here in our community and throughout the world. People of every denominational identity, ability, age, ethnicity, gender identity, immigration status, and sexual orientation are welcomed, included, and affirmed.
            </p>
            <div className="value-list">
              <span><HeartHandshake size={19} /> Radical hospitality</span>
              <span><Sparkles size={19} /> Thoughtful faith</span>
              <span><ArrowRight size={19} /> Justice in action</span>
            </div>
            <Link className="text-link" href="/about">Discover our federated story <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      <section className="ministries-section section">
        <div className="shell">
          <div className="section-heading split-heading">
            <div><span className="eyebrow">Faith that moves</span><h2>There’s a place for your gifts.</h2></div>
            <p>Find community, make music, serve a meal, advocate for a neighbor, or simply begin with a conversation.</p>
          </div>
          <div className="ministry-grid">
            {ministries.map((ministry) => (
              <Link className="ministry-card" href={ministry.href} key={ministry.title}>
                <img src={asset(ministry.image)} alt="" />
                <div className="ministry-card-content">
                  <span>{ministry.kicker}</span>
                  <h3>{ministry.title}</h3>
                  <p>{ministry.description}</p>
                  <b>Explore ministry <ArrowRight size={16} /></b>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="media-feature section-dark">
        <div className="shell media-grid">
          <div className="media-image" style={{ backgroundImage: `url(${asset("/images/worship-children.jpg")})` }}>
            <a href={church.youtube} className="play-button" aria-label="Watch worship on YouTube"><Play fill="currentColor" /></a>
            <span>Sunday worship · Latest service</span>
          </div>
          <div className="media-copy">
            <span className="eyebrow eyebrow-gold">Worship with us</span>
            <h2>Come to the table from wherever you are.</h2>
            <p>Join live Sunday at 10:00 AM Pacific or watch past worship services any time. You are part of this community, even from a distance.</p>
            <div className="button-row">
              <a className="button button-gold" href={church.facebook}><Radio size={17} /> Facebook Live</a>
              <a className="button button-ghost" href={church.youtube}><Tv size={17} /> YouTube Channel</a>
            </div>
          </div>
        </div>
      </section>

      <section id="calendar" className="events-section section">
        <div className="shell calendar-feature">
          <div className="calendar-mark" aria-hidden="true"><CalendarDays /></div>
          <div className="calendar-copy">
            <span className="eyebrow">Gather with us</span>
            <h2>See what’s happening at Federated.</h2>
            <p>Event details change from week to week. Our live church calendar always has the current dates, times, and gathering information.</p>
          </div>
          <div className="calendar-action">
            <span><Clock3 size={18} /> Sunday worship remains at 10:00 AM</span>
            <a className="button button-navy button-large" href={church.calendar}>View the live calendar <ArrowRight size={17} /></a>
          </div>
        </div>
      </section>

      <section className="newsletter-section">
        <div className="shell newsletter-inner">
          <div><span className="eyebrow eyebrow-light">Stay connected</span><h2>Good news for your inbox.</h2><p>Receive the weekly e-bulletin, Sunday details, and ways to serve.</p></div>
          <a className="button button-cream" href={`mailto:${church.email}?subject=Please add me to the weekly email list`}>Join our email list <ArrowRight size={17} /></a>
        </div>
      </section>
    </>
  );
}
