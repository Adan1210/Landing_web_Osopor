# Osopor Landing

Sitio corporativo estático y multipágina construido con Vite y JavaScript
vanilla. No requiere backend ni variables de entorno para funcionar.

Puede reutilizarse como plantilla para otros sitios cambiando textos, imágenes,
metadatos y datos de contacto.

## Requisitos

- Node.js 20 o superior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Vite sirve el proyecto en `http://localhost:5173`.

## Comandos

```bash
npm run dev             # servidor local con recarga automática
npm run build           # genera la versión de producción en dist/
npm run preview         # previsualiza dist/ localmente
npm run deploy:dry-run  # valida el despliegue de Cloudflare sin publicarlo
npm run deploy          # compila y despliega con Wrangler
```

## Páginas

| Ruta fuente | Contenido |
|---|---|
| `index.html` | Inicio |
| `productos.html` | Productos y densidades |
| `soluciones.html` | Construcción y aislamiento |
| `blog.html` | Listado de artículos |
| `articulo.html?post=<slug>` | Artículo individual |
| `contacto.html` | Contacto y ubicación |

## Estructura

```text
src/
  assets/images/   imágenes utilizadas por el sitio
  components/      secciones y elementos compartidos
  data/            productos, imágenes y artículos
  i18n/            traducciones ES, EN y ZH
  pages/           punto de entrada JavaScript de cada página
  utils/           utilidades comunes
  styles.css       estilos globales y responsivos
vite.config.js     entradas multipágina y build de Vite
wrangler.jsonc     publicación de dist/ en Cloudflare Workers
```

## Personalizar como plantilla

1. Reemplaza las imágenes en `src/assets/images/`.
2. Actualiza textos y datos en `src/i18n/*.json`.
3. Edita los artículos en `src/data/blogPosts.js`.
4. Cambia teléfono, enlaces y mapa en los componentes correspondientes.
5. Actualiza títulos, descripciones y datos estructurados de los archivos HTML.
6. Cambia `name` en `package.json` y `wrangler.jsonc` para el nuevo proyecto.

## Despliegue automático en Cloudflare Workers

Conecta el repositorio desde **Workers & Pages > Import a repository** y usa:

```text
Build command:  npm run build
Deploy command: npx wrangler deploy
Root directory: /
```

Selecciona un build token válido. Cada `push` a la rama de producción ejecutará
la compilación y publicará los archivos de `dist/` definidos en
`wrangler.jsonc`.

No se requieren variables de entorno.

## Consideraciones

- El formulario de contacto es demostrativo y no envía información a un servidor.
- `node_modules/`, `dist/`, `.wrangler/`, secretos y registros locales están
  excluidos de Git.
