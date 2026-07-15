import { esc } from "../utils/html.js";

export function renderLocationMap(t) {
  return `
    <section class="location-section" style="width:100%;height:480px;position:relative;">
      <iframe title="Osopor S.A.C. — Oficina y Planta en Chiclayo" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3962.1529349794373!2d-79.8659925886132!3d-6.7511957659886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x904cefdd07d1fb67%3A0x471edfa62fe5e2e1!2sOSOPOR%20SAC!5e0!3m2!1sen!2sus!4v1783837650403!5m2!1sen!2sus" style="width:100%;height:100%;border:0;display:block;" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"></iframe>
      <a href="https://maps.app.goo.gl/MhPppojozYP6gXLcA" target="_blank" rel="noopener noreferrer" style="position:absolute;bottom:32px;left:50%;transform:translateX(-50%);display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:600;letter-spacing:0.1em;color:#001F3F;background:rgba(255,255,255,0.95);backdrop-filter:blur(8px);padding:12px 20px;border-radius:9999px;box-shadow:0 10px 15px -3px rgba(0,0,0,0.15);">
        <span class="material-symbols-outlined" style="font-size:18px;color:#FF851B;">location_on</span> ${esc(t.location.cta)}
      </a>
    </section>
  `;
}
