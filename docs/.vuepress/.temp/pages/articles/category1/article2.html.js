import comp from "C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/category1/article2.html.vue"
const data = JSON.parse("{\"path\":\"/articles/category1/article2.html\",\"title\":\"文章标题2\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"articles/category1/article2.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
