import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// Where the site is served from.
//
// On the github.io project site that is the sub-path /molido-core/, so
// assets have to be requested from there. On a custom domain the site sits
// at the root, and the base must be "/" instead.
//
// Set VITE_BASE to override; the deploy workflow does this once a domain is
// attached, so switching does not need a code change.
const PROJECT_PATH = "/molido-core/";

/** Where the site actually lives, for tags that need an absolute URL. */
const PROJECT_URL = "https://hidooch980.github.io/molido-core/";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  const base = env.VITE_BASE || PROJECT_PATH;
  // og:image is fetched by other servers, so a relative path is useless -
  // it has to be absolute. Attaching a domain overrides this.
  const siteUrl = env.VITE_SITE_URL || PROJECT_URL;

  return {
    base,
    plugins: [
      react(),
      {
        name: "molido-site-url",
        transformIndexHtml: (html: string) =>
          html.replaceAll("%SITE_URL%", siteUrl),
      },
    ],
  };
});
