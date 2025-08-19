<template>
  <div class="visitor-count">
    <span v-if="pageView !== null">本文阅读量：{{ pageView }}</span>
    <span v-if="siteView !== null" class="site-view">站点总访问量：{{ siteView }}</span>
  </div>
</template>

<script>
export default {
  name: 'VisitorCount',
  data() {
    return {
      pageView: null,
      siteView: null
    }
  },
  mounted() {
    this.checkBusuanzi()
  },
  methods: {
    checkBusuanzi() {
      // 轮询检查不蒜子脚本是否加载完成
      const timer = setInterval(() => {
        if (window.busuanzi) {
          clearInterval(timer)
          this.startCount()
        }
      }, 300)
      
      // 防止超时
      setTimeout(() => {
        clearInterval(timer)
      }, 5000)
    },
    startCount() {
      // 页面访问量
      this.pageView = window.busuanzi.pageview.get()
      // 站点访问量
      this.siteView = window.busuanzi.siteuv.get()
      
      // 监听路由变化，更新页面访问量
      window.addEventListener('vuepress:route-changed', () => {
        setTimeout(() => {
          this.pageView = window.busuanzi.pageview.get()
        }, 300)
      })
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