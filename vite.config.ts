import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { VitePluginFonts } from 'vite-plugin-fonts';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: ['Manrope'],
      },
    }),
  ],
  resolve: {
    alias: {
      //@ts-ignore
      '@': path.resolve(__dirname, './src'),
    },
  },
});
