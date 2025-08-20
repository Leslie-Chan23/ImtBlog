import { viteBundler } from '@vuepress/bundler-vite'
import { defaultTheme } from '@vuepress/theme-default'
import { commentPlugin } from '@vuepress/plugin-comment'

// 文章布局配置
const articleLayoutPlugin = (options) => ({
  name: 'article-layout-plugin',
  extendsPage: (page) => {
    // 为所有文章页面应用自定义布局
    if (page.filePath?.includes('articles/')) {
      page.frontmatter.layout = 'ArticleLayout'
    }
  }
})

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
            '/articles/movie/article13.md',  // 添加这一行
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
  // 插件配置
  plugins: [
    articleLayoutPlugin(), // 这里添加逗号
    commentPlugin({
      // 使用giscus作为评论系统
      provider: 'Giscus',
      options: {
        // 你的GitHub仓库
        repo: 'imterritidoly/ImtBlog',
        // 仓库ID，可以在giscus官网获取
        repoId: 'R_kgDOKN7pFw',
        // 讨论分类
        category: 'General',
        // 分类ID
        categoryId: 'DIC_kwDOKN7pF84COoH2',
        // 映射方式
        mapping: 'pathname',
        // 是否严格匹配路径
        strict: '0',
        // 是否启用反应表情
        reactionsEnabled: '1',
        // 是否发送元数据
        emitMetadata: '0',
        // 输入框位置
        inputPosition: 'bottom',
        // 主题
        theme: 'light',
        // 语言
        lang: 'zh-CN',
      },
    }),
  ],
  // 关闭调试日志
  debug: false,
}