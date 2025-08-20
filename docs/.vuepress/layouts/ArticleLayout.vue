<template>
  <Layout>
    <template #page-bottom>
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
.comment-container {
  margin-top: 2rem;
  padding-top: 1rem;
  border-top: 1px solid #eaecef;
}
</style>