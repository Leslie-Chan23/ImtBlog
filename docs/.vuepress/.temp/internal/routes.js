export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"欢迎来到 ImtBlog"} }],
  ["/articles/", { loader: () => import(/* webpackChunkName: "articles_index.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/index.html.js"), meta: {"title":"文章列表"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"关于我"} }],
  ["/articles/movie/article1.html", { loader: () => import(/* webpackChunkName: "articles_movie_article1.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article1.html.js"), meta: {"title":"A Brighter Summer Day"} }],
  ["/articles/movie/article2.html", { loader: () => import(/* webpackChunkName: "articles_movie_article2.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article2.html.js"), meta: {"title":"文章标题2"} }],
  ["/articles/movie/", { loader: () => import(/* webpackChunkName: "articles_movie_index.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/index.html.js"), meta: {"title":"movie"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
