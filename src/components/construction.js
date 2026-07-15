import { esc } from "../utils/html.js";
import { CONSTRUCTION_IMG } from "../data/productImages.js";

function renderBenefit(b) {
  return `
    <div style="display:flex;flex-direction:column;gap:12px;">
      <div style="display:flex;align-items:center;gap:12px;">
        <span class="material-symbols-outlined" style="color:#FF851B;">${b.icon}</span>
        <h4 style="font-size:18px;font-weight:700;letter-spacing:-0.02em;margin:0;">${esc(b.title)}</h4>
      </div>
      <p style="font-size:14px;color:rgba(255,255,255,0.6);margin:0;">${esc(b.desc)}</p>
    </div>
  `;
}

export function renderConstruction(t) {
  const benefits = t.construction.benefits.map(renderBenefit).join("");
  return `
    <section id="construccion" style="background:#001F3F;padding:120px 0;color:#ffffff;overflow:hidden;position:relative;">
      <div style="max-width:1280px;margin:0 auto;padding:0 32px;">
        <div class="construction-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:96px;align-items:center;">
          <div style="display:flex;flex-direction:column;gap:32px;">
            <span style="font-size:12px;font-weight:600;letter-spacing:0.1em;color:#FF851B;">${esc(t.construction.eyebrow)}</span>
            <h2 style="font-size:48px;line-height:1.15;letter-spacing:-0.03em;font-weight:600;color:#ffffff;margin:0;">${esc(t.construction.h2)}</h2>
            <p style="font-size:18px;line-height:1.6;color:rgba(255,255,255,0.8);margin:0;">${esc(t.construction.body)}</p>
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;padding-top:16px;">
              ${benefits}
            </div>
          </div>
          <div style="position:relative;">
            <div style="border-radius:2.5rem;overflow:hidden;aspect-ratio:1/1;border:8px solid rgba(255,255,255,0.05);">
              <img alt="Aplicación técnica de EPS en construcción" class="construction-img" style="width:100%;height:100%;object-fit:cover;filter:grayscale(1);transition:filter 0.7s;" src="${CONSTRUCTION_IMG}"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
