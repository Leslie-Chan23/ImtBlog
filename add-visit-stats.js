const fs = require('fs');
const path = require('path');

// 定义movie目录路径
const movieDirPath = path.join(__dirname, 'docs', 'articles', 'movie');

// 定义要添加的访问统计代码
const visitStatsCode = '有 <span id="busuanzi_page_pv">加载中...请刷新~~~</span> 个小伙伴看过本文';

// 定义旧版访问统计代码的正则表达式模式
// 这个正则表达式可以匹配任何包含busuanzi_page_pv的类似结构
const oldVisitStatsPattern = /有\s*<span\s+id="busuanzi_page_pv">.*?<\/span>\s*个小伙伴看过本文/;

// 读取movie目录下的所有文件
fs.readdir(movieDirPath, (err, files) => {
  if (err) {
    console.error('读取目录失败:', err);
    return;
  }

  // 过滤出md文件，并跳过index.md
  const mdFiles = files.filter(file => 
    file.endsWith('.md') && file.toLowerCase() !== 'index.md'
  );

  console.log(`找到 ${mdFiles.length} 个文章文件需要处理\n`);

  // 遍历每个md文件
  mdFiles.forEach((file, index) => {
    const filePath = path.join(movieDirPath, file);
    
    // 读取文件内容
    fs.readFile(filePath, 'utf8', (err, content) => {
      if (err) {
        console.error(`读取文件 ${file} 失败:`, err);
        return;
      }

      let newContent = content;
      let action = '';
      
      // 检查是否已包含新的访问统计代码
      if (content.trim().endsWith(visitStatsCode)) {
        action = '已存在最新访问统计代码，跳过';
      } else if (oldVisitStatsPattern.test(content)) {
        // 替换旧版访问统计代码
        newContent = content.replace(oldVisitStatsPattern, visitStatsCode);
        action = '成功替换旧版访问统计代码';
      } else {
        // 在文件末尾添加新的访问统计代码
        newContent = content.trim() + '\n\n' + visitStatsCode + '\n';
        action = '成功添加访问统计代码';
      }

      // 如果内容有变化，则写入文件
      if (newContent !== content) {
        fs.writeFile(filePath, newContent, 'utf8', (err) => {
          if (err) {
            console.error(`写入文件 ${file} 失败:`, err);
          } else {
            console.log(`${index + 1}/${mdFiles.length} ${file}: ${action}`);
          }
        });
      } else {
        console.log(`${index + 1}/${mdFiles.length} ${file}: ${action}`);
      }
    });
  });
});