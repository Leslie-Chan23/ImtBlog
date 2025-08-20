import comp from "C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/index.html.vue"
const data = JSON.parse("{\"path\":\"/articles/\",\"title\":\"文章列表\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.47,\"words\":142},\"git\":{},\"filePathRelative\":\"articles/index.md\",\"headers\":[],\"categoryList\":[{\"id\":\"dba5d9\",\"sort\":10000,\"name\":\"articles\"}]}")
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
