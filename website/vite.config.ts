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

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "VITE_");
  return {
    base: env.VITE_BASE || PROJECT_PATH,
    plugins: [react()],
  };
});
