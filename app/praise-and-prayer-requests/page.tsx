import type { Metadata } from "next";
import { HeartHandshake, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { PrayerRequestForm } from "@/components/PrayerRequestForm";

export const metadata: Metadata = { title: "Praise & Prayer Requests" };

export default function PrayerRequestsPage() {
  return (
    <>
      <PageHero
        eyebrow="Prayer & care"
        title="How may we pray with you?"
        description="Bring a concern, a hope, or something worth celebrating. You do not have to carry it alone."
        image="/images/stained-glass.jpg"
      />
      <section className="section prayer-section">
        <div className="shell prayer-grid">
          <div className="prayer-intro">
            <HeartHandshake />
            <span className="eyebrow">Prayer requests & praise</span>
            <h2>Share what is on your heart.</h2>
            <p className="lead">We believe in the power of prayer—for healing, provision, guidance, comfort, and gratitude. We would be honored to pray alongside you.</p>
            <div className="privacy-note"><ShieldCheck /><p>Your request will be treated with care. Choose whether it should remain with the pastoral team or may be shared with the church’s prayer community.</p></div>
          </div>
          <PrayerRequestForm />
        </div>
      </section>
    </>
  );
}
