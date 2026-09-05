import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [react()],
  base: "/Constructor/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@componentsSections": path.resolve(
        __dirname,
        "./src/components/Sections",
      ),
      "@data": path.resolve(__dirname, "./src/data"),
      "@dataSections": path.resolve(__dirname, "./src/data/Sections"),
      "@assets": path.resolve(__dirname, "./src/assets"),
    },
  },
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
});
