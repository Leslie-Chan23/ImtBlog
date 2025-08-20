<template>
  <div class="comment-container">
    <Giscus
      id="comments"
      repo="Leslie-Chan23/ImtBlog"
      repoId="R_kgDOPN_sYg"
      category="General"
      categoryId="DIC_kwDOPN_sYs4CuVb2"
      mapping="pathname"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="preferred_color_scheme"
      lang="zh-CN"
      loading="lazy"
    />
  </div>
</template>

<script>
import Giscus from '@giscus/vue'

export default {
  name: 'GiscusComment',
  components: {
    Giscus
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