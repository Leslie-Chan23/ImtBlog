<template>
  <Layout>
    <!-- 保留原始布局的所有内容 -->
    <template #page-bottom>
      <!-- 让 commentPlugin 自动处理评论区 -->
      <slot name="page-bottom" />
    </template>
  </Layout>
</template>

<script>
import { Layout } from '@vuepress/theme-default'

export default {
  name: 'ArticleLayout',
  components: {
    Layout
  }
}
</script>

<style scoped>
/* 保留原有的样式 */
.comment-container {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eaecef;
}
</style>