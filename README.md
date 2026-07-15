# Osopor Landing

Marketing site for Osopor S.A.C., a Peruvian manufacturer of expanded polystyrene (EPS/Tecnopor) products for construction, thermal insulation, and light concrete.

Built as a **static multi-page site** with Vite + vanilla JavaScript — no framework, no runtime dependencies in production, just plain ES modules that render HTML strings into the DOM, one entry per page.

## Pages

| Page | Entry HTML | Entry JS |
|---|---|---|
| Inicio (hero + FAQ) | `index.html` | `src/pages/inicio.js` |
| Productos | `productos.html` | `src/pages/productos.js` |
| Soluciones (construcción + aislamiento) | `soluciones.html` | `src/pages/soluciones.js` |
| Blog (índice, con filtro por categoría) | `blog.html` | `src/pages/blog.js` |
| Artículo (`?post=<slug>`) | `articulo.html` | `src/pages/articulo.js` |
| Contacto (formulario + mapa) | `contacto.html` | `src/pages/contacto.js` |

## Features

- **Multi-language**: Spanish (default), English, and Chinese. All copy lives in JSON files under `src/i18n/`. The chosen language is persisted in `localStorage` (`osopor-lang`) so it survives navigation between pages.
- **Blog**: 5 technical articles (multilingual) driven by `src/data/blogPosts.js`, with category filtering on the index and a shared article template with SEO meta/JSON-LD injected per post.
- **WebP images**: all photography ships as WebP, reused across the homepage, product cards, solutions page and blog thumbnails — no new image assets were needed for this iteration.
- **No backend**: the contact form is a static demo (submit shows an alert); wire it up to a real endpoint or form service before going live.

## Project structure

```
index.html, productos.html, soluciones.html, blog.html, articulo.html, contacto.html   Vite multi-page entry HTML
src/
  pages/            One entry module per page (mounts + re-renders on language change)
    inicio.js, productos.js, soluciones.js, blog.js, articulo.js, contacto.js
  components/        Shared render functions, one per UI section — each takes the
                      active translation object (t) and returns an HTML string
    header.js         Sticky nav + language switcher (multi-page aware, highlights current page)
    hero.js
    faq.js            FAQ accordion (Inicio)
    products.js        Product grid (Productos)
    construction.js, insulation.js   Solutions page sections
    contact.js          Contact info + the (static) inquiry form
    locationMap.js       Embedded Google Maps iframe + "view on Google Maps" link
    blogCard.js          Featured/grid/related blog card renderers
    articleBody.js       Renders an article's rich-text body blocks (h2/p/ul/stat)
    footer.js            Address-based footer (renderFooter, and renderFooterHome for Inicio)
    whatsappButton.js     Floating WhatsApp CTA
    pageShell.js          Shared listeners: mobile menu, language switch, demo form submit
  data/
    productImages.js     Central place where every image asset is imported and re-exported
    blogPosts.js          The 5 blog posts (multilingual body content) + getPost()/formatDate()
  assets/images/         The actual WebP image files, bundled and content-hashed by Vite
  i18n/
    es.json / en.json / zh.json   Full copy for each language — same shape, translated values
    index.js              Aggregates the three JSON files into TRANSLATIONS + CATEGORIES,
                            exposes SUPPORTED_LANGS/DEFAULT_LANG and getLang()/setLang()
  utils/
    html.js               `esc()` — escapes untrusted/dynamic strings before interpolating
                            them into template literals
```

## How rendering works

Each page's entry module (`src/pages/*.js`) is a small self-contained app:

1. Reads the current language via `getLang()` (falls back to Spanish).
2. Looks up the translation object: `TRANSLATIONS[lang]`.
3. Calls the relevant components' render functions, concatenates the returned HTML strings, and sets `#app`'s `innerHTML`.
4. Calls `attachCommonListeners()` (mobile menu, language buttons, demo form) plus any page-specific listeners (e.g. the blog's category filter buttons).

Switching language re-renders the current page in place (no navigation); switching page is a normal link/full navigation, which is why the language choice is persisted in `localStorage` rather than kept in memory.

Adding a new page means: adding an HTML entry file + `src/pages/<name>.js`, registering it in `vite.config.js`'s `rollupOptions.input`, and linking to it from `header.js`.

Adding a new language means adding a new `src/i18n/<code>.json` file with the same shape as `es.json`, then adding it to `TRANSLATIONS`/`CATEGORIES` in `src/i18n/index.js` — and adding the language's content to each post in `src/data/blogPosts.js`.

## Development

Requires Node.js (developed against Node 24 / npm 11, but any recent LTS should work).

```
npm install
npm run dev       # dev server with hot module reload, defaults to http://localhost:5173
npm run build     # production build, output in dist/
npm run preview   # serves the dist/ build locally, for a final sanity check before deploying
```

## Images

Source photography and the logo live in `src/assets/images/` as WebP. If you need to replace or add an image:

1. Drop the source file (PNG/JPG) somewhere convenient.
2. Convert it to WebP, e.g. with ffmpeg:
   ```
   ffmpeg -y -i source.png -pix_fmt yuva420p -c:v libwebp -quality 82 src/assets/images/name.webp
   ```
   Use `-pix_fmt yuva420p` for images that need transparency (like the logo) — without it, ffmpeg silently flattens the alpha channel.
3. Import it in `src/data/productImages.js` and reference it from there (don't hardcode paths in components).

## Deployment (Cloudflare Pages)

1. Connect this GitHub repository in the Cloudflare Pages dashboard.
2. Build settings:
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Root directory: `/` (project root)
3. No environment variables are required — the site is fully static.

## Known limitations

- The contact form has no backend; submitting it only shows a demo alert. Connect it to a form service (e.g. Cloudflare Pages Functions, Formspree) before launch.
- The blog's category filter is client-side only (re-renders the current page); there's no server-side pagination since there are only 5 posts.
