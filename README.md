# Sean Hewitson — portfolio

A one-page, statically generated Astro portfolio. No client-side framework is shipped; the only browser script handles the screenshot dialog, print button, and colour theme preference.

## Local development

Requires Node.js 24.x (also selected for Vercel through package.json).

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Editing

- `src/data/portfolio.ts`: employment, technologies, and packages.
- `src/pages/index.astro`: page content, project links, metadata, and small interactions.
- `src/styles/global.css`: responsive layout and résumé print styles.
- `public/images`: optimised WebP project screenshots.

Use **Print / save résumé** in the Experience section to open the browser's print dialog. The print stylesheet produces an employment-and-skills résumé, with name and contact information.

## Content provenance

Reviewed on 22 September 2026.

- Existing biography, social links, employment dates and achievements, packages, and bot projects: https://seanhewitson.com.
- Bixo renamed to TV tiempo, and LootLink marked retired without a live link, per Sean's instructions.
- Bookahead description: https://www.bookahead.co.uk and the existing Bookahead source.
- Technologies verified against local Bookahead booking-app/platform/data and TV tiempo package manifests, along with technologies on the original portfolio. Tools listed do not imply a particular proficiency rating.
- TV tiempo and Bookahead main screenshots captured from their public websites. Bookahead storefront screenshot reused from the existing marketing project's `public/screenshots/storefront-desktop.png`.
- Employment dates are retained from the existing portfolio, including Instinct Digital's current position.

The production canonical origin is `https://seanhewitson.com`. Keep `astro.config.mjs`, page canonical/schema/Open Graph URLs, and `public/robots.txt` aligned if the domain changes.

## Deployment

`npm run build` outputs static files in `dist/`, suitable for static hosting. Configure your hosting provider to run `npm run build` and publish `dist/`. The site needs no server runtime or environment variables.

## Colour themes

The header offers Light, Dark, and System. System is the default and responds live to operating-system changes. Explicit preferences persist in localStorage and sync across tabs. An early head script resolves the theme before the page renders; storage restrictions fall back gracefully. Print styles always use a light palette.
