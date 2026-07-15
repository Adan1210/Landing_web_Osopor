import { esc } from "../utils/html.js";
import { PRODUCT_IMAGES } from "../data/productImages.js";

function renderProductCard(prod) {
  return `
    <div class="product-card" style="display:flex;flex-direction:column;border-radius:1.5rem;background:#f9f9f9;border:1px solid #E7E7E4;overflow:hidden;transition:border-color 0.3s;">
      <div style="height:220px;overflow:hidden;">
        <img alt="${esc(prod.title)}" style="width:100%;height:100%;object-fit:cover;" src="${PRODUCT_IMAGES[prod.imgIndex]}"/>
      </div>
      <div style="padding:32px;display:flex;flex-direction:column;gap:16px;">
        <h3 style="font-size:24px;font-weight:600;letter-spacing:-0.02em;margin:0;">${esc(prod.title)}</h3>
        <p style="font-size:16px;color:#5e5e5e;margin:0;">${esc(prod.desc)}</p>
        <ul style="list-style:none;margin:0;padding:0;display:flex;flex-direction:column;gap:8px;">
          <li style="display:flex;align-items:center;gap:8px;font-size:12px;font-weight:600;letter-spacing:0.1em;color:rgba(0,31,63,0.7);"><span class="material-symbols-outlined" style="font-size:16px;">check_circle</span> ${esc(prod.feat1)}</li>
          <li style="display:flex;align-items:center;gap:8px;font-size:12px;font-weight:600;letter-spacing:0.1em;color:rgba(0,31,63,0.7);"><span class="material-symbols-outlined" style="font-size:16px;">check_circle</span> ${esc(prod.feat2)}</li>
        </ul>
      </div>
    </div>
  `;
}

export function renderProducts(t) {
  const cards = t.products.items.map(renderProductCard).join("");
  return `
    <section style="padding:100px 0 120px 0;background:#ffffff;">
      <div style="max-width:1280px;margin:0 auto;padding:0 32px;">
        <div style="text-align:center;margin-bottom:80px;display:flex;flex-direction:column;gap:16px;align-items:center;">
          <h1 class="page-title" style="font-size:48px;line-height:1.1;letter-spacing:-0.03em;font-weight:600;color:#001F3F;margin:0;">${esc(t.products.heading)}</h1>
          <p style="font-size:18px;color:#5e5e5e;max-width:640px;margin:0;">${esc(t.products.sub)}</p>
        </div>
        <div class="products-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;">
          ${cards}
        </div>
        <div style="margin-top:80px;background:#001F3F;border-radius:2rem;padding:64px;display:flex;flex-wrap:wrap;gap:32px;align-items:center;justify-content:space-between;">
          <div style="display:flex;flex-direction:column;gap:12px;max-width:560px;">
            <h2 style="font-size:32px;line-height:1.2;letter-spacing:-0.02em;font-weight:600;color:#ffffff;margin:0;">${esc(t.blog.ctaTitle)}</h2>
            <p style="font-size:16px;line-height:1.6;color:rgba(255,255,255,0.75);margin:0;">${esc(t.blog.ctaBody)}</p>
          </div>
          <a href="contacto.html" class="cta-orange" style="background:#FF851B;color:#ffffff;padding:16px 36px;border-radius:9999px;font-size:12px;font-weight:600;letter-spacing:0.1em;flex-shrink:0;">${esc(t.blog.ctaBtn)}</a>
        </div>
      </div>
    </section>
  `;
}
