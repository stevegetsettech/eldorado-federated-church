# El Dorado County Federated Church website

A modern, responsive website for El Dorado County Federated Church in Placerville, California—a shared Presbyterian Church (U.S.A.) and United Methodist congregation.

## Pages included

- Home: welcome, worship time, map, identity, ministries, media, and events
- New Here?: Sunday expectations, children, Communion, parking, and accessibility
- About: dual-denomination history, values, and staff directory
- Ministries: children and youth, community care, justice, music, learning, and pastoral care
- Worship & Media: livestream player and video archive links
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
| Home-page event cards | `lib/site.ts` → `events` |
| Home-page ministry cards | `lib/site.ts` → `ministries` |
| Staff names, roles, biographies, and photos | `app/about/page.tsx` → `staff` |
| Page wording | The matching file under `app/` |
| Photos | `public/images/` |

Event dates in `lib/site.ts` are plain text. Keep the three event cards in chronological order and update them as often as the weekly e-bulletin.

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
5. Open the **Actions** tab and confirm “Deploy staging preview” completed successfully.

The preview will be available at:

`https://YOUR-ORGANIZATION.github.io/eldorado-federated-church/`

Every push to `main` automatically rebuilds and republishes the staging site through `.github/workflows/deploy.yml`.

### Password-protected board preview

The deployment workflow encrypts every HTML page before publishing it. The password is stored only as the GitHub Actions secret `PREVIEW_PASSWORD`; it is not committed to the repository.

To set or rotate the review password:

```bash
gh secret set PREVIEW_PASSWORD
```

Use a unique password of at least 16 characters. Changing the secret and rerunning the deployment workflow replaces the encrypted preview with the new password.

## Final domain launch

Keep the GitHub Pages address as the board-review staging URL until content is approved. For final launch:

1. In **Settings → Pages**, add `www.eldoradofederatedchurch.org` as the custom domain.
2. GitHub will show the exact DNS records to add at the church’s domain provider.
3. Make the DNS change only after the board approves the staging site.
4. Turn on **Enforce HTTPS** after GitHub confirms the domain.

Do not remove the current website or change DNS during review. The existing website remains live until the custom domain is connected.

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
- Encrypted GitHub Pages preview for board review
