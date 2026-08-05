import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone, Tv } from "lucide-react";
import { asset, church } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="shell footer-main">
        <div className="footer-intro">
          <Link href="/" className="brand brand-light">
            <span className="brand-mark" aria-hidden="true">F</span>
            <span className="brand-copy">
              <strong>El Dorado County</strong>
              <span>Federated Church</span>
            </span>
          </Link>
          <p>Practicing the love, compassion, and radical hospitality of Jesus Christ.</p>
          <div className="social-row">
            <a href={church.facebook} aria-label="Federated Church on Facebook"><MessageCircle size={20} /></a>
            <a href={church.youtube} aria-label="Federated Church on YouTube"><Tv size={21} /></a>
            <a href={`mailto:${church.email}`} aria-label="Email Federated Church"><Mail size={20} /></a>
          </div>
        </div>

        <div>
          <h3>Visit</h3>
          <ul className="footer-list contact-list">
            <li><MapPin size={18} /><a href={church.mapUrl}>{church.address}</a></li>
            <li><Phone size={18} /><a href={`tel:${church.phone.replaceAll("-", "")}`}>{church.phone}</a></li>
            <li><Mail size={18} /><a href={`mailto:${church.email}`}>{church.email}</a></li>
          </ul>
        </div>

        <div>
          <h3>Explore</h3>
          <ul className="footer-list">
            <li><Link href="/visit">Plan a Visit</Link></li>
            <li><Link href="/about">Our Story & Staff</Link></li>
            <li><Link href="/ministries">Ministries</Link></li>
            <li><Link href="/worship">Watch Worship</Link></li>
            <li><Link href="/give">Give Online</Link></li>
          </ul>
        </div>

        <div className="denomination-block">
          <h3>One church. Two traditions.</h3>
          <img src={asset("/images/denomination-logos.jpg")} alt="Presbyterian Church USA and United Methodist Church" />
          <p>Proudly federated with the Presbyterian Church (U.S.A.) and The United Methodist Church.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="shell">
          <span>© {new Date().getFullYear()} El Dorado County Federated Church</span>
          <span>All are welcome. All the time.</span>
        </div>
      </div>
    </footer>
  );
}
