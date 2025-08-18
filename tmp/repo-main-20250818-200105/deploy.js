const ghpages = require('gh-pages');
const path = require('path');

// 配置选项，设置较短的临时目录路径
ghpages.publish(path.join(__dirname, 'docs/.vuepress/dist'), {
  dotfiles: true,
  // 使用较短的临时目录路径
  tmpdir: path.join(__dirname, '.tmp'),
  // 避免大规模 rm 导致 Windows ENAMETOOLONG
  add: true,
  // GitHub Pages 关闭 Jekyll 干扰
  nojekyll: true,
  // 明确目标分支
  branch: 'gh-pages',
  // 配置git命令的路径（如果有必要）
  // git: 'C:/Program Files/Git/bin/git.exe',
  // 可以添加消息来标识部署
  message: 'Deploy site updates'
}, function(err) {
  if (err) {
    console.error('部署失败:', err);
    process.exit(1);
  } else {
    console.log('部署成功!');
    process.exit(0);
  }
});