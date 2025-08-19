export const siteData = JSON.parse("{\"base\":\"/ImtBlog/\",\"lang\":\"en-US\",\"title\":\"ImtBlog\",\"description\":\"个人博客网站\",\"head\":[[\"meta\",{\"name\":\"referrer\",\"content\":\"no-referrer-when-downgrade\"}],[\"script\",{\"async\":true,\"src\":\"https://npm.onmicrosoft.cn/penndu@16.0.0/bsz.js\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
