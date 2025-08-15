import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'

export default {
  // 网站标题
  title: 'ImtBlog',
  // 网站描述
  description: '个人博客网站',
  // 部署站点的基础路径
  base: '/',
  // 主题配置
  theme: defaultTheme({
    // 导航栏配置
    navbar: [
      {
        text: '首页',
        link: '/',
      },
      {
        text: '文章',
        link: '/articles/',
      },
      {
        text: '关于',
        link: '/about/',
      },
    ],
    // 侧边栏配置
    sidebar: {
      '/articles/': [
        {
          text: '文章分类',
          children: [
            '/articles/movie/article1.md',
            '/articles/movie/article2.md',
          ],
        },
      ],
      '/about/': [
        '/about/index.md',
      ],
    },
  }),
  // 打包器配置优化
  bundler: viteBundler({
    viteOptions: {
      build: {
        minify: true,
        chunkSizeWarningLimit: 1000,
      },
      optimizeDeps: {
        include: ['vue'],
      },
    },
  }),
  // 缓存配置
  cache: true,
  // 关闭调试日志
  debug: false,
}