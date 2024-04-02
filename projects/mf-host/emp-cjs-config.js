import {defineConfig} from '@empjs/cli'
const defaultFn = defineConfig(store => {
  const isESM = false
  const shareLib =
    store.mode === 'development'
      ? {
          react: 'React@https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.development.min.js',
          'react-dom': 'ReactDOM@https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.development.js',
        }
      : {
          react: 'React@https://cdn.jsdelivr.net/npm/react@18.2.0/umd/react.production.min.js',
          'react-dom': 'ReactDOM@https://cdn.jsdelivr.net/npm/react-dom@18.2.0/umd/react-dom.production.min.js',
        }
  const shared = {
    react: {
      singleton: true,
    },
    'react-dom': {
      singleton: true,
    },
  }
  const shareMethod = isESM ? {shareLib} : {shared}
  return {
    build: {
      polyfill: 'usage',
      // 支持 默认的浏览器兼容性配置
      browserslist: store.browserslistOptions.h5,
    },
    html: {
      template: 'src/index.html',
    },
    // build: {
    //   target: 'es2015',
    // },
    server: {
      port: 8001,
    },
    debug: {
      clearLog: false,
      // showRsconfig: true,
    },
    empShare: {
      // mfVersion: 1,
      name: 'mfHost',
      exposes: {
        './App': './src/App',
      },
      ...shareMethod,
    },
  }
})
export default defaultFn
