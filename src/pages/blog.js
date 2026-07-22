import "../styles.css";
import { TRANSLATIONS, CATEGORIES, getLang } from "../i18n/index.js";
import { POSTS, formatDate } from "../data/blogPosts.js";
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { renderWhatsappButton } from "../components/whatsappButton.js";
import { attachCommonListeners } from "../components/pageShell.js";
import { toCard, renderFeaturedCard, renderPostCard } from "../components/blogCard.js";
import { esc } from "../utils/html.js";
import osoporBear from "../assets/images/osopor-oso-difuminado.png";

const CATEGORY_KEYS = ["construccion", "aislamiento", "productos", "guias"];

let filter = "all";

function withMeta(card, post, t, lang) {
  return { ...card, meta: `${formatDate(post.date, lang)} · ${post.read} ${t.blog.minRead}` };
}

function renderFilterButtons(t, cats) {
  const all = [{ key: "all", label: t.blog.all }].concat(
    CATEGORY_KEYS.map((k) => ({ key: k, label: cats[k] || k }))
  );
  return all
    .map((f) => {
      const active = f.key === filter;
      return `
        <button class="blog-filter-btn" data-filter="${f.key}" style="font-family:'Geist',sans-serif;font-size:12px;font-weight:600;letter-spacing:0.1em;padding:10px 24px;border-radius:9999px;cursor:pointer;border:1px solid ${active ? "#001F3F" : "#E7E7E4"};background:${active ? "#001F3F" : "transparent"};color:${active ? "#ffffff" : "#5e5e5e"};transition:all 0.2s;">${esc(f.label)}</button>
      `;
    })
    .join("");
}

function render(root) {
  const lang = getLang();
  const t = TRANSLATIONS[lang];
  const cats = CATEGORIES[lang];

  const visible = filter === "all" ? POSTS : POSTS.filter((p) => p.cat === filter);
  const featuredPost = filter === "all" && visible.length > 0 ? visible[0] : null;
  const gridPosts = featuredPost ? visible.slice(1) : visible;

  const featuredHtml = featuredPost
    ? renderFeaturedCard(withMeta(toCard(featuredPost, lang, t, cats), featuredPost, t, lang), t)
    : "";

  const cardsHtml = gridPosts
    .map((p) => renderPostCard(withMeta(toCard(p, lang, t, cats), p, t, lang), t))
    .join("");

  root.innerHTML = `
    <div style="background:#F7F7F5;color:#001F3F;min-height:100vh;display:flex;flex-direction:column;">
      ${renderHeader(t, lang, "blog")}
      <main style="padding-top:72px;flex:1;">
        <section style="padding:80px 0 40px 0;position:relative;overflow:hidden;min-height:360px;">
          <div style="position:absolute;top:-30%;right:-10%;width:500px;height:500px;background:radial-gradient(circle, rgba(255,133,27,0.07) 0%, rgba(255,255,255,0) 70%);"></div>
          <img src="${osoporBear}" class="decorative-image" alt="Oso Osopor" style="position:absolute;top:0;right:0;width:auto;max-width:760px;max-height:440px;object-fit:contain;opacity:0.55;pointer-events:none;" />
          <div style="position:absolute;inset:0;pointer-events:none;background:linear-gradient(90deg, rgba(247,247,245,1) 0%, rgba(247,247,245,0.95) 12%, rgba(247,247,245,0.8) 28%, rgba(247,247,245,0.45) 42%, rgba(247,247,245,0.18) 55%, rgba(247,247,245,0) 68%);"></div>
          <div style="max-width:1280px;margin:0 auto;padding:0 32px;position:relative;z-index:1;display:flex;flex-direction:column;gap:24px;justify-content:center;min-height:360px;">
            <span style="display:inline-block;width:fit-content;padding:4px 12px;background:rgba(255,133,27,0.1);color:#FF851B;border-radius:9999px;font-size:12px;font-weight:600;letter-spacing:0.1em;">OSOPOR · EPS</span>
            <h1 class="blog-hero-title" style="font-size:64px;line-height:1.1;letter-spacing:-0.03em;font-weight:600;color:#001F3F;margin:0;">${esc(t.blog.title)}</h1>
            <p style="font-size:18px;line-height:1.6;letter-spacing:-0.01em;color:#5e5e5e;max-width:640px;margin:0;">${esc(t.blog.sub)}</p>
          </div>
        </section>
        <section style="padding:0 0 100px 0;">
          <div style="max-width:1280px;margin:0 auto;padding:0 32px;display:flex;flex-direction:column;gap:32px;">
            <div id="blog-filters" style="display:flex;flex-wrap:wrap;gap:10px;border-top:1px solid #E7E7E4;padding-top:32px;">
              ${renderFilterButtons(t, cats)}
            </div>
            <div id="blog-featured">${featuredHtml}</div>
            <div id="blog-grid" class="blog-grid" style="display:grid;grid-template-columns:repeat(2,1fr);gap:32px;">
              ${cardsHtml}
            </div>
            <div style="background:#001F3F;border-radius:2rem;padding:64px;display:flex;flex-wrap:wrap;gap:32px;align-items:center;justify-content:space-between;">
              <div style="display:flex;flex-direction:column;gap:12px;max-width:560px;">
                <h2 style="font-size:32px;line-height:1.2;letter-spacing:-0.02em;font-weight:600;color:#ffffff;margin:0;">${esc(t.blog.ctaTitle)}</h2>
                <p style="font-size:16px;line-height:1.6;color:rgba(255,255,255,0.75);margin:0;">${esc(t.blog.ctaBody)}</p>
              </div>
              <a href="contacto.html" style="background:#FF851B;color:#ffffff;padding:16px 36px;border-radius:9999px;font-size:12px;font-weight:600;letter-spacing:0.1em;flex-shrink:0;">${esc(t.blog.ctaBtn)}</a>
            </div>
          </div>
        </section>
      </main>
      ${renderFooter(t)}
      ${renderWhatsappButton(t)}
    </div>
  `;

  attachCommonListeners(t, () => render(root));

  document.querySelectorAll(".blog-filter-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      filter = btn.dataset.filter;
      render(root);
    });
  });
}

export function mount(root = document.getElementById("app")) {
  render(root);
}

mount();
