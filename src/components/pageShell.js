import { setLang } from "../i18n/index.js";

// Wires up the header's mobile menu toggle + language switcher, and the
// contact form's demo submit button (present only on contacto.html).
// `rerender` is called after a language switch so the page re-renders in
// place, without a full navigation (keeps scroll position / open menus tidy).
export function attachCommonListeners(t, rerender) {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      setLang(btn.dataset.lang);
      rerender();
    });
  });

  const submitBtn = document.getElementById("submit-btn");
  if (submitBtn) {
    submitBtn.addEventListener("click", () => {
      alert(t.demoFormAlert);
    });
  }

  const menuBtn = document.getElementById("mobile-menu-btn");
  const mobileNav = document.getElementById("mobile-nav");
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener("click", () => {
      const isOpen = mobileNav.classList.toggle("open");
      menuBtn.setAttribute("aria-expanded", String(isOpen));
      menuBtn.querySelector(".material-symbols-outlined").textContent = isOpen ? "close" : "menu";
    });

    mobileNav.querySelectorAll(".mobile-nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        menuBtn.setAttribute("aria-expanded", "false");
        menuBtn.querySelector(".material-symbols-outlined").textContent = "menu";
      });
    });
  }
}
