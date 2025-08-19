import { defineClientConfig } from 'vuepress/client'
import Figure from './components/Figure.vue'

export default defineClientConfig({
  components: {
    Figure,
  },
  setup() {
    const applyLazyAttrs = () => {
      if (typeof document === 'undefined') return
      const images = document.querySelectorAll('img')
      images.forEach((img) => {
        if (!img.hasAttribute('loading')) img.setAttribute('loading', 'lazy')
        if (!img.hasAttribute('decoding')) img.setAttribute('decoding', 'async')
        if (!img.hasAttribute('fetchpriority')) img.setAttribute('fetchpriority', 'low')
      })
    }

    // 添加不蒜子访问统计
    if (typeof window !== 'undefined') {
      // 插入不蒜子统计脚本
      const insertBusuanzi = () => {
        // 检查是否已经添加过不蒜子脚本
        if (document.getElementById('busuanzi-script')) return
        
        const script = document.createElement('script')
        script.id = 'busuanzi-script'
        script.async = true
        script.src = '//busuanzi.ibruce.info/busuanzi/2.3/busuanzi.pure.mini.js'
        document.body.appendChild(script)
      }

      // 在页面加载完成后添加统计脚本
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        insertBusuanzi()
      } else {
        window.addEventListener('DOMContentLoaded', insertBusuanzi, { once: true })
      }
    }
  }
})