import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import path from 'path'
import { fileURLToPath } from 'url'

// 解决ES模块中的__dirname问题
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

export default {
  // 网站标题
  title: 'ImtBlog',
  // 网站描述
  description: '个人博客网站',
  // 部署站点的基础路径
  base: '/ImtBlog/',
  // 自定义 <head>，引入不蒜子统计脚本
  head: [
    ['meta', { name: 'referrer', content: 'no-referrer-when-downgrade' }],
    ['script', { async: true, src: 'https://npm.onmicrosoft.cn/penndu@16.0.0/bsz.js' }]
  ],
  // 主题配置
  theme: defaultTheme({
    // 导航栏配置
    navbar: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/articles/' },
      { text: '关于', link: '/about/' },
    ],
    // 侧边栏配置
    sidebar: {
      '/articles/': [
        {
          text: '文章分类',
          children: [
            '/articles/movie/article1.md',
            '/articles/movie/article2.md',
            '/articles/movie/article3.md',
            '/articles/movie/article4.md',
            '/articles/movie/article5.md',
            '/articles/movie/article6.md',
            '/articles/movie/article7.md',
            '/articles/movie/article8.md',
            '/articles/movie/article9.md',
            '/articles/movie/article10.md',
            '/articles/movie/article11.md',
            '/articles/movie/article12.md',
            '/articles/movie/article13.md',
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
      }
    }
  }),
  // 关闭调试日志
  debug: false,
  // 移除下面这行别名配置
  // alias: {
  //   '@theme/layouts/ArticleLayout.vue': path.resolve(__dirname, './layouts/ArticleLayout.vue'),
  // },
  // 直接为所有文章页面设置布局（已注释）
  // extendsPage: (page) => {
  //   if (page.filePath?.includes('articles/')) {
  //     page.frontmatter.layout = 'ArticleLayout'
  //   }
  // }
}