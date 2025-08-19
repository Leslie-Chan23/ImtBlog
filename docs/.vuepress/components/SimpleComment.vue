<template>
  <div class="comment-container">
    <div id="giscus-container"></div>
  </div>
</template>

<script>
export default {
  name: 'SimpleComment',
  mounted() {
    // 直接在mounted时插入Giscus脚本
    this.insertGiscusScript()
  },
  methods: {
    insertGiscusScript() {
      const container = document.getElementById('giscus-container')
      if (!container) return

      // 清空容器
      container.innerHTML = ''

      // 创建script标签
      const script = document.createElement('script')
      script.src = 'https://giscus.app/client.js'
      script.setAttribute('data-repo', 'Leslie-Chan23/ImtBlog')
      script.setAttribute('data-repo-id', 'R_kgDOPN_sYg')
      script.setAttribute('data-category', 'General')
      script.setAttribute('data-category-id', 'DIC_kwDOPN_sYs4CuVb2')
      script.setAttribute('data-mapping', 'pathname')
      script.setAttribute('data-strict', '0')
      script.setAttribute('data-reactions-enabled', '1')
      script.setAttribute('data-emit-metadata', '0')
      script.setAttribute('data-input-position', 'bottom')
      script.setAttribute('data-theme', 'preferred_color_scheme')
      script.setAttribute('data-lang', 'zh-CN')
      script.setAttribute('crossorigin', 'anonymous')
      script.async = true
      
      // 添加错误处理
      script.onerror = () => {
        console.error('Failed to load Giscus script')
        container.innerHTML = '<p>评论系统加载失败，请刷新页面重试。</p>'
      }
      
      // 添加到容器
      container.appendChild(script)
    }
  }
}
</script>

<style scoped>
.comment-container {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eaecef;
}
</style>