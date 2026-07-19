import "../styles.css";
import { TRANSLATIONS, CATEGORIES, getLang } from "../i18n/index.js";
import { getPost, POSTS, formatDate } from "../data/blogPosts.js";
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { renderWhatsappButton } from "../components/whatsappButton.js";
import { attachCommonListeners } from "../components/pageShell.js";
import { renderRelatedCard } from "../components/blogCard.js";
import { renderArticleBody } from "../components/articleBody.js";
import { esc } from "../utils/html.js";

function getSlugFromUrl() {
  const params = new URLSearchParams(window.location.search);
  return params.get("post");
}

function injectSeo(post, content, lang) {
  document.title = `${content.title} | Blog Osopor`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", content.excerpt);

  const old = document.getElementById("article-jsonld");
  if (old) old.remove();
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.id = "article-jsonld";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: content.title,
    description: content.excerpt,
    image: post.img,
    datePublished: post.date,
    inLanguage: lang === "es" ? "es-PE" : lang,
    author: { "@type": "Organization", name: "Osopor S.A.C." },
    publisher: { "@type": "Organization", name: "Osopor S.A.C.", url: "https://www.osopor.com" },
  });
  document.head.appendChild(script);
}

function render(root) {
  const lang = getLang();
  const t = TRANSLATIONS[lang];
  const cats = CATEGORIES[lang];
  const slug = getSlugFromUrl();
  const post = getPost(slug);
  const content = post[lang] || post.es;

  injectSeo(post, content, lang);

  const meta = `${t.blog.publishedOn} ${formatDate(post.date, lang)} · ${post.read} ${t.blog.minRead}`;
  const catLabel = cats[post.cat] || post.cat;

  const related = POSTS.filter((p) => p.slug !== post.slug)
    .slice(0, 3)
    .map((p) => ({
      url: `articulo.html?post=${encodeURIComponent(p.slug)}`,
      img: p.img,
      title: (p[lang] || p.es).title,
      catLabel: cats[p.cat] || p.cat,
    }));

  root.innerHTML = `
    <div style="background:#F7F7F5;color:#001F3F;min-height:100vh;display:flex;flex-direction:column;">
      ${renderHeader(t, lang, "blog")}
      <main style="padding-top:72px;flex:1;">
        <article>
          <div style="max-width:860px;margin:0 auto;padding:72px 32px 0 32px;display:flex;flex-direction:column;gap:24px;">
            <a href="blog.html" style="font-size:12px;font-weight:600;letter-spacing:0.1em;color:#5e5e5e;width:fit-content;">${esc(t.blog.backToBlog)}</a>
            <div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
              <span style="padding:4px 12px;background:rgba(0,31,63,0.06);color:#001F3F;border-radius:9999px;font-size:11px;font-weight:600;letter-spacing:0.1em;">${esc(catLabel)}</span>
              <span style="font-size:12px;color:#5e5e5e;font-weight:600;letter-spacing:0.05em;">${esc(meta)}</span>
            </div>
            <h1 class="article-title" style="font-size:48px;line-height:1.12;letter-spacing:-0.03em;font-weight:600;color:#001F3F;margin:0;">${esc(content.title)}</h1>
            <p style="font-size:18px;line-height:1.6;letter-spacing:-0.01em;color:#5e5e5e;margin:0;">${esc(content.excerpt)}</p>
          </div>

          <div style="max-width:1080px;margin:0 auto;padding:48px 32px;">
            <div class="article-hero-img" style="height:440px;border-radius:2rem;overflow:hidden;box-shadow:0 25px 50px -12px rgba(0,31,63,0.18);">
              <img alt="${esc(content.title)}" style="width:100%;height:100%;object-fit:cover;" src="${post.img}"/>
            </div>
          </div>

          <div style="max-width:760px;margin:0 auto;padding:0 32px 80px 32px;display:flex;flex-direction:column;gap:8px;">
            ${renderArticleBody(content.body)}

            <div style="background:#ffffff;border:1px solid #E7E7E4;border-radius:1.5rem;padding:40px;margin-top:48px;display:flex;flex-wrap:wrap;gap:24px;align-items:center;justify-content:space-between;">
              <div style="display:flex;flex-direction:column;gap:8px;max-width:420px;">
                <h3 style="font-size:22px;line-height:1.25;letter-spacing:-0.02em;font-weight:600;color:#001F3F;margin:0;">${esc(t.blog.ctaTitle)}</h3>
                <p style="font-size:15px;line-height:1.6;color:#5e5e5e;margin:0;">${esc(t.blog.ctaBody)}</p>
              </div>
              <a href="contacto.html" style="background:#001F3F;color:#ffffff;padding:16px 32px;border-radius:9999px;font-size:12px;font-weight:600;letter-spacing:0.1em;flex-shrink:0;">${esc(t.blog.ctaBtn)}</a>
            </div>
          </div>

          <section style="background:#ffffff;border-top:1px solid #E7E7E4;padding:80px 0;">
            <div style="max-width:1280px;margin:0 auto;padding:0 32px;display:flex;flex-direction:column;gap:40px;">
              <h2 style="font-size:32px;line-height:1.2;letter-spacing:-0.02em;font-weight:600;color:#001F3F;margin:0;">${esc(t.blog.related)}</h2>
              <div class="related-grid" style="display:grid;grid-template-columns:repeat(3,1fr);gap:32px;">
                ${related.map(renderRelatedCard).join("")}
              </div>
            </div>
          </section>
        </article>
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
