import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      app: "/src/app",
      pages: "/src/pages",
      components: "/src/components",
      shared: "/src/shared",
      store: "/src/store",
    },
  },
});
