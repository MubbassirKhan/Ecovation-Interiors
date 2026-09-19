import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  base: '/Ecovation-Test1/',

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