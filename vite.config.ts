import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/fs-jan25-smerichka-team/",
  server: {
    open: true, // 👈 відкриває браузер при старті dev-серверу
  },
});
