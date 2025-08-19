import comp from "C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/about/index.html.vue"
const data = JSON.parse("{\"path\":\"/about/\",\"title\":\"关于我\",\"lang\":\"en-US\",\"frontmatter\":{},\"git\":{\"updatedTime\":1755588888000,\"contributors\":[{\"name\":\"Leslie\",\"username\":\"Leslie\",\"email\":\"1440881060@qq.com\",\"commits\":4,\"url\":\"https://github.com/Leslie\"}],\"changelog\":[{\"hash\":\"2ee4ab6b4ed7255f3afa204324ef4e50ed38d7d4\",\"time\":1755588888000,\"email\":\"1440881060@qq.com\",\"author\":\"Leslie\",\"message\":\"ove\"},{\"hash\":\"8e1bde6a487e9935d6f80a9a25e584e4d2296331\",\"time\":1755584968000,\"email\":\"1440881060@qq.com\",\"author\":\"Leslie\",\"message\":\"attempt to add a visit count\"},{\"hash\":\"bc03f29d19f9f03f51c799e2bc75db5ec7571553\",\"time\":1755518466000,\"email\":\"1440881060@qq.com\",\"author\":\"Leslie\",\"message\":\"chore(backup): snapshot before backup 20250818-200105\",\"tag\":\"backup-main-20250818-200614\"},{\"hash\":\"d6a2387c918b7f6ef5a8af9ba76ee62bef6f5a5a\",\"time\":1755223477000,\"email\":\"1440881060@qq.com\",\"author\":\"Leslie\",\"message\":\"Initial backup\"}]},\"filePathRelative\":\"about/index.md\"}")
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
