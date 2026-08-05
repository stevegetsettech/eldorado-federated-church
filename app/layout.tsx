import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.eldoradofederatedchurch.org",
  ),
  title: {
    default: "El Dorado County Federated Church | Placerville, CA",
    template: "%s | El Dorado County Federated Church",
  },
  description:
    "A progressive Presbyterian (PCUSA) and United Methodist congregation in Placerville practicing love, compassion, justice, and radical hospitality.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
  icons: {
    icon: "/images/federated-icon.png",
    shortcut: "/images/federated-icon.png",
  },
  openGraph: {
    title: "All Are Welcome at God’s Table",
    description: "Worship Sundays at 10 AM in Placerville and online.",
    type: "website",
    images: [
      {
        url: "/images/steeple.jpg",
        width: 2311,
        height: 929,
        alt: "The steeple of El Dorado County Federated Church",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Are Welcome at God’s Table",
    description: "Worship Sundays at 10 AM in Placerville and online.",
    images: ["/images/steeple.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <SiteHeader />
        <main id="main-content">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
