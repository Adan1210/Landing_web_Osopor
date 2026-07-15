import { esc } from "../utils/html.js";
import { LOGO_URL } from "../data/productImages.js";
import { SUPPORTED_LANGS } from "../i18n/index.js";

function renderLangButtons(currentLang, extraStyle = "") {
  return SUPPORTED_LANGS.map(
    (code) => `
      <button class="lang-btn" data-lang="${code}" style="background:none;border:none;font-size:12px;font-weight:700;letter-spacing:0.05em;cursor:pointer;padding:4px 2px;color:${
        code === currentLang ? "#1b1b1b" : "#5e5e5e"
      };${extraStyle}">${code.toUpperCase()}${code !== "zh" ? " /" : ""}</button>
    `
  ).join("");
}

// currentPage: "inicio" | "productos" | "soluciones" | "blog" | "contacto"
// (articulo.html uses "blog" so the Blog nav item stays highlighted there too)
export function renderHeader(t, currentLang, currentPage = "") {
  const desktopLangButtons = renderLangButtons(currentLang);
  const mobileLangButtons = renderLangButtons(currentLang, "font-size:14px;");

  const navLink = (page, href, label, extra = "") => {
    const active = page === currentPage;
    return `<a href="${href}" class="nav-link" style="font-size:16px;color:${active ? "#1b1b1b" : "#5e5e5e"};${active ? "font-weight:600;" : ""}${extra}">${esc(label)}</a>`;
  };

  const mobileNavLink = (page, href, label) => {
    const active = page === currentPage;
    return `<a href="${href}" class="nav-link mobile-nav-link" style="font-size:18px;color:#1b1b1b;padding:16px 24px;display:block;border-bottom:1px solid #E7E7E4;${active ? "font-weight:600;" : ""}">${esc(label)}</a>`;
  };

  return `
    <header style="position:fixed;top:0;left:0;right:0;z-index:50;background:rgba(247,247,245,0.85);backdrop-filter:blur(24px);border-bottom:1px solid rgba(231,231,228,0.4);">
      <div style="max-width:1280px;margin:0 auto;padding:0 20px;display:flex;justify-content:space-between;align-items:center;height:72px;">
        <a href="index.html" style="flex-shrink:0;display:flex;"><img alt="Osopor Logo" style="height:66px;width:auto;" src="${LOGO_URL}"/></a>
        <nav class="main-nav" style="display:flex;gap:32px;align-items:center;">
          ${navLink("productos", "productos.html", t.nav.productos)}
          ${navLink("soluciones", "soluciones.html", t.nav.soluciones)}
          ${navLink("blog", "blog.html", t.nav.blog)}
        </nav>
        <div class="desktop-only" style="display:flex;align-items:center;gap:32px;">
          <div style="display:flex;align-items:center;gap:10px;border-right:1px solid rgba(231,231,228,0.4);padding-right:32px;">
            ${desktopLangButtons}
          </div>
          <a href="contacto.html" style="background:#000000;color:#ffffff;padding:10px 32px;border-radius:9999px;border:none;font-size:12px;font-weight:600;letter-spacing:0.1em;cursor:pointer;">${esc(t.nav.contacto)}</a>
        </div>
        <button id="mobile-menu-btn" class="mobile-menu-btn" aria-label="Menu" aria-expanded="false" style="display:none;background:none;border:none;cursor:pointer;padding:8px;width:44px;height:44px;align-items:center;justify-content:center;">
          <span class="material-symbols-outlined" style="font-size:28px;">menu</span>
        </button>
      </div>
      <nav id="mobile-nav" class="mobile-nav">
        ${mobileNavLink("productos", "productos.html", t.nav.productos)}
        ${mobileNavLink("soluciones", "soluciones.html", t.nav.soluciones)}
        ${mobileNavLink("blog", "blog.html", t.nav.blog)}
        <a href="contacto.html" class="mobile-nav-link" style="font-size:18px;color:#1b1b1b;padding:16px 24px;display:block;border-bottom:1px solid #E7E7E4;font-weight:600;">${esc(t.nav.contacto)}</a>
        <div style="display:flex;align-items:center;gap:20px;padding:16px 24px;">
          ${mobileLangButtons}
        </div>
      </nav>
    </header>
  `;
}
