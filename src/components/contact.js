import { esc } from "../utils/html.js";

function renderContactItem(c) {
  return `
    <div style="display:flex;align-items:flex-start;gap:24px;">
      <div style="width:48px;height:48px;background:rgba(255,133,27,0.1);border-radius:9999px;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
        <span class="material-symbols-outlined" style="color:#FF851B;">${c.icon}</span>
      </div>
      <div>
        <h4 style="font-size:16px;font-weight:700;letter-spacing:-0.02em;margin:0 0 4px 0;">${esc(c.title)}</h4>
        <p style="font-size:16px;color:#5e5e5e;margin:0;white-space:pre-line;">${esc(c.desc)}</p>
      </div>
    </div>
  `;
}

export function renderContact(t) {
  const items = t.contact.items.map(renderContactItem).join("");
  const options = t.contact.form.servicioOptions
    .map((so) => `<option>${esc(so.label)}</option>`)
    .join("");

  return `
    <section style="padding:100px 0 120px 0;background:#F7F7F5;">
      <div class="contact-grid" style="max-width:1280px;margin:0 auto;padding:0 32px;display:grid;grid-template-columns:1fr 1fr;gap:96px;">
        <div style="display:flex;flex-direction:column;gap:48px;">
          <div style="display:flex;flex-direction:column;gap:24px;">
            <h1 class="page-title" style="font-size:48px;line-height:1.15;letter-spacing:-0.03em;font-weight:600;color:#000000;margin:0;">${esc(t.contact.h2)}</h1>
            <p style="font-size:18px;line-height:1.6;letter-spacing:-0.01em;color:#5e5e5e;margin:0;">${esc(t.contact.body)}</p>
          </div>
          <div style="display:flex;flex-direction:column;gap:32px;">
            ${items}
          </div>
        </div>
        <div class="contact-form" style="background:#FCFCFB;padding:48px;border-radius:2rem;border:1px solid #E7E7E4;box-shadow:0 1px 2px 0 rgba(0,0,0,0.05);">
          <form id="contact-form" style="display:flex;flex-direction:column;gap:24px;">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
              <div>
                <label style="font-size:12px;font-weight:600;letter-spacing:0.1em;display:block;margin-bottom:8px;color:#5e5e5e;">${esc(t.contact.form.nombre)}</label>
                <input type="text" placeholder="${esc(t.contact.form.nombrePlaceholder)}" style="width:100%;background:#f9f9f9;border:none;border-radius:0.75rem;padding:16px;outline:none;font-family:'Geist',sans-serif;font-size:16px;"/>
              </div>
              <div>
                <label style="font-size:12px;font-weight:600;letter-spacing:0.1em;display:block;margin-bottom:8px;color:#5e5e5e;">${esc(t.contact.form.apellido)}</label>
                <input type="text" placeholder="${esc(t.contact.form.apellidoPlaceholder)}" style="width:100%;background:#f9f9f9;border:none;border-radius:0.75rem;padding:16px;outline:none;font-family:'Geist',sans-serif;font-size:16px;"/>
              </div>
            </div>
            <div>
              <label style="font-size:12px;font-weight:600;letter-spacing:0.1em;display:block;margin-bottom:8px;color:#5e5e5e;">${esc(t.contact.form.correo)}</label>
              <input type="email" placeholder="jperez@empresa.com" style="width:100%;background:#f9f9f9;border:none;border-radius:0.75rem;padding:16px;outline:none;font-family:'Geist',sans-serif;font-size:16px;"/>
            </div>
            <div>
              <label style="font-size:12px;font-weight:600;letter-spacing:0.1em;display:block;margin-bottom:8px;color:#5e5e5e;">${esc(t.contact.form.servicio)}</label>
              <select style="width:100%;background:#f9f9f9;border:none;border-radius:0.75rem;padding:16px;outline:none;font-family:'Geist',sans-serif;font-size:16px;appearance:none;">
                ${options}
              </select>
            </div>
            <div>
              <label style="font-size:12px;font-weight:600;letter-spacing:0.1em;display:block;margin-bottom:8px;color:#5e5e5e;">${esc(t.contact.form.mensaje)}</label>
              <textarea rows="4" placeholder="${esc(t.contact.form.mensajePlaceholder)}" style="width:100%;background:#f9f9f9;border:none;border-radius:0.75rem;padding:16px;outline:none;font-family:'Geist',sans-serif;font-size:16px;resize:vertical;"></textarea>
            </div>
            <button type="button" id="submit-btn" class="submit-btn" style="width:100%;background:#000000;color:#ffffff;padding:20px;border-radius:0.75rem;border:none;font-size:12px;font-weight:600;letter-spacing:0.1em;cursor:pointer;">${esc(t.contact.form.submit)}</button>
          </form>
        </div>
      </div>
    </section>
  `;
}
