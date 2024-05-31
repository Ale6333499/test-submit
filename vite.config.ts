import { UserConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
// import UnoCSS from 'unocss/vite'

const config: UserConfig = {
  base: './', // index.html文件所在位置
  root: './', // js导入的资源路径，src
  plugins: [
    Vue(),
    // UnoCSS()
  ]
}

export default config
