import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Pages from 'vite-plugin-pages'

import type { Adapter } from 'vite-plugin-mix'
import mixPlugin, { vercelAdapter } from 'vite-plugin-mix'

interface MixConfig {
  handler: string
  adapter?: Adapter | undefined
}

type MixPlugin = (config: MixConfig) => Plugin

interface Mix {
  default: MixPlugin
}

const mix = (mixPlugin as unknown as Mix).default

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),

    // https://github.com/egoist/vite-plugin-mix/
    // https://github.com/egoist/vite-plugin-mix/issues/33#issuecomment-1255778587
    mix({
      handler: './src/api/index.ts',
      adapter: vercelAdapter(),
    })
  ],
})
