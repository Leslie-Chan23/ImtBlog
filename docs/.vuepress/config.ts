import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from 'vuepress'
import { plumeTheme } from 'vuepress-theme-plume'

export default defineUserConfig({
  // 网站基本配置
  lang: 'zh-CN',
  title: 'ImtBlog',
  description: '个人博客网站',
  base: '/ImtBlog/',
  // 自定义 <head>，引入不蒜子统计脚本
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['script', { async: true, src: 'https://npm.onmicrosoft.cn/penndu@16.0.0/bsz.js' }]
  ],
  // 使用plume主题
  theme: plumeTheme(),
  // 插件配置应该在这里
  // 如果你需要配置插件，可以取消下面的注释并添加插件
  // plugins: [
  //   // 插件配置
  // ],
  // 打包器配置优化
  bundler: viteBundler({
    viteOptions: {
      build: {
        minify: true,
        chunkSizeWarningLimit: 1000,
      },
      optimizeDeps: {
        include: ['vue'],
      }
    }
  }),
  // 关闭调试日志
  debug: false
})