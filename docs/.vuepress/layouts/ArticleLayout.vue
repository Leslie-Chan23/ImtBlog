<script>
import { h } from 'vue'
import { Layout } from '@vuepress/theme-default'
import SimpleComment from '../components/SimpleComment.vue'

export default {
  name: 'ArticleLayout',
  extends: Layout,
  components: {
    SimpleComment
  },
  slots: {
    'page-bottom'() {
      return [
        h(SimpleComment),
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