<script>
// 修改为默认导入语法
import Giscus from '@giscus/vue'

export default {
  name: 'Comment',
  components: {
    Giscus // 组件注册保持不变
  }
}
</script>

<template>
	<Giscus
		id="comments"
    data-repo="Leslie-Chan23/ImtBlog"
    data-repo-id="R_kgDOPN_sYg"
    data-category="General"
    data-category-id="DIC_kwDOPN_sYs4CuVb2"
		mapping="pathname"
		term="Welcome to component!"
		inputPosition="top"
		theme="light"
		lang="zh-CN"
		loading="lazy"
	/>
</template>

