import type { Metadata } from "next";
import { ArrowRight, BookOpen, HandHeart, Home, Music2, Salad, UsersRound } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { asset, church } from "@/lib/site";

export const metadata: Metadata = { title: "Ministries & Community Action" };

const ministryGroups = [
  { id: "children", icon: UsersRound, title: "Children & Youth", text: "Children begin Sunday in the sanctuary, then explore sacred stories through Godly Play. Music Explorers, youth gatherings, Compassion Camp, and worship leadership help every young person know they are valued.", items: ["Godly Play", "Children’s Time", "Music Explorers Club", "Youth gatherings & service"] },
  { id: "community-care", icon: Salad, title: "Food & Community Care", text: "We join neighbors and partner congregations to put nourishing food on tables and surround people with care—without judgment or barriers.", items: ["SHARE food closet", "Upper Room community meals", "Little Help Backpacks", "Federated Farmers Market"] },
  { id: "justice", icon: HandHeart, title: "Justice & Housing", text: "Our faith moves us toward the work of peace, inclusion, affordable housing, disaster recovery, and repair. We support Housing El Dorado and collaborate across the Western Slope.", items: ["Housing El Dorado partnership", "Reconciling Ministries", "More Light Presbyterians", "Mission connections"] },
  { id: "music", icon: Music2, title: "Music & Worship Arts", text: "Music is a spiritual practice here. Sing, ring, play, move, or help behind the scenes—experience is welcome, but curiosity is enough.", items: ["Chancel Choir", "Handbell Choir", "Praise Team", "Worship Support Team"] },
  { id: "learning", icon: BookOpen, title: "Learning & Small Groups", text: "Adults gather to study, ask hard questions, pray, create, and build lasting friendships. There is room for seasoned members and people exploring faith for the first time.", items: ["Adult education", "Federated Church Women", "Fellowship groups", "Prayer & pastoral care"] },
  { id: "care", icon: Home, title: "Congregational Care", text: "Care continues beyond Sunday through visits, calls, prayer, practical support, and companionship during illness, grief, transition, and celebration.", items: ["Pastoral visits", "Congregational care team", "Prayer support", "Home Communion"] },
];

export default function MinistriesPage() {
  return (
    <>
      <PageHero eyebrow="Ministries & community action" title="Love takes shape here." description="Faith becomes real when gifts are shared, neighbors are fed, questions are welcomed, and justice is pursued." image="/images/music-choir.jpg" />
      <section className="section">
        <div className="shell narrow-heading center"><span className="eyebrow">Find your next step</span><h2>Serve, connect, learn, and create.</h2><p className="lead">You don’t have to be a member—or an expert—to join in. Start with what matters to you.</p></div>
        <div className="shell ministry-detail-list">
          {ministryGroups.map(({ id, icon: Icon, title, text, items }, index) => (
            <article id={id} className="ministry-detail" key={id}>
              <div className="ministry-number">0{index + 1}</div>
              <div className="ministry-detail-copy"><Icon /><h2>{title}</h2><p>{text}</p><a href={`mailto:${church.email}?subject=${encodeURIComponent(`I’m interested in ${title}`)}`}>Ask about this ministry <ArrowRight size={16} /></a></div>
              <ul>{items.map((item) => <li key={item}>{item}</li>)}</ul>
            </article>
          ))}
        </div>
      </section>
      <section className="image-cta" style={{ backgroundImage: `url(${asset("/images/food-volunteers.jpg")})` }}>
        <div className="shell"><span className="eyebrow eyebrow-light">Not sure where to begin?</span><h2>Tell us what brings you joy.</h2><p>We’ll help you find people to meet and a way to make a difference that fits your life.</p><a className="button button-gold" href={`mailto:${church.email}?subject=Help me find a place to connect`}>Start a conversation</a></div>
      </section>
    </>
  );
}
