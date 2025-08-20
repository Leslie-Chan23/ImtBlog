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