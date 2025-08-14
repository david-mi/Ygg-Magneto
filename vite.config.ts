import { defineConfig } from 'vite';
import monkey from 'vite-plugin-monkey';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src/'),
      '@views': resolve(__dirname, './src/views/'),
      '@model': resolve(__dirname, './src/model/'),
      '@controllers': resolve(__dirname, './src/controllers/'),
      '@components': resolve(__dirname, './src/views/components/'),
      '@constants': resolve(__dirname, './src/constants/'),
    },
  },
  plugins: [
    monkey({
      entry: 'src/main.ts',
      userscript: {
        version: "1.0.4",
        name: "YGG - MagnetoDebrid",
        icon: "https://cdn.allthepics.net/images/2025/08/14/favicon.png",
        namespace: 'npm/vite-plugin-monkey',
        match: ["https://www.yggtorrent.top/torrent*"],
        author: "david-mi"
      },
      server: {
        prefix: "[DEV] YGG - MagnetoDebrid"
      }
    }),
  ],
});
