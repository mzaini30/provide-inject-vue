import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {VitePWA} from 'vite-plugin-pwa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), VitePWA({
    manifest: {
      name: 'Latihan Vue',
      short_name: 'Latihan Vue',
      display: 'minimal-ui',
      icons: [{
        src: '/logo.png',
        sizes: '200x200',
        type: 'image/png'
      }]
    }
  })]
})
