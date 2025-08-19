# 欢迎来到 ImtBlog

这是我的个人博客网站，记录我的一些影评和思考。

## 文章分类

- [movie](articles/movie/)
- [nothing](articles/category2/)

## 关于我

[了解更多](about/)

# 关于本站
这是imterritidoly的测试博客，使用vuepress搭建，使用markdown编写文章。

# 技术栈



#博客



#项目

<div id="comment-container" style="margin-top: 2rem; padding-top: 1rem; border-top: 1px solid #eaecef;">
  <div id="giscus-container" class="comment-container"></div>
</div>

<script>
// 检查是否在浏览器环境中运行（避免服务器端渲染时出错）
if (typeof window !== 'undefined' && typeof document !== 'undefined') {
  // 等待DOM加载完成
  document.addEventListener('DOMContentLoaded', function() {
    // 获取容器
    const container = document.getElementById('giscus-container');
    
    // 添加登录提示文字
    container.innerHTML = '<div style="text-align: center; margin-bottom: 20px; color: #666;">请先登录GitHub账号，才能查看和发表评论</div>';
    
    // 创建giscus脚本
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'imterritidoly/ImtBlog');
    script.setAttribute('data-repo-id', 'R_kgDOKN7pFw');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOKN7pF84COoH2');
    script.setAttribute('data-mapping', 'pathname');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'light');
    script.setAttribute('data-lang', 'zh-CN');
    script.crossOrigin = 'anonymous';
    script.async = true;
    
    // 添加错误处理
    script.onerror = function() {
      const container = document.getElementById('giscus-container');
      container.innerHTML = '<div style="padding: 20px; text-align: center; color: #666;">评论区加载失败，请确保您已登录GitHub账号并检查网络连接后刷新页面重试</div>';
    };
    
    // 添加到容器
    container.appendChild(script);
  });
}
</script>



