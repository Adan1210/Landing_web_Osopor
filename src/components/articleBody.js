import { esc } from "../utils/html.js";

function renderBlock(b) {
  if (b.t === "h2") {
    return `<h2 style="font-size:28px;line-height:1.25;letter-spacing:-0.02em;font-weight:600;color:#001F3F;margin:36px 0 8px 0;">${esc(b.x)}</h2>`;
  }
  if (b.t === "p") {
    return `<p style="font-size:17px;line-height:1.75;letter-spacing:-0.005em;color:#3a3a3a;margin:10px 0;">${esc(b.x)}</p>`;
  }
  if (b.t === "ul") {
    const items = b.x
      .map(
        (li) => `
          <li style="display:flex;align-items:flex-start;gap:12px;font-size:17px;line-height:1.6;color:#3a3a3a;">
            <span class="material-symbols-outlined" style="font-size:18px;color:#FF851B;margin-top:4px;flex-shrink:0;">check_circle</span>
            <span>${esc(li)}</span>
          </li>
        `
      )
      .join("");
    return `<ul style="list-style:none;margin:10px 0;padding:0;display:flex;flex-direction:column;gap:12px;">${items}</ul>`;
  }
  if (b.t === "stat") {
    return `
      <div style="background:#001F3F;border-radius:1.5rem;padding:40px;margin:24px 0;display:flex;flex-direction:column;gap:8px;">
        <p style="font-size:44px;font-weight:700;letter-spacing:-0.02em;color:#ffffff;margin:0;">${esc(b.n)}</p>
        <p style="font-size:12px;font-weight:600;letter-spacing:0.1em;color:#FF851B;margin:0;">${esc(b.l)}</p>
      </div>
    `;
  }
  return "";
}

export function renderArticleBody(blocks) {
  return blocks.map(renderBlock).join("");
}
