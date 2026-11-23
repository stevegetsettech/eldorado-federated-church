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

The wildcard `*` record is intentionally unchanged. Microsoft 365 MX, SPF, DMARC, DKIM, and autodiscover records are unchanged. Nameservers remain `dns1.register.com` and `dns2.register.com`.

## Rollback

Restore the `@` and `www` web records to `199.34.228.159`. Do not alter MX records or nameservers.
