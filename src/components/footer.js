import { esc } from "../utils/html.js";

export function renderFooter(t) {
  return `
    <footer style="width:100%;background:#f9f9f9;border-top:1px solid #E7E7E4;">
      <div style="max-width:1280px;margin:0 auto;padding:64px 32px;display:flex;justify-content:space-between;align-items:center;gap:32px;flex-wrap:wrap;">
        <div style="display:flex;flex-direction:column;gap:12px;">
          <div style="font-size:24px;font-weight:600;letter-spacing:-0.02em;color:#001F3F;">${esc(t.footer.name)}</div>
          <p style="font-size:12px;font-weight:600;letter-spacing:0.1em;color:#626262;margin:0;">${esc(t.footer.copyright)}</p>
        </div>
        <div style="display:flex;align-items:center;gap:10px;color:#626262;max-width:360px;">
          <span class="material-symbols-outlined" style="font-size:20px;color:#FF851B;flex-shrink:0;">location_on</span>
          <span style="font-size:13px;line-height:1.5;letter-spacing:0.02em;">${esc(t.footer.address)}</span>
        </div>
      </div>
    </footer>
  `;
}

// Slightly taller variant used on the homepage (matches the original hero
// page's more spacious footer, which also shows the tagline).
export function renderFooterHome(t) {
  return `
    <footer style="width:100%;background:#f9f9f9;border-top:1px solid #E7E7E4;">
      <div style="max-width:1280px;margin:0 auto;padding:100px 32px;display:flex;justify-content:space-between;align-items:center;gap:32px;flex-wrap:wrap;">
        <div style="display:flex;flex-direction:column;gap:16px;">
          <div style="font-size:32px;font-weight:600;letter-spacing:-0.02em;color:#001F3F;">${esc(t.footer.name)}</div>
          <p style="font-size:12px;font-weight:600;letter-spacing:0.1em;color:#626262;margin:0;">${esc(t.footer.copyright)}</p>
          <p style="font-size:10px;color:rgba(94,94,94,0.5);text-transform:uppercase;letter-spacing:0.1em;margin:0;">${esc(t.footer.tagline)}</p>
        </div>
        <div style="display:flex;align-items:center;gap:10px;color:#626262;max-width:360px;">
          <span class="material-symbols-outlined" style="font-size:20px;color:#FF851B;flex-shrink:0;">location_on</span>
          <span style="font-size:13px;line-height:1.5;letter-spacing:0.02em;">${esc(t.footer.address)}</span>
        </div>
      </div>
    </footer>
  `;
}
