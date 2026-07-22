import { esc } from "../utils/html.js";
import { LOGO_URL } from "../data/productImages.js";

function footerContent(t) {
  return `
    <footer class="site-footer">
      <div class="footer-cubes" aria-hidden="true"></div>
      <div class="footer-inner">
        <div class="footer-brand">
          <img class="footer-logo" src="${LOGO_URL}" alt="${esc(t.footer.name)}" />
          <p class="footer-copyright">${esc(t.footer.copyright)}</p>
        </div>
        <div class="footer-address">
          <span class="material-symbols-outlined" style="font-size:20px;color:#FF851B;flex-shrink:0;">location_on</span>
          <span style="font-size:13px;line-height:1.5;letter-spacing:0.02em;">${esc(t.footer.address)}</span>
        </div>
      </div>
    </footer>
  `;
}

export function renderFooter(t) {
  return footerContent(t);
}

export function renderFooterHome(t) {
  return footerContent(t);
}
