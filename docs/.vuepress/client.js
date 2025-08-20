import { defineClientConfig } from '@vuepress/client'
import Figure from './components/Figure.vue'

export default defineClientConfig({
  components: {
    Figure
  },
  setup() {
    // 图片懒加载和优化设置
    const applyLazyAttrs = () => {
      if (typeof document === 'undefined') return
      const images = document.querySelectorAll('img')
      images.forEach((img) => {
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy')
        if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async')
        if (!img.hasAttribute('fetchpriority')) img.setAttribute('fetchpriority', 'low')
      })
    }
    
    // 在客户端环境中应用图片优化
    if (typeof window !== 'undefined') {
      // 页面加载后应用图片优化
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        applyLazyAttrs()
      } else {
        window.addEventListener('DOMContentLoaded', applyLazyAttrs, { once: true })
      }
    }
  }
})