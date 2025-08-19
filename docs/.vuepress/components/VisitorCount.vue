<template>
  <div class="visitor-count">
    <span id="busuanzi_container_page_pv">本文阅读量：<span id="busuanzi_value_page_pv"></span></span>
    <span id="busuanzi_container_site_pv" class="site-view">站点总访问量：<span id="busuanzi_value_site_pv"></span></span>
  </div>
</template>

<script>
export default {
  name: 'VisitorCount',
  mounted() {
    this.initBusuanzi()
  },
  watch: {
    '$route.fullPath'() {
      // 路由变更后，等待视图更新再拉取
      this.$nextTick(() => {
        setTimeout(() => {
          this.triggerFetch()
        }, 200)
      })
    }
  },
  methods: {
    initBusuanzi() {
      const tryFetch = () => {
        const api = window.BUSUANZI || window.busuanzi
        if (api && typeof api.fetch === 'function') {
          api.fetch()
          return true
        }
        if (api && typeof api.load === 'function') {
          api.load()
          return true
        }
        return false
      }

      if (!tryFetch()) {
        const timer = setInterval(() => {
          if (tryFetch()) clearInterval(timer)
        }, 300)
        setTimeout(() => clearInterval(timer), 8000)
      }

      const reFetch = () => {
        // 等待新页面 DOM 渲染完成
        requestAnimationFrame(() => {
          setTimeout(() => {
            tryFetch()
          }, 200)
        })
      }

      // 兼容性监听：VuePress 自定义事件 + 原生 popstate
      window.addEventListener('vuepress:route-changed', reFetch)
      window.addEventListener('popstate', reFetch)

      // 暴露一个方法给 watcher 使用
      this.triggerFetch = tryFetch
    }
  }
}
</script>

<style scoped>
.visitor-count {
  font-size: 14px;
  color: #666;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}
.site-view {
  margin-left: 20px;
}
</style>