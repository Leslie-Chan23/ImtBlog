import comp from "C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/\",\"title\":\"关于我\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1755223477000,\"contributors\":[{\"name\":\"Leslie\",\"username\":\"\",\"email\":\"1440881060@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"d6a2387c918b7f6ef5a8af9ba76ee62bef6f5a5a\",\"time\":1755223477000,\"email\":\"1440881060@qq.com\",\"author\":\"Leslie\",\"message\":\"Initial backup\"}]},\"filePathRelative\":\"about/index.md\"}")
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
