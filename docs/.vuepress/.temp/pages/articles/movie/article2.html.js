import comp from "C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article2.html.vue"
const data = JSON.parse("{\"path\":\"/articles/movie/article2.html\",\"title\":\"Blue Gate Crossing\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1755223477000,\"contributors\":[{\"name\":\"Leslie\",\"username\":\"\",\"email\":\"1440881060@qq.com\",\"commits\":1}],\"changelog\":[{\"hash\":\"d6a2387c918b7f6ef5a8af9ba76ee62bef6f5a5a\",\"time\":1755223477000,\"email\":\"1440881060@qq.com\",\"author\":\"Leslie\",\"message\":\"Initial backup\"}]},\"filePathRelative\":\"articles/movie/article2.md\"}")
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
