import { esc } from "../utils/html.js";

// Builds the plain-object "card" view model from a raw post entry.
export function toCard(post, lang, t, categories) {
  return {
    url: `articulo.html?post=${encodeURIComponent(post.slug)}`,
    img: post.img,
    title: post[lang].title,
    excerpt: post[lang].excerpt,
    catLabel: categories[post.cat] || post.cat,
  };
}

export function renderFeaturedCard(card, t) {
  return `
    <a href="${card.url}" class="featured-card" style="display:grid;grid-template-columns:7fr 5fr;border-radius:1.5rem;background:#ffffff;border:1px solid #E7E7E4;overflow:hidden;transition:border-color 0.3s;">
      <div class="featured-img" style="height:420px;overflow:hidden;">
        <img alt="${esc(card.title)}" style="width:100%;height:100%;object-fit:cover;" src="${card.img}"/>
      </div>
      <div style="padding:48px;display:flex;flex-direction:column;gap:20px;justify-content:center;">
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="padding:4px 12px;background:rgba(0,31,63,0.06);color:#001F3F;border-radius:9999px;font-size:11px;font-weight:600;letter-spacing:0.1em;">${esc(card.catLabel)}</span>
          <span style="font-size:12px;color:#5e5e5e;font-weight:600;letter-spacing:0.05em;">${card.meta}</span>
        </div>
        <h2 style="font-size:32px;line-height:1.2;letter-spacing:-0.02em;font-weight:600;color:#001F3F;margin:0;">${esc(card.title)}</h2>
        <p style="font-size:16px;line-height:1.6;color:#5e5e5e;margin:0;">${esc(card.excerpt)}</p>
        <span style="font-size:12px;font-weight:600;letter-spacing:0.1em;color:#FF851B;display:flex;align-items:center;gap:6px;">${esc(t.blog.readMore)} <span class="material-symbols-outlined" style="font-size:16px;">arrow_forward</span></span>
      </div>
    </a>
  `;
}

export function renderPostCard(card, t) {
  return `
    <a href="${card.url}" class="product-card" style="display:flex;flex-direction:column;border-radius:1.5rem;background:#ffffff;border:1px solid #E7E7E4;overflow:hidden;transition:border-color 0.3s;">
      <div style="height:220px;overflow:hidden;">
        <img alt="${esc(card.title)}" style="width:100%;height:100%;object-fit:cover;" src="${card.img}"/>
      </div>
      <div style="padding:32px;display:flex;flex-direction:column;gap:14px;flex:1;">
        <div style="display:flex;align-items:center;gap:12px;">
          <span style="padding:4px 12px;background:rgba(0,31,63,0.06);color:#001F3F;border-radius:9999px;font-size:11px;font-weight:600;letter-spacing:0.1em;">${esc(card.catLabel)}</span>
          <span style="font-size:12px;color:#5e5e5e;font-weight:600;letter-spacing:0.05em;">${card.meta}</span>
        </div>
        <h3 style="font-size:22px;line-height:1.25;letter-spacing:-0.02em;font-weight:600;color:#001F3F;margin:0;">${esc(card.title)}</h3>
        <p style="font-size:15px;line-height:1.6;color:#5e5e5e;margin:0;flex:1;">${esc(card.excerpt)}</p>
        <span style="font-size:12px;font-weight:600;letter-spacing:0.1em;color:#FF851B;display:flex;align-items:center;gap:6px;">${esc(t.blog.readMore)} <span class="material-symbols-outlined" style="font-size:16px;">arrow_forward</span></span>
      </div>
    </a>
  `;
}

// Compact card used in the "related articles" section on an article page.
export function renderRelatedCard(card) {
  return `
    <a href="${card.url}" style="display:flex;flex-direction:column;border-radius:1.5rem;background:#f9f9f9;border:1px solid #E7E7E4;overflow:hidden;transition:border-color 0.3s;">
      <div style="height:160px;overflow:hidden;">
        <img alt="${esc(card.title)}" style="width:100%;height:100%;object-fit:cover;" src="${card.img}"/>
      </div>
      <div style="padding:24px;display:flex;flex-direction:column;gap:10px;">
        <span style="font-size:11px;font-weight:600;letter-spacing:0.12em;color:#FF851B;text-transform:uppercase;">${esc(card.catLabel)}</span>
        <h3 style="font-size:18px;line-height:1.3;letter-spacing:-0.02em;font-weight:600;color:#001F3F;margin:0;">${esc(card.title)}</h3>
      </div>
    </a>
  `;
}
