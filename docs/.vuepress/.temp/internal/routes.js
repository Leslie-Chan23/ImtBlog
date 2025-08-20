export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"欢迎来到 ImtBlog"} }],
  ["/articles/", { loader: () => import(/* webpackChunkName: "articles_index.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/index.html.js"), meta: {"title":"文章列表"} }],
  ["/about/", { loader: () => import(/* webpackChunkName: "about_index.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/about/index.html.js"), meta: {"title":"关于我"} }],
  ["/articles/movie/article1.html", { loader: () => import(/* webpackChunkName: "articles_movie_article1.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article1.html.js"), meta: {"title":"A Brighter Summer Day"} }],
  ["/articles/movie/article10.html", { loader: () => import(/* webpackChunkName: "articles_movie_article10.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article10.html.js"), meta: {"title":"Yi Yi"} }],
  ["/articles/movie/article11.html", { loader: () => import(/* webpackChunkName: "articles_movie_article11.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article11.html.js"), meta: {"title":"A Man Called Otto"} }],
  ["/articles/movie/article12.html", { loader: () => import(/* webpackChunkName: "articles_movie_article12.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article12.html.js"), meta: {"title":"A Man Called Ove"} }],
  ["/articles/movie/article13.html", { loader: () => import(/* webpackChunkName: "articles_movie_article13.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article13.html.js"), meta: {"title":""} }],
  ["/articles/movie/article2.html", { loader: () => import(/* webpackChunkName: "articles_movie_article2.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article2.html.js"), meta: {"title":"Blue Gate Crossing"} }],
  ["/articles/movie/article3.html", { loader: () => import(/* webpackChunkName: "articles_movie_article3.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article3.html.js"), meta: {"title":"Cinema Paradiso"} }],
  ["/articles/movie/article4.html", { loader: () => import(/* webpackChunkName: "articles_movie_article4.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article4.html.js"), meta: {"title":"Dead Poets Society"} }],
  ["/articles/movie/article5.html", { loader: () => import(/* webpackChunkName: "articles_movie_article5.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article5.html.js"), meta: {"title":"Fight Club"} }],
  ["/articles/movie/article6.html", { loader: () => import(/* webpackChunkName: "articles_movie_article6.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article6.html.js"), meta: {"title":"Green Book"} }],
  ["/articles/movie/article7.html", { loader: () => import(/* webpackChunkName: "articles_movie_article7.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article7.html.js"), meta: {"title":"Raise The Red Lantern"} }],
  ["/articles/movie/article8.html", { loader: () => import(/* webpackChunkName: "articles_movie_article8.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article8.html.js"), meta: {"title":"Source Code"} }],
  ["/articles/movie/article9.html", { loader: () => import(/* webpackChunkName: "articles_movie_article9.html" */"C:/Users/14408/ImtBlog/docs/.vuepress/.temp/pages/articles/movie/article9.html.js"), meta: {"title":"The Last Emperor"} }],
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
