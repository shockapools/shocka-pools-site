# Shocka Pools Website

Production-ready Astro marketing site for Shocka Pools with:

- Separate route files for Home, Services, About, Contact, Thank You, and service-area SEO pages
- Netlify Forms-ready quote request form
- Town-focused local SEO pages for Hilo, Pahoa, Keaau, Mountain View, Kurtistown, and Volcano
- Placeholder customer review cards clearly marked for replacement with real testimonials
- Placeholder before-and-after gallery structure clearly marked for replacement with real job photos
- Stylized East Hawaii service-area map graphic
- Sitemap and robots.txt support

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Netlify

1. Push this project to a GitHub repository.
2. In Netlify, choose **Add new project** -> **Import an existing project**.
3. Connect GitHub and select the repository.
4. Confirm these settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Deploy the site.
6. In Netlify, add the custom domain `shockapools.com`.
7. After the first deploy, submit the contact form once to confirm the form appears in the Netlify Forms dashboard.

## Replace before launch

- Swap review placeholders with real customer testimonials.
- Swap gallery placeholders with actual before-and-after photos.
- If you have an exact service radius or business address, add it to the schema.
