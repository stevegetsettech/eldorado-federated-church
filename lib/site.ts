export const church = {
  name: "El Dorado County Federated Church",
  shortName: "Federated Church",
  address: "1031 Thompson Way, Placerville, CA 95667",
  phone: "530-622-0273",
  email: "office@eldoradofederatedchurch.org",
  worshipTime: "10:00 AM",
  mapUrl:
    "https://www.google.com/maps/place/1031+Thompson+Way,+Placerville,+CA+95667/@38.7286751,-120.7967381,17z",
  youtube: "https://www.youtube.com/@eldoradofederatedchurchpla3486",
  featuredWorship: "https://www.youtube.com/watch?v=wiLO430AhwY",
  facebook: "https://www.facebook.com/FederatedChurchPlacerville",
  calendar: "https://www.mychurchevents.com/calendar/73849641",
  prayerRequests: "/praise-and-prayer-requests",
  musicEmail: "Federatedmusic@eldoradofederatedchurch.org",
  childrenYouthEmail: "Federatedcym@eldoradofederatedchurch.org",
  missionGuide: "/documents/mission-a-to-z-guide-september-2026.pdf",
  giving: "https://secure.myvanco.com/L-ZE80/home",
  paypalGiving: "https://www.paypal.com/donate/?hosted_button_id=AFU958AL3NZW2",
};

export const ministries = [
  {
    title: "Children & Youth",
    kicker: "Wonder is welcome",
    description:
      "Godly Play, Music Explorers, youth gatherings, and intergenerational worship help young people ask big questions and know they belong.",
    image: "/images/children-ministry.jpg",
    href: "/ministries#children",
  },
  {
    title: "Food & Community Care",
    kicker: "Neighbors feeding neighbors",
    description:
      "SHARE food distribution, Upper Room meals, backpacks, and seasonal produce turn generosity into practical care.",
    image: "/images/food-volunteers.jpg",
    href: "/ministries#community-care",
  },
  {
    title: "Justice & Housing",
    kicker: "Faith in public life",
    description:
      "We work with local partners for housing, peace, inclusion, disaster recovery, and dignity for every neighbor.",
    image: "/images/pastor-laura.jpg",
    href: "/ministries#justice",
  },
  {
    title: "Music & Worship Arts",
    kicker: "Make a joyful noise",
    description:
      "Choir, handbells, praise band, children’s music, and worship technology create space for every gift.",
    image: "/images/music-choir.jpg",
    href: "/ministries#music",
  },
];

export function asset(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
