import type { PluginOption } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import vue from '@vitejs/plugin-vue'

import appInfo from './app-info'
import createAutoImport from './auto-import'
import creaetComponents from './components'
import createCompression from './compression'
import createDevtools from './devtools'
import createElementPlus from './element-plus'

export default function createVitePlugins(viteEnv: ImportMetaEnv, isBuild = false) {
  const { VITE_ENABLE_DEVTOOLS } = viteEnv

  const vitePlugins: (PluginOption | PluginOption[])[] = [vue(), tailwindcss(), appInfo()]
  vitePlugins.push(createDevtools(VITE_ENABLE_DEVTOOLS))
  vitePlugins.push(createAutoImport())
  vitePlugins.push(creaetComponents())
  vitePlugins.push(createElementPlus())
  vitePlugins.push(createCompression())
  return vitePlugins
}
