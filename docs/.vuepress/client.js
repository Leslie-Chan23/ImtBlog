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

    if (typeof window !== 'undefined') {
      if (document.readyState === 'complete' || document.readyState === 'interactive') {
        applyLazyAttrs()
      } else {
        window.addEventListener('DOMContentLoaded', applyLazyAttrs, { once: true })
      }
      // Re-apply on route updates
      window.addEventListener('vuepress:page:loaded', applyLazyAttrs)
    }
  }
})