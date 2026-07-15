import { esc } from "../utils/html.js";

function renderFaqItem(f) {
  return `
    <details style="border-bottom:1px solid #E7E7E4;padding:24px 0;">
      <summary style="font-size:20px;font-weight:600;letter-spacing:-0.02em;color:#1b1b1b;cursor:pointer;list-style:none;display:flex;justify-content:space-between;align-items:center;gap:16px;">${esc(f.q)}<span class="material-symbols-outlined" style="color:#FF851B;flex-shrink:0;">add</span></summary>
      <p style="font-size:16px;line-height:1.6;color:#5e5e5e;margin:16px 0 0 0;max-width:640px;">${esc(f.a)}</p>
    </details>
  `;
}

export function renderFaq(t) {
  const items = t.faq.items.map(renderFaqItem).join("");
  return `
    <section id="faq" style="padding:120px 0;background:#ffffff;">
      <div class="faq-grid" style="max-width:1280px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:4fr 8fr;gap:64px;align-items:start;">
        <h2 style="font-size:48px;line-height:1.15;letter-spacing:-0.03em;font-weight:600;color:#001F3F;margin:0;position:sticky;top:104px;">${esc(t.faq.h2)}</h2>
        <div style="display:flex;flex-direction:column;">
          ${items}
        </div>
      </div>
    </section>
  `;
}
