<script>
import { h } from 'vue'
import { Layout } from '@vuepress/theme-default'

// 直接在组件中定义Comment组件，避免导入问题
const Comment = {
  name: 'Comment',
  template: `
    <div class="comment-container">
      <div id="giscus-container"></div>
    </div>
  `,
  mounted() {
    this.loadGiscus()
  },
  methods: {
    loadGiscus() {
      // 检查是否已加载giscus脚本
      if (document.getElementById('giscus-script')) {
        return
      }

      // 创建script标签并配置giscus
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
      script.id = 'giscus-script'
      script.async = true
      
      // 添加到页面
      const container = document.getElementById('giscus-container')
      if (container) {
        container.appendChild(script)
      }
    }
  }
}

export default {
  name: 'ArticleLayout',
  extends: Layout,
  components: {
    Comment
  },
  slots: {
    'page-bottom'() {
      return [
        h(Comment),
        // 保留原布局的page-bottom插槽内容
        this.$slots['page-bottom']?.()
      ]
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