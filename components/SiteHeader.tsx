"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { church } from "@/lib/site";

const links = [
  ["New Here?", "/visit"],
  ["About", "/about"],
  ["Ministries", "/ministries"],
  ["Worship & Media", "/worship"],
  ["Give", "/give"],
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="service-bar">
        <div className="shell service-bar-inner">
          <span>Sundays at {church.worshipTime}</span>
          <span className="service-detail">In person in Placerville & online</span>
          <a href={`tel:${church.phone.replaceAll("-", "")}`}>{church.phone}</a>
        </div>
      </div>
      <header className="site-header">
        <div className="shell header-inner">
          <Link href="/" className="brand" aria-label="Federated Church home">
            <span className="brand-mark" aria-hidden="true">F</span>
            <span className="brand-copy">
              <strong>El Dorado County</strong>
              <span>Federated Church</span>
            </span>
          </Link>

          <nav className="desktop-nav" aria-label="Main navigation">
            {links.map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className={pathname === href ? "active" : undefined}
              >
                {label}
              </Link>
            ))}
            <Link className="nav-visit" href="/visit">Plan a Visit</Link>
          </nav>

          <button
            className="menu-button"
            type="button"
            aria-label={open ? "Close navigation" : "Open navigation"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={25} /> : <Menu size={27} />}
          </button>
        </div>
        {open && (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {links.map(([label, href]) => (
              <Link key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </Link>
            ))}
            <Link className="button button-gold" href="/visit" onClick={() => setOpen(false)}>
              Plan a Visit
            </Link>
          </nav>
        )}
      </header>
    </>
  );
}
