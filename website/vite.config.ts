import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The GitHub Pages project site is served from
// https://hidooch980.github.io/molido-core/ so assets must be requested from
// that sub-path, not from the domain root.
// If MOLIDO later moves to a custom domain or a root-level host, change this
// to "/".
export default defineConfig({
  base: "/molido-core/",
  plugins: [react()],
});
