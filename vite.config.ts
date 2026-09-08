import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import seo from "./src/content/seo.json";

function injectSeoMeta(): Plugin {
  return {
    name: "inject-seo-meta",
    transformIndexHtml(html) {
      return html
        .replace(/%SEO_TITLE%/g, seo.title)
        .replace(/%SEO_DESCRIPTION%/g, seo.description)
        .replace(/%SEO_OG_TITLE%/g, seo.ogTitle)
        .replace(/%SEO_OG_DESCRIPTION%/g, seo.ogDescription)
        .replace(/%SEO_OG_IMAGE%/g, seo.ogImage)
        .replace(/%SEO_TWITTER_TITLE%/g, seo.twitterTitle)
        .replace(/%SEO_TWITTER_DESCRIPTION%/g, seo.twitterDescription)
        .replace(/%SEO_TWITTER_IMAGE%/g, seo.twitterImage);
    },
  };
}

export default defineConfig({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [react(), injectSeoMeta()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
