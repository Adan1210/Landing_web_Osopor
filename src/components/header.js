import { esc } from "../utils/html.js";
import { LOGO_URL } from "../data/productImages.js";
import { SUPPORTED_LANGS } from "../i18n/index.js";

function renderCompactLangButtons(currentLang) {
  return SUPPORTED_LANGS.map(
    (code) =>
      `<button class="lang-btn" data-lang="${code}" style="background:none;border:none;font-family:inherit;font-size:13px;font-weight:${
        code === currentLang ? "600" : "400"
      };line-height:1;cursor:pointer;padding:0;color:${
        code === currentLang ? "#001f3f" : "#4f5358"
      }">${code.toUpperCase()}</button>`
  ).join('<span class="language-separator" aria-hidden="true">/</span>');
}

// currentPage: "inicio" | "productos" | "soluciones" | "blog" | "contacto"
// (articulo.html uses "blog" so the Blog nav item stays highlighted there too)
export function renderHeader(t, currentLang, currentPage = "") {
  const desktopLangButtons = renderCompactLangButtons(currentLang);
  const mobileLangButtons = renderCompactLangButtons(currentLang);

  const navLink = (page, href, label, extra = "") => {
    const active = page === currentPage;
    return `<a href="${href}" class="nav-link header-nav-link" style="font-size:16px;color:${active ? "#001F3F" : "#5e5e5e"};${active ? "font-weight:600;" : ""}${extra}">${esc(label)}</a>`;
  };

  const mobileNavLink = (href, label) => {
    return `<a href="${href}" class="nav-link mobile-nav-link" style="font-family:inherit;font-size:18px;font-weight:400;color:#001F3F;padding:16px 20px;display:block;">${esc(label)}</a>`;
  };

  return `
    <header class="site-header" style="position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(247,247,245,0.92);backdrop-filter:blur(24px);border-bottom:1px solid rgba(231,231,228,0.4);">
      <div class="header-cubes" aria-hidden="true"></div>
      <div class="header-inner" style="max-width:1280px;margin:0 auto;padding:0 20px;display:flex;justify-content:space-between;align-items:center;height:72px;">
        <a href="index.html" class="header-logo-box"><img class="header-logo" alt="Osopor Logo" src="${LOGO_URL}"/></a>
        <nav class="main-nav" style="display:flex;gap:32px;align-items:center;">
          ${navLink("productos", "productos.html", t.nav.productos)}
          ${navLink("soluciones", "soluciones.html", t.nav.soluciones)}
          ${navLink("blog", "blog.html", t.nav.blog)}
        </nav>
        <div class="desktop-only" style="display:flex;align-items:center;gap:32px;">
          <div class="language-box" aria-label="Seleccionar idioma">
            ${desktopLangButtons}
          </div>
          <a href="contacto.html" style="background:#FF851B;color:#ffffff;padding:10px 32px;border-radius:9999px;border:none;font-size:12px;font-weight:600;letter-spacing:0.1em;cursor:pointer;">${esc(t.nav.contacto)}</a>
        </div>
        <div class="mobile-header-actions" style="display:none;align-items:center;">
          <div class="language-box mobile-language-box" aria-label="Seleccionar idioma">
            ${mobileLangButtons}
          </div>
          <button id="mobile-menu-btn" class="mobile-menu-btn" aria-label="Menu" aria-expanded="false" style="display:none;background:none;border:none;cursor:pointer;padding:8px;width:44px;height:44px;align-items:center;justify-content:center;">
            <span class="material-symbols-outlined" style="font-size:28px;">menu</span>
          </button>
        </div>
      </div>
      <nav id="mobile-nav" class="mobile-nav">
        ${mobileNavLink("productos.html", t.nav.productos)}
        ${mobileNavLink("soluciones.html", t.nav.soluciones)}
        ${mobileNavLink("blog.html", t.nav.blog)}
        ${mobileNavLink("contacto.html", t.nav.contacto)}
      </nav>
    </header>
  `;
}
