import comp from "C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"欢迎来到 ImtBlog\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"readingTime\":{\"minutes\":0.24,\"words\":73},\"git\":{},\"filePathRelative\":\"README.md\",\"headers\":[],\"categoryList\":[]}")
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
