import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // PENTING: ganti '/login-obs/' sesuai nama repo project page-mu
  base: "/login-obs/",
});
