import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite 6 — https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  base: '/',

  build: {
    target: 'es2022',
    sourcemap: false,
  },

  server: {
    port: 5173,
    open: false,

    allowedHosts: [
      'dexterity-succulent-ageless.ngrok-free.dev',
    ],
  },
});