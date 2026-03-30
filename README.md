# Quant Finance at UTokyo

**Official website for Quant Finance at UTokyo** — a cross-departmental finance career community at the University of Tokyo.

https://quant-finance-tokyo.github.io/

## About

Quant Finance at UTokyo is an information-sharing community for UTokyo students pursuing careers in quantitative finance, actuarial science, and other financial professions. Founded in March 2026, we share job hunting, internship, course, and competition information across department boundaries.

## Tech Stack

- **React** + **Vite**
- **react-router-dom** (HashRouter)
- **GitHub Pages** hosting
- **GitHub Actions** for CI/CD (auto-deploy on push to `main`)
- **Google Apps Script** for form backend (→ Google Sheets + email notifications)
- **Google Analytics 4** for access tracking

## Pages

| Page | Description |
|------|-------------|
| Home | Hero section, activity overview, CTA |
| About | Mission, target members, founder profile |
| Divisions | Quant, Actuarial, Other Finance (planned) |
| Events | Timeline, competition info |
| Join | Application form (→ Google Sheets + auto-confirmation email) |
| Resources | Books, programming, competitions, target companies |

## Features

- Japanese / English language toggle
- Scroll animations (fade-in)
- Responsive design (mobile-friendly)
- Application form with Google Sheets integration
- Auto-confirmation email via Google Apps Script (GmailApp)

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deployment

Push to `main` branch triggers automatic deployment via GitHub Actions.

```yaml
# .github/workflows/deploy.yml
on:
  push:
    branches: [main]
```

## Contact

- Twitter: [@VertexUTokyo](https://x.com/VertexUTokyo)
- Email: vertex.utokyo@gmail.com

## License

© 2026 Quant Finance at UTokyo. All rights reserved.
