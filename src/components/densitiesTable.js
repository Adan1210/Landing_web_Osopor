import { esc } from "../utils/html.js";

function renderFeature(f) {
  return `
    <div style="display:flex;flex-direction:column;align-items:center;gap:8px;width:120px;">
      <span class="material-symbols-outlined" style="font-size:28px;color:#FF851B;border:2px solid #FF851B;border-radius:9999px;padding:10px;">${esc(f.icon)}</span>
      <span style="font-size:11px;font-weight:600;letter-spacing:0.05em;color:#001F3F;text-align:center;">${esc(f.label)}</span>
    </div>
  `;
}

function renderSectionRows(label, values) {
  return values
    .map(
      (value, index) => {
        const isFirst = index === 0;
        const isLast = index === values.length - 1;
        const labelStyles = "padding:20px 24px;font-size:13px;font-weight:800;color:#ffffff;background:#001F3F;border:2px solid #E7E7E4;vertical-align:middle;text-transform:uppercase;letter-spacing:0.14em;";
        const valueStyles = `padding:18px 20px;font-size:15px;color:#001F3F;background:${index % 2 ? "#ffffff" : "#fff2df"};border-right:1px solid #E7E7E4;border-bottom:1px solid #E7E7E4;${isFirst ? "border-top:2px solid #E7E7E4;" : ""}${isLast ? "border-bottom:2px solid #E7E7E4;" : ""}`;

        return `
          <tr>
            ${isFirst ? `<td rowspan="${values.length}" style="${labelStyles}">${esc(label)}</td>` : ""}
            <td style="${valueStyles}">${esc(value)}</td>
          </tr>
        `;
      }
    )
    .join("");
}

function renderSpecCard(card) {
  return `
    <div style="flex:1;min-width:320px;border:2px solid #E7E7E4;border-radius:1.5rem;overflow:hidden;background:#ffffff;box-shadow:0 20px 40px rgba(0,31,63,0.06);">
      <div style="background:#FF851B;padding:28px 32px;border-bottom:2px solid #E7E7E4;">
        <h2 style="font-size:26px;line-height:1.15;letter-spacing:-0.02em;font-weight:800;color:#ffffff;margin:0;text-transform:uppercase;">${esc(card.title)}</h2>
      </div>
      <div style="padding:32px;display:flex;flex-direction:column;gap:32px;">
        <div style="display:flex;flex-wrap:wrap;gap:16px;justify-content:center;">
          ${card.features.map(renderFeature).join("")}
        </div>
        <table style="width:100%;border-collapse:collapse;border:2px solid #E7E7E4;">
          <tbody>
            ${renderSectionRows(card.densitiesLabel, card.densities)}
            ${renderSectionRows(card.dimensionsLabel, card.dimensions)}
            ${renderSectionRows(card.presentationsLabel, card.presentations)}
          </tbody>
        </table>
        <p style="margin:0;font-size:13px;color:#8a8a8a;line-height:1.6;">${esc(card.note)}</p>
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
