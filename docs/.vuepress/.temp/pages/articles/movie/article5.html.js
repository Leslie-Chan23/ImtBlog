import comp from "C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article5.html.vue"
const data = JSON.parse("{\"path\":\"/articles/movie/article5.html\",\"title\":\"Fight Club\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{},\"filePathRelative\":\"articles/movie/article5.md\"}")
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
