# Comfort Penguins

A cozy static website for Comfort Penguins built for GitHub Pages.

## Structure

- `index.html` - homepage with product story, feature cards, and embedded waitlist
- `survey.html` - embedded customer feedback survey
- `thank-you.html` - thank-you fallback page with the Comfort Penguin celebration
- `css/styles.css` - shared styles
- `js/main.js` - page behavior and Formspace submit success handling
- `js/confetti.js` - full-screen lavender, heart, circle, and penguin confetti
- `js/penguins.js` - three-penguin waddle animation
- `assets/images/` - product image assets
- `assets/icons/` - favicon and brand icons
- `data/products.json` - source of truth for shopping catalog product data
- `scripts/generate-product-feed.py` - generates the shared shopping feed from active products
- `product-feed.xml` - generated RSS/XML product feed for shopping platforms
- `_headers` - Cloudflare static header rules for the product feed
- `.github/workflows/build-product-feed.yml` - regenerates the feed when product data changes
- `robots.txt` - crawler access rules and sitemap location
- `sitemap.xml` - canonical page list for search engines
- `llms.txt` - concise AI-readable brand and product summary
- `CNAME` - custom domain for GitHub Pages

## Custom Domain

This site is configured for:

```text
comfortpenguins.com
```

After pushing to GitHub, enable GitHub Pages for the repository and set the custom domain to `comfortpenguins.com`.

## Forms

The waitlist and survey remain embedded through Formspace, so visitors stay on the Comfort Penguin website.

## Shopping Feed

The shared shopping feed is available at:

```text
https://comfortpenguins.com/product-feed.xml
```

Product data is maintained in `data/products.json`. Only products with `"active": true` are included in the feed. The current plush is intentionally marked inactive until there is a real visible price, availability, product page, and shipping information.

## Local Preview

Open `index.html` directly in a browser, or serve the folder with any simple static server. No build step is required.
