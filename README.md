# 5K Power Landing Page

Static landing page for 5K Power (a 5K Holdings company) — UL-certified
electrical manufacturing and integrated power solutions.

No backend. Open `index.html` in a browser, or host the folder on any static
host (Netlify, GitHub Pages, S3, etc.).

**Live:** https://velkuraditya-ux.github.io/5K-Power/

## Files

- `index.html` — the full site (HTML + CSS + a little JS)
- `fonts/` — Barlow + Gehuropic
- `logo/` — brand logos
- `images/` — photography

## Contact form → email

The form does not store submissions. It opens a mail draft to the address you set.

1. Open `index.html`
2. Find this line near the bottom:

```js
const CONTACT_EMAIL = "YOUR_EMAIL@example.com";
```

3. Replace it with the inbox that should receive inquiries.

When someone submits, their mail app opens with name, email, company, and
message already filled in.

## Run it

Double-click `index.html`, or from this folder:

```bash
open index.html
```

To preview with a local server (optional):

```bash
npx serve .
```
