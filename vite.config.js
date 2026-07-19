import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  plugins: [],
  build: {
    outDir: "dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        productos: resolve(__dirname, "productos.html"),
        soluciones: resolve(__dirname, "soluciones.html"),
        blog: resolve(__dirname, "blog.html"),
        articulo: resolve(__dirname, "articulo.html"),
        contacto: resolve(__dirname, "contacto.html"),
      },
    },
  },
});
