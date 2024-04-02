import {defineConfig} from '@empjs/cli'
import configCjs from './emp-cjs-config.js'

export default defineConfig(store => {
  const rs = configCjs(store)
  return rs
})
