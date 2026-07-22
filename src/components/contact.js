import { esc } from "../utils/html.js";
import contactAdvisor from "../assets/images/contact-advisor.webp";

const CONTACT_LINKS = {
  home_work: { href: "https://maps.app.goo.gl/MhPppojozYP6gXLcA", external: true },
  call: { href: "tel:+51905461659" },
  mail: { href: "mailto:ventas@osopor.pe" },
};

function renderContactItem(c) {
  const link = CONTACT_LINKS[c.icon];
  const targetAttrs = link?.external ? ' target="_blank" rel="noopener noreferrer"' : "";

  return `
    <div style="display:flex;align-items:flex-start;gap:24px;">
      <a href="${link?.href ?? "#"}"${targetAttrs} class="contact-icon-link" aria-label="${esc(c.title)}" style="width:48px;height:48px;background:rgba(255,133,27,0.1);border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span class="material-symbols-outlined" style="color:#FF851B;">${c.icon}</span>
      </a>
      <div>
        <h4 style="font-size:16px;font-weight:700;letter-spacing:-0.02em;margin:0 0 4px 0;">${esc(c.title)}</h4>
        <p style="font-size:16px;color:#5e5e5e;margin:0;white-space:pre-line;">${esc(c.desc)}</p>
      </div>
    </div>
  `;
}

export function renderContact(t) {
  const items = t.contact.items.map(renderContactItem).join("");

  return `
    <section style="padding:88px 0;background:#f7f7f5;">
      <div class="contact-grid" style="max-width:1280px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:5fr 7fr;gap:72px;align-items:center;">
        <div style="display:flex;flex-direction:column;gap:48px;">
          <div style="display:flex;flex-direction:column;gap:24px;">
            <h1 class="page-title" style="font-size:48px;line-height:1.15;letter-spacing:-0.03em;font-weight:600;color:#001F3F;margin:0;">${esc(t.contact.h2)}</h1>
            <p style="font-size:18px;line-height:1.6;letter-spacing:-0.01em;color:#5e5e5e;margin:0;">${esc(t.contact.body)}</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:32px;">
            ${items}
          </div>
        </div>
        <div class="contact-advisor-wrap" style="height:400px;overflow:hidden;border-radius:2rem;">
          <img src="${contactAdvisor}" alt="Asesora comercial de Osopor junto a una solución de EPS" style="width:100%;height:100%;display:block;object-fit:cover;object-position:right center;" />
        </div>
      </div>
    </section>
  `;
}
