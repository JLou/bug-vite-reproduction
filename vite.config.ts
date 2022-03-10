import { configDefaults, defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "setupTests.js",
    global: true,
    include: ["**/*.{test,spec,steps}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    watch: true,
    deps: {
      inline: ["specflow-emulator"],
    },
  },
});
