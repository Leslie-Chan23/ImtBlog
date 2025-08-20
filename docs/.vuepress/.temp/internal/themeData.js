export const themeData = JSON.parse("{\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"文章\",\"link\":\"/articles/\"},{\"text\":\"关于\",\"link\":\"/about/\"}],\"sidebar\":{\"/articles/\":[{\"text\":\"文章分类\",\"children\":[\"/articles/movie/article1.md\",\"/articles/movie/article2.md\",\"/articles/movie/article3.md\",\"/articles/movie/article4.md\",\"/articles/movie/article5.md\",\"/articles/movie/article6.md\",\"/articles/movie/article7.md\",\"/articles/movie/article8.md\",\"/articles/movie/article9.md\",\"/articles/movie/article10.md\",\"/articles/movie/article11.md\",\"/articles/movie/article12.md\",\"/articles/movie/article13.md\"]}],\"/about/\":[\"/about/index.md\"]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"logo\":null,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
