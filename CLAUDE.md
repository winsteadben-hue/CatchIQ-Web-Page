# IQ.Fishing Website

Static marketing and companion site for IQ.Fishing (CatchIQ). Plain HTML, CSS, and vanilla JS — no framework, no build step. Deployed via GitHub Pages at **iq.fishing**.

---

## Stack

- Pure HTML5 / CSS3 / vanilla JavaScript (ES6+)
- No build step, no preprocessors, no dependencies
- Google Fonts (Playfair Display, DM Sans, DM Mono)
- GitHub repo: `winsteadben-hue/CatchIQ-Web-Page` → auto-deploys to GitHub Pages on push

---

## File Structure

```
index.html              Main landing page
about.html              About IQ.Fishing
help.html               App help / FAQ
privacy.html            Privacy policy
delete-account.html     Account deletion instructions
join.html               Tournament join page
get-app.html            App download links
tournament-help.html    Tournament guide
tournament-flyer.html   Promo flyer
support-widget.js       Embedded support chat widget
CNAME                   Custom domain (iq.fishing)
charter/index.html      Charter/guide page
tournament/index.html   Tournament portal
tournament/register/    Registration flow
screenshots/            Product screenshots
```

---

## Local Preview

No build needed — open any HTML file in a browser, or serve locally:

```bash
python -m http.server 8000
# or: npx http-server
```

---

## Deployment

Push to `main` on GitHub → GitHub Pages auto-deploys. Changes are live within ~1 minute.

**Always commit and push after every change** — don't leave changes uncommitted.

```bash
git add <files>
git commit -m "description"
git push
```

---

## Key Conventions

- **No JavaScript where plain HTML/CSS works.** This is a static site — keep it that way.
- **Inline styles are common here** — match the existing pattern, don't refactor to external CSS unless asked.
- **No build tooling** — don't introduce npm, bundlers, or preprocessors.
- **Domain:** `iq.fishing` (main), `tournaments.iq.fishing` (tournament portal)
