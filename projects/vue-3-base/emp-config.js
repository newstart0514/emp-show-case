import Vue3 from '@empjs/plugin-vue3'
import {defineConfig} from '@empjs/cli'

export default defineConfig(({mode, env}) => {
  return {
    plugins: [Vue3()],
    appEntry: 'main.ts',
    server: {port: 9001},
    html: {title: 'EMP Vue3 Base'},
    empShare: {
      name: 'vue3Base',
      shared: {
        vue: {
          requiredVersion: '^3',
        },
      },
      exposes: {
        './ButtonComponent': './src/components/ButtonComponent',
        './TableComponent': './src/components/TableComponent',
        './JSXComponent': './src/components/JSXComponent',
        './TsxScript': './src/components/TsxScript',
        './Antd': './src/Antd',
      },
    },
    debug: {
      clearLog: false,
      showRsconfig: false,
    },
  }
})
