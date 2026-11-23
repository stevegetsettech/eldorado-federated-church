# Production DNS cutover — November 23, 2026

Primary live domain: `www.eldoradofederatedchurch.org`

## Web records before cutover

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `199.34.228.159` |
| A | `www` | `199.34.228.159` |
| A | `*` | `199.34.228.159` |

## Production web records

| Type | Host | Value |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `stevegetsettech.github.io` |

The wildcard `*` record is intentionally unchanged. Microsoft 365 MX, SPF, DMARC, DKIM, and autodiscover records are unchanged. The authoritative nameservers remain unchanged:

- `dns033.c.register.com`
- `dns083.d.register.com`
- `dns223.a.register.com`
- `dns230.b.register.com`

## Launch verification

- GitHub Pages production deployment `45214518761` completed successfully.
- The root domain redirects to `www.eldoradofederatedchurch.org` and GitHub serves the production site there.
- GitHub reports both domains as valid, served by Pages, and eligible for HTTPS.
- As of November 23, 2026 at 8:57 AM PST, GitHub's HTTPS certificate was still provisioning, so HTTPS enforcement could not yet be enabled.

## Rollback

Restore the `@` and `www` web records to `199.34.228.159`. Do not alter MX records or nameservers.
