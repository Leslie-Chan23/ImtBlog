import comp from "C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/index.html.vue"
const data = JSON.parse("{\"path\":\"/articles/movie/\",\"title\":\"movie\",\"lang\":\"en-US\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.51,\"words\":153},\"git\":{},\"filePathRelative\":\"articles/movie/index.md\",\"headers\":[],\"categoryList\":[{\"id\":\"dba5d9\",\"sort\":10001,\"name\":\"articles\"},{\"id\":\"0cf31d\",\"sort\":10002,\"name\":\"movie\"}]}")
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
