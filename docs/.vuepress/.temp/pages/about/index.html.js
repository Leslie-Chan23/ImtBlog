import comp from "C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/\",\"title\":\"关于我\",\"lang\":\"en-US\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.12,\"words\":37},\"git\":{},\"filePathRelative\":\"about/index.md\",\"headers\":[],\"categoryList\":[{\"id\":\"46b393\",\"sort\":10000,\"name\":\"about\"}]}")
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
