import { esc } from "../utils/html.js";
import { HERO_IMG } from "../data/productImages.js";

export function renderHero(t) {
  return `
    <section class="hero-section" style="position:relative;min-height:90vh;display:flex;align-items:center;overflow:hidden;">
      <div style="position:absolute;top:-20%;left:-10%;width:600px;height:600px;background:radial-gradient(circle, rgba(59,130,246,0.08) 0%, rgba(255,255,255,0) 70%);z-index:0;"></div>
      <div class="hero-grid" style="max-width:1280px;margin:0 auto;padding:100px 32px;display:grid;grid-template-columns:repeat(12,1fr);gap:32px;align-items:center;position:relative;z-index:1;width:100%;">
        <div class="hero-copy" style="grid-column:span 7;display:flex;flex-direction:column;gap:32px;">
          <span style="display:inline-block;width:fit-content;padding:4px 12px;background:rgba(255,133,27,0.1);color:#FF851B;border-radius:9999px;font-size:12px;font-weight:600;letter-spacing:0.1em;">${esc(t.hero.badge)}</span>
          <h1 class="hero-title" style="font-size:64px;line-height:1.1;letter-spacing:-0.03em;font-weight:600;color:#001F3F;margin:0;">${esc(t.hero.titlePre)} <span style="color:#FF851B;">${esc(t.hero.titleAccent)}</span> ${esc(t.hero.titlePost)}</h1>
          <p style="font-size:18px;line-height:1.6;letter-spacing:-0.01em;color:#5e5e5e;max-width:560px;margin:0;">${esc(t.hero.body)}</p>
          <div style="display:flex;flex-wrap:wrap;gap:16px;padding-top:16px;">
            <a href="productos.html" class="btn-primary hero-cta" style="background:#000000;color:#ffffff;padding:16px 32px;border-radius:9999px;font-size:12px;font-weight:600;letter-spacing:0.1em;">${esc(t.hero.cta1)}</a>
            <a href="contacto.html" class="btn-secondary hero-cta" style="border:1px solid #E7E7E4;color:#1b1b1b;padding:16px 32px;border-radius:9999px;font-size:12px;font-weight:600;letter-spacing:0.1em;">${esc(t.hero.cta2)}</a>
          </div>
        </div>
        <div class="hero-image-wrap" style="grid-column:span 5;position:relative;height:600px;">
          <div style="position:absolute;inset:0;border-radius:2rem;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,0,0,0.25);border:1px solid rgba(255,255,255,0.5);">
            <img alt="Almacén industrial de Osopor con bloques de EPS en Chiclayo" style="width:100%;height:100%;object-fit:cover;" src="${HERO_IMG}"/>
          </div>
          <div class="hero-stat-card" style="position:absolute;bottom:-32px;left:-32px;background:rgba(255,255,255,0.4);backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.5);padding:32px;border-radius:1rem;box-shadow:0 10px 15px -3px rgba(0,0,0,0.1);border-left:4px solid #FF851B;max-width:280px;">
            <p style="font-size:24px;font-weight:700;letter-spacing:-0.02em;color:#000000;margin:0 0 4px 0;">${esc(t.hero.stat)}</p>
            <p style="font-size:12px;font-weight:600;letter-spacing:0.1em;color:#5e5e5e;margin:0;">${esc(t.hero.statLabel)}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
