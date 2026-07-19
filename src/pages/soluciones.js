import "../styles.css";
import { TRANSLATIONS, getLang } from "../i18n/index.js";
import { renderHeader } from "../components/header.js";
import { renderConstruction } from "../components/construction.js";
import { renderInsulation } from "../components/insulation.js";
import { renderFooter } from "../components/footer.js";
import { renderWhatsappButton } from "../components/whatsappButton.js";
import { attachCommonListeners } from "../components/pageShell.js";

function render(root) {
  const lang = getLang();
  const t = TRANSLATIONS[lang];

  root.innerHTML = `
    <div style="background:#F7F7F5;color:#001F3F;min-height:100vh;display:flex;flex-direction:column;">
      ${renderHeader(t, lang, "soluciones")}
      <main style="padding-top:72px;flex:1;">
        ${renderConstruction(t)}
        ${renderInsulation(t)}
      </main>
      ${renderFooter(t)}
      ${renderWhatsappButton(t)}
    </div>
  `;

  attachCommonListeners(t, () => render(root));
}

export function mount(root = document.getElementById("app")) {
  render(root);
}

mount();
