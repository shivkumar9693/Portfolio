import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@shared": path.resolve(__dirname, "../shared"),
      "@assets": path.resolve(__dirname, "../attached_assets"),
    },
  },
  server: {
    port: 5173,
  },
  build: {
    outDir: "dist",       // Output folder used by Vercel
    sourcemap: false,
    emptyOutDir: true,    // Optional: cleans dist before building
  },
  base: "/",              // Important: Ensures correct asset paths in production
});
