<template>
  <div class="article-layout">
    <!-- 继承默认布局的内容 -->
    <Layout>
      <!-- 保留原始布局的所有内容 -->
      <template #page-bottom>
        <!-- 使用 GiscusComment 组件 -->
        <GiscusComment />
        <slot name="page-bottom" />
      </template>
    </Layout>
  </div>
</template>

<script>
import { Layout } from '@vuepress/theme-default'
import GiscusComment from '../components/GiscusComment.vue'

export default {
  name: 'ArticleLayout',
  components: {
    Layout,
    GiscusComment
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