import vue from '@vitejs/plugin-vue'
import styleImport, { VantResolve } from 'vite-plugin-style-import'
import { resolve } from 'path'
import { ConfigEnv, UserConfigExport } from 'vite'
// import eruda from 'vite-plugin-eruda'

const pathResolve = (dir: string) => {
  return resolve(process.cwd(), '.', dir)
}

// https://vitejs.dev/config/
export default function ({ command }: ConfigEnv): UserConfigExport {
  const isProduction = command === 'build'
  const root = process.cwd()
  console.log(isProduction)
  return {
    root,
    resolve: {
      alias: [
        {
          find: 'vue-i18n',
          replacement: 'vue-i18n/dist/vue-i18n.cjs.js',
        },
        // /@/xxxx => src/xxxx
        {
          find: /\/@\//,
          replacement: pathResolve('src') + '/',
        },
        // /#/xxxx => types/xxxx
        {
          find: /\/#\//,
          replacement: pathResolve('types') + '/',
        },
      ],
    },
    server: {
      host: '0.0.0.0',
    },
    plugins: [
      vue(),
      // eruda(),
      styleImport({
        resolves: [VantResolve()],
      }),
    ],
  }
}
