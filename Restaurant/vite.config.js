import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router-dom")) return "router";
            if (id.includes("react-toastify")) return "toast";
            if (id.includes("react-icons")) return "icons";
            if (id.includes("react-dom")) return "react-dom";
            if (id.includes("react")) return "react";
            return "vendor";
          }
        },
      },
    },
  },
});
