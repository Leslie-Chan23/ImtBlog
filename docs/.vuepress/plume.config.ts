import { defineThemeConfig } from 'vuepress-theme-plume'

export default defineThemeConfig({
  // 主题相关配置
  logo: '/images/logo.png', // 如果你有logo的话
  profile: {
    name: 'ImtBlog',
    description: '个人博客网站',
  },
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
        items: [
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
          '/articles/movie/article14.md', // 添加新文章
        ]
      },
    ],
    '/about/': [
      '/about/index.md',
    ],
  },
  // 移除了不支持的plugins属性
})