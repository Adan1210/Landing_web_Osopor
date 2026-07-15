import "../styles.css";
import { TRANSLATIONS, getLang } from "../i18n/index.js";
import { renderHeader } from "../components/header.js";
import { renderHero } from "../components/hero.js";
import { renderFaq } from "../components/faq.js";
import { renderFooterHome } from "../components/footer.js";
import { renderWhatsappButton } from "../components/whatsappButton.js";
import { attachCommonListeners } from "../components/pageShell.js";

function render(root) {
  const lang = getLang();
  const t = TRANSLATIONS[lang];

  root.innerHTML = `
    <div style="background:#F7F7F5;color:#1b1b1b;min-height:100vh;display:flex;flex-direction:column;">
      ${renderHeader(t, lang, "inicio")}
      <main style="padding-top:72px;flex:1;">
        ${renderHero(t)}
        ${renderFaq(t)}
      </main>
      ${renderFooterHome(t)}
      ${renderWhatsappButton(t)}
    </div>
  `;

  attachCommonListeners(t, () => render(root));
}

export function mount(root = document.getElementById("app")) {
  render(root);
}

mount();
