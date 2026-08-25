# 5K Power Website

Static multi-page website for 5K Power, a 5K Holdings company.

No backend. Open `index.html` in a browser, or host the folder on any static
host such as GitHub Pages or Azure Static Web Apps.

**Live:** https://velkuraditya-ux.github.io/5K-Power/

## Pages

- Home
- UL-Certified Manufacturing
- Temporary Power Solutions
- Integrated Skid Solutions
- Careers
- Request a Quote

Shared styling is in `styles.css`; shared browser behavior is in `site.js`.

## Quote form

The site has no backend and stores no submissions. The quote form opens an email
draft to `info@5kpower.com`. File attachments must be added manually to the draft
before sending.

## Run it

Preview with any static server:

```bash
python3 -m http.server 8080
```

Before production launch, confirm the quote inbox, office phone, and careers
application destination with the appropriate internal teams.

## Azure DevOps / Static Web Apps

This folder is the deployable static site root.

- `staticwebapp.config.json` — Azure Static Web Apps config
- `azure-pipelines.yml` — sample DevOps pipeline (`skip_app_build: true`)

Set pipeline secret `AZURE_STATIC_WEB_APPS_API_TOKEN` from the Static Web App
deployment token. See `../AZURE-DEVOPS-SYNC-GUIDE.md` for the exact file sync list.
