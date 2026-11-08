# Vercel deployment and domain setup

## 1. Prepare the code

1. Extract the project ZIP.
2. Open the project folder in VS Code.
3. Run `npm install`.
4. Run `npm run dev` and check the site at `http://localhost:3000`.
5. Run `npm run build` before deploying.

## 2. Push to GitHub

Create a private or public GitHub repository, then:

```bash
git init
git add .
git commit -m "Build Elite Perimeter local SEO website"
git branch -M main
git remote add origin https://github.com/YOUR-ACCOUNT/YOUR-REPOSITORY.git
git push -u origin main
```

Replace the repository URL with the real one you create.

## 3. Deploy to Vercel

1. Sign in to Vercel.
2. Choose **Add New → Project**.
3. Import the GitHub repository.
4. Framework should be detected as Next.js.
5. Set the environment variable:
   - `NEXT_PUBLIC_SITE_URL` = the final production HTTPS domain.
6. Deploy.

Vercel creates a `*.vercel.app` URL for deployment. You may use it for preview/testing. For a public business website, connect a custom domain the salon owns and use that as the canonical domain.

## 4. Connect the custom domain

1. Buy/own the chosen domain first. Suggested brand-first candidates: `eliteperimeter.in`, `eliteperimetersalon.in` or `eliteperimeter.com` (availability not checked).
2. In Vercel, open the project → Settings → Domains.
3. Add the domain and follow the exact DNS instructions Vercel displays.
4. If DNS is hosted at Hostinger or another provider, add the A/CNAME records Vercel requests. Do not copy guessed DNS records from an old tutorial; values can change.
5. Wait until Vercel verifies the domain and issues HTTPS.
6. Set `NEXT_PUBLIC_SITE_URL` to the final canonical version (for example `https://your-domain.in`) and redeploy.
7. Choose one canonical host (apex or `www`) and redirect the other to it.

Vercel domain guide: https://vercel.com/docs/domains/set-up-custom-domain

## 5. Google Search Console

1. Add the domain property to Google Search Console.
2. Verify ownership using the DNS TXT record Google gives you.
3. Submit `https://YOUR-DOMAIN/sitemap.xml`.
4. Inspect the homepage, `/services/`, key service pages and `/location/ullal/`.
5. Request indexing only after the page is final, useful and publicly accessible.
6. Check Page indexing reports for errors and exclusions.

Search Console docs: https://developers.google.com/search/docs/monitor-debug/search-console-start

## 6. Update Google Business Profile

1. Confirm this is the correct, non-duplicate profile for the salon.
2. Confirm business name, address, map pin and real opening hours.
3. Update the Website field to the final custom HTTPS domain.
4. If the GBP has a menu/services link field, use the real `/services/` page.
5. Do not change the business name to insert keywords.

## 7. Launch checks

- Home page loads on mobile and desktop.
- Every service page opens and has a unique title, H1 and description.
- Canonical tags point to the custom domain, not localhost or Vercel preview URLs.
- `/sitemap.xml` lists only indexable pages.
- `Botox Spa` and `Hyder Facial` remain noindex until confirmed.
- `robots.txt` references the production sitemap.
- Phone click opens the phone dialler.
- Directions link opens the correct map search.
- Hours match the real operating hours and GBP.
- Website uses real images and has client permission for identifiable customers/staff.
