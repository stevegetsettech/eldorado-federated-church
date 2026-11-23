# El Dorado County Federated Church website

A modern, responsive website for El Dorado County Federated Church in Placerville, California—a shared Presbyterian Church (U.S.A.) and United Methodist congregation.

## Pages included

- Home: welcome, worship time, map, identity, ministries, media, and events
- New Here?: Sunday expectations, children, Communion, parking, and accessibility
- About: dual-denomination history, values, and staff directory
- Ministries: children and youth, community care, justice, music, learning, and pastoral care
- Worship & Media: featured worship service, livestream, and video archive links
- Praise & Prayer Requests: a guided request form that opens the visitor’s email app
- Giving: recurring, one-time, special mission, and legacy giving information

## Run the site locally

You need Node.js 22 or newer.

```bash
npm install
npm run dev
```

Open `http://localhost:3000` in a browser.

Before publishing a change, verify the production build:

```bash
npm test
```

## Update church information

The most frequently changed content is intentionally kept in a few obvious places:

| What to update | File |
| --- | --- |
| Service time, address, phone, email, social links, giving link | `lib/site.ts` → `church` |
| Live calendar link | `lib/site.ts` → `church.calendar` |
| Featured Sunday worship video | `lib/site.ts` → `church.featuredWorship` |
| Music and children/youth contact emails | `lib/site.ts` → `church.musicEmail` and `church.childrenYouthEmail` |
| Mission A–Z Guide | Replace `public/documents/mission-a-to-z-guide-september-2026.pdf` |
| Home-page ministry cards | `lib/site.ts` → `ministries` |
| Staff names, roles, biographies, and photos | `app/about/page.tsx` → `staff` |
| Page wording | The matching file under `app/` |
| Photos | `public/images/` |

The home page links directly to the church’s live MyChurchEvents calendar. Staff can update events in the existing calendar as usual; there is no duplicate weekly website update. The prayer-request form prepares an email to the main church address; change `church.email` in `lib/site.ts` if prayer requests should go to a different inbox.

When replacing a photo, keep the same filename to avoid changing code. Use a landscape JPG for page banners and a portrait or square image for staff.

## GitHub repository setup

1. Create an empty GitHub repository named `eldorado-federated-church`.
2. From this project folder, connect the repository and push the `main` branch:

   ```bash
   git remote add origin https://github.com/YOUR-ORGANIZATION/eldorado-federated-church.git
   git push -u origin main
   ```

3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, choose **GitHub Actions** as the source.
5. Open the **Actions** tab and confirm “Deploy production website” completed successfully.

The live website is available at:

`https://www.eldoradofederatedchurch.org/`

Every push to `main` automatically rebuilds and republishes the production site through `.github/workflows/deploy.yml`.

## Final domain launch

The production website uses GitHub Pages with `www.eldoradofederatedchurch.org` as its custom domain:

1. The `www` CNAME points to `stevegetsettech.github.io`.
2. The apex domain uses GitHub Pages A records and redirects to `www`.
3. Microsoft 365 MX and mail-security DNS records remain at the domain provider.
4. GitHub Pages enforces HTTPS after certificate provisioning completes.

Do not change nameservers or MX records during website maintenance.

## Content verification before launch

The first version uses information and photography from the church’s current website as reviewed on August 4, 2026. Before domain launch, church leadership should confirm:

- Upcoming event dates and times
- Staff titles, biographies, and portraits
- Giving-provider destination and current transaction fees
- Calendar, Facebook, and YouTube links
- Main office email and phone number
- Permission to reuse all supplied church photography

## Technology

- Next.js with TypeScript
- Responsive CSS with accessible navigation and reduced-motion support
- Lucide icons
- GitHub Pages production hosting with automatic deployment
