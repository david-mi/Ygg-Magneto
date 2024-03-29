import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      '@views': resolve(__dirname, './src/views'),
      '@model': resolve(__dirname, './src/model'),
      '@controllers': resolve(__dirname, './src/controllers'),
      '@components': resolve(__dirname, './src/views/components'),
    },
  },
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        version: "1.0.1",
        name: "YGG - MagnetoDebrid",
        icon: 'https://vitejs.dev/logo.svg',
        namespace: 'npm/vite-plugin-monkey',
        match: ['https://www3.yggtorrent.qa/torrent/*'],
      },
    }),
  ],
});
