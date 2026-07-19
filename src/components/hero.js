import { esc } from "../utils/html.js";
import { HERO_IMAGES } from "../data/productImages.js";

const HERO_ROTATE_MS = 5000;
// Per-image watermark stroke opacity (index matches HERO_IMAGES). The
// warehouse-roof shot (last slide) needs a stronger stroke to read against
// its busy, high-contrast background.
const HERO_WATERMARK_OPACITY = [0.2, 0.2, 0.4];
let heroRotateTimer = null;

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
            <a href="productos.html" class="btn-primary hero-cta" style="background:#001F3F;color:#ffffff;padding:16px 32px;border-radius:9999px;font-size:12px;font-weight:600;letter-spacing:0.1em;">${esc(t.hero.cta1)}</a>
            <a href="contacto.html" class="btn-secondary hero-cta" style="background:#FF851B;color:#ffffff;border:1px solid #FF851B;padding:16px 32px;border-radius:9999px;font-size:12px;font-weight:600;letter-spacing:0.1em;">${esc(t.hero.cta2)}</a>
          </div>
        </div>
        <div class="hero-image-wrap" style="grid-column:span 5;position:relative;height:600px;">
          <div id="hero-rotator" style="position:absolute;inset:0;border-radius:2rem;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,31,63,0.25);border:1px solid rgba(255,255,255,0.5);">
            ${HERO_IMAGES.map(
              (src, i) => `
                <div class="hero-rotator-slide" style="position:absolute;inset:0;opacity:${i === 0 ? 1 : 0};transition:opacity 1s ease;">
                  <img alt="Almacén industrial de Osopor con bloques de EPS en Chiclayo" style="width:100%;height:100%;object-fit:cover;" src="${src}"/>
                  <span style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;transform:rotate(-28deg);font-size:72px;font-weight:700;letter-spacing:0.35em;text-transform:uppercase;color:transparent;-webkit-text-stroke:1.5px rgba(255,255,255,${HERO_WATERMARK_OPACITY[i] ?? 0.2});filter:blur(1px);pointer-events:none;user-select:none;white-space:nowrap;">Osopor</span>
                </div>
              `
            ).join("")}
          </div>
          <div class="hero-stat-card" style="position:absolute;bottom:-32px;left:-32px;background:rgba(255,255,255,0.4);backdrop-filter:blur(24px);border:1px solid rgba(255,255,255,0.5);padding:32px;border-radius:1rem;box-shadow:0 10px 15px -3px rgba(0,31,63,0.1);border-left:4px solid #FF851B;max-width:280px;">
            <p style="font-size:24px;font-weight:700;letter-spacing:-0.02em;color:#001F3F;margin:0 0 4px 0;">${esc(t.hero.stat)}</p>
            <p style="font-size:12px;font-weight:600;letter-spacing:0.1em;color:#5e5e5e;margin:0;">${esc(t.hero.statLabel)}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

export function initHeroRotator() {
  if (heroRotateTimer) {
    clearInterval(heroRotateTimer);
    heroRotateTimer = null;
  }

  const images = document.querySelectorAll("#hero-rotator .hero-rotator-slide");
  if (images.length < 2) return;

  let current = 0;
  heroRotateTimer = setInterval(() => {
    images[current].style.opacity = "0";
    current = (current + 1) % images.length;
    images[current].style.opacity = "1";
  }, HERO_ROTATE_MS);
}
