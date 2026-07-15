import { esc } from "../utils/html.js";

function renderChip(value) {
  return `<span style="display:inline-flex;align-items:center;background:#FFB733;color:#001F3F;font-weight:700;font-size:15px;padding:9px 18px;border-radius:9999px;">${esc(value)}</span>`;
}

function renderChipGroup(label, values) {
  return `
    <div style="display:flex;flex-direction:column;gap:16px;align-items:center;width:100%;">
      <h3 style="font-size:13px;font-weight:700;letter-spacing:0.1em;color:#FF851B;margin:0;">${esc(label)}</h3>
      <div style="display:flex;flex-wrap:wrap;gap:10px;justify-content:center;">
        ${values.map(renderChip).join("")}
      </div>
    </div>
  `;
}

function renderFeature(f) {
  return `
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;width:120px;">
      <span class="material-symbols-outlined" style="font-size:28px;color:#001F3F;border:2px solid #001F3F;border-radius:9999px;padding:10px;">${esc(f.icon)}</span>
      <span style="font-size:11px;font-weight:600;letter-spacing:0.05em;color:#001F3F;text-align:center;">${esc(f.label)}</span>
    </div>
  `;
}

function renderSpecCard(card) {
  return `
    <div style="flex:1;min-width:320px;border:1px solid #E7E7E4;border-radius:1.5rem;overflow:hidden;background:#ffffff;">
      <div style="background:#FF851B;padding:28px 32px;">
        <h2 style="font-size:26px;line-height:1.15;letter-spacing:-0.02em;font-weight:800;color:#ffffff;margin:0;text-transform:uppercase;">${esc(card.title)}</h2>
      </div>
      <div style="padding:32px;display:flex;flex-direction:column;gap:32px;align-items:center;text-align:center;">
        <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;">
          ${card.features.map(renderFeature).join("")}
        </div>
        ${renderChipGroup(card.densitiesLabel, card.densities)}
        ${renderChipGroup(card.dimensionsLabel, card.dimensions)}
        ${renderChipGroup(card.presentationsLabel, card.presentations)}
        <p style="margin:0;font-size:12px;color:#8a8a8a;">${esc(card.note)}</p>
      </div>
    </div>
  `;
}

export function renderDensitiesTable(t) {
  const cards = t.products.specCards.map(renderSpecCard).join("");
  return `
    <section style="padding:0 0 120px 0;background:#ffffff;">
      <div style="max-width:1280px;margin:0 auto;padding:0 32px;display:flex;flex-wrap:wrap;gap:32px;align-items:stretch;">
        ${cards}
      </div>
    </section>
  `;
}
