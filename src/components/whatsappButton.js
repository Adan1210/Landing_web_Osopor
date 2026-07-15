const WHATSAPP_SVG = `<svg viewBox="0 0 32 32" width="32" height="32" fill="#ffffff" xmlns="http://www.w3.org/2000/svg"><path d="M16.004 3C9.376 3 4 8.373 4 15c0 2.317.653 4.484 1.786 6.33L4 29l7.86-1.744A11.94 11.94 0 0 0 16.004 27C22.63 27 28 21.627 28 15S22.63 3 16.004 3Zm0 21.7a9.65 9.65 0 0 1-4.94-1.36l-.354-.21-4.66 1.034 1.02-4.54-.23-.37A9.63 9.63 0 0 1 5.3 15c0-5.9 4.8-10.7 10.704-10.7 5.9 0 10.696 4.8 10.696 10.7 0 5.9-4.796 10.7-10.696 10.7Zm5.87-8.02c-.32-.16-1.89-.933-2.183-1.04-.293-.107-.507-.16-.72.16-.213.32-.827 1.04-1.014 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.497-2.573-1.586-.95-.847-1.593-1.894-1.78-2.214-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.987-2.374-.26-.624-.524-.54-.72-.55l-.613-.01c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.668 0 1.574 1.147 3.094 1.307 3.307.16.213 2.257 3.446 5.467 4.833.764.33 1.36.527 1.826.674.767.244 1.466.21 2.02.127.616-.092 1.89-.773 2.157-1.52.267-.746.267-1.386.187-1.52-.08-.133-.293-.213-.613-.373Z"/></svg>`;

export function renderWhatsappButton(t) {
  const whatsappLink = `https://wa.me/51905461659?text=${encodeURIComponent(t.whatsappMessage)}`;
  return `
    <a href="${whatsappLink}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" class="whatsapp-btn" style="position:fixed;bottom:32px;right:32px;z-index:60;width:64px;height:64px;background:#000000;border-radius:9999px;display:flex;align-items:center;justify-content:center;box-shadow:0 10px 25px -5px rgba(0,0,0,0.35);border:1px solid #E7E7E4;">
      ${WHATSAPP_SVG}
    </a>
  `;
}
