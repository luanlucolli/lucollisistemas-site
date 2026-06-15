import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [
    ...tanstackStart({
      prerender: { enabled: true },
      pages: [{ path: "/" }],
      spa: { enabled: false },
    }),
    tsconfigPaths(),
    tailwindcss(),
    react(),
  ],
});
