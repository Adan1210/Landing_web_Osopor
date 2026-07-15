import { esc } from "../utils/html.js";
import { INSULATION_IMG } from "../data/productImages.js";

export function renderInsulation(t) {
  return `
    <section id="aislamiento" style="padding:120px 0;background:#f9f9f9;">
      <div style="max-width:1280px;margin:0 auto;padding:0 32px;">
        <div class="insulation-grid" style="display:grid;grid-template-columns:5fr 7fr;gap:96px;align-items:center;">
          <div style="display:flex;flex-direction:column;gap:48px;">
            <div style="display:flex;flex-direction:column;gap:24px;">
              <h2 style="font-size:48px;line-height:1.15;letter-spacing:-0.03em;font-weight:600;color:#000000;margin:0;">${esc(t.insulation.h2)}</h2>
              <p style="font-size:18px;line-height:1.6;letter-spacing:-0.01em;color:#5e5e5e;margin:0;">${esc(t.insulation.body)}</p>
            </div>
            <div style="display:flex;flex-direction:column;gap:32px;">
              <div style="background:#ffffff;padding:24px;border-radius:1rem;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);border:1px solid #E7E7E4;">
                <h4 style="font-size:20px;font-weight:600;margin:0 0 12px 0;display:flex;align-items:center;gap:12px;"><span class="material-symbols-outlined" style="color:#FF851B;">ac_unit</span> ${esc(t.insulation.card1title)}</h4>
                <p style="font-size:16px;color:#5e5e5e;margin:0;">${esc(t.insulation.card1desc)}</p>
              </div>
              <div style="background:#ffffff;padding:24px;border-radius:1rem;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);border:1px solid #E7E7E4;">
                <h4 style="font-size:20px;font-weight:600;margin:0 0 12px 0;display:flex;align-items:center;gap:12px;"><span class="material-symbols-outlined" style="color:#FF851B;">home_work</span> ${esc(t.insulation.card2title)}</h4>
                <p style="font-size:16px;color:#5e5e5e;margin:0;">${esc(t.insulation.card2desc)}</p>
              </div>
            </div>
          </div>
          <div style="position:relative;height:500px;border-radius:3rem;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);">
            <img alt="Detalle macro de perlas de tecnopor de alta densidad" style="width:100%;height:100%;object-fit:cover;" src="${INSULATION_IMG}"/>
            <div style="position:absolute;inset:0;background:linear-gradient(to top, rgba(0,31,63,0.6), transparent);display:flex;align-items:flex-end;padding:48px;">
              <div style="color:#ffffff;">
                <p style="font-size:32px;font-weight:700;letter-spacing:-0.02em;margin:0;">${esc(t.insulation.statTemp)}</p>
                <p style="font-size:12px;font-weight:600;letter-spacing:0.1em;opacity:0.8;margin:4px 0 0 0;">${esc(t.insulation.statLabel)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `;
}
