# Portfolio

A static React + Vite portfolio, built to run on the AWS free tier (S3 + CloudFront),
with serverless hooks for a contact form (Lambda + SES) and a visitor counter
(Lambda + DynamoDB).

## Quick start

```bash
npm install
npm run dev        # local dev server (http://localhost:5173)
npm run build      # production build -> dist/
npm run preview    # preview the production build locally
```

## Editing content

Almost everything lives in **`src/data/content.js`** — name, role, tagline, socials,
about paragraphs, skills, and projects. Edit that one file first.

Other touch points:
- Resume: lives at `public/Nicholas_Muchelemba_Resume.pdf` (linked via `profile.resumeUrl`).
- Favicon / colors: `public/favicon.svg` and the `:root` tokens in `src/index.css`.

## Project structure

```
src/
  data/content.js      ← all editable copy lives here
  lib/api.js           ← fetch wrappers for the Lambda endpoints
  components/          ← Nav, Hero, About, Experience, Skills, Credentials, Contact, Footer
  index.css            ← single stylesheet (design tokens at the top)
public/                ← static assets copied as-is (favicon, resume.pdf)
```

## Backend wiring (optional, free tier)

The UI works with **no backend** — the contact form falls back to a `mailto:` link
and the visitor counter simply hides itself. To enable the real endpoints, deploy two
Lambdas behind API Gateway and set the base URL:

```bash
cp .env.example .env.local
# then set VITE_API_BASE_URL=https://<api-id>.execute-api.<region>.amazonaws.com/prod
```

Expected endpoints (see `src/lib/api.js`):

| Method | Path        | Lambda does                              | Response          |
| ------ | ----------- | ---------------------------------------- | ----------------- |
| POST   | `/visits`   | increment + read counter in DynamoDB     | `{ "count": n }`  |
| POST   | `/contact`  | send `{name,email,message}` via SES      | `200` on success  |

## Deploy to AWS

```
Browser → CloudFront (CDN, HTTPS) → S3 (this dist/)
                ↓
           API Gateway → Lambda → DynamoDB (visits)
                              └──→ SES (contact)
```

1. Build: `npm run build`
2. Sync to S3 + invalidate CloudFront cache:
   ```bash
   export PORTFOLIO_BUCKET=your-bucket
   export PORTFOLIO_CF_ID=your-distribution-id
   npm run deploy
   ```
   (`deploy` runs `aws s3 sync ./dist ... --delete` then a CloudFront invalidation.)
3. Point CloudFront's default root object to `index.html`; for SPA-style routing add a
   403/404 → `/index.html` error mapping (not required for this single-page layout).

The Lambda/API Gateway/DynamoDB/SES resources are not in this repo yet — when you're
ready, add them as infrastructure-as-code (CDK or SAM) so the whole stack is reproducible.
```
