#!/usr/bin/env node

/**
 * 文章日期更新工具
 * 功能：遍历movie文件夹下的所有文章，记录第一次和最后一次编辑时间，并添加到文章末尾
 */

const fs = require('fs');
const path = require('path');

// 定义movie文件夹路径
const movieDirPath = path.join(__dirname, 'docs', 'articles', 'movie');

/**
 * 格式化日期为指定格式：年月日小时分钟
 * @param {Date} date - 日期对象
 * @returns {string} 格式化后的日期字符串
 */
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${year}${month}${day}${hours}${minutes}`;
}

/**
 * 处理单个文章文件
 * @param {string} filePath - 文件路径
 */
async function processArticleFile(filePath) {
  try {
    // 获取文件状态信息
    const stats = fs.statSync(filePath);
    const createTime = stats.birthtime;
    const modifyTime = stats.mtime;

    // 格式化日期
    const formattedCreateTime = formatDate(createTime);
    const formattedModifyTime = formatDate(modifyTime);

    // 读取文件内容
    let content = fs.readFileSync(filePath, 'utf8');

    // 检查是否已经添加过时间信息
    const timeInfoRegex = /\n*<!-- 文章编辑时间信息 -->\n*.*\n*<!-- 编辑时间信息结束 -->/;
    if (timeInfoRegex.test(content)) {
      // 更新已存在的时间信息
      content = content.replace(timeInfoRegex, `
<!-- 文章编辑时间信息 -->
首次编辑时间：${formattedCreateTime}
最后编辑时间：${formattedModifyTime}
<!-- 编辑时间信息结束 -->`);
    } else {
      // 添加新的时间信息
      content += `

<!-- 文章编辑时间信息 -->
首次编辑时间：${formattedCreateTime}
最后编辑时间：${formattedModifyTime}
<!-- 编辑时间信息结束 -->`;
    }

    // 写入更新后的内容
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`已更新文件: ${filePath}`);
  } catch (error) {
    console.error(`处理文件时出错: ${filePath}`, error);
  }
}

/**
 * 遍历并处理所有文章文件
 */
function processAllArticles() {
  try {
    // 读取movie文件夹下的所有文件
    const files = fs.readdirSync(movieDirPath);

    // 过滤出.md文件
    const mdFiles = files.filter(file => path.extname(file) === '.md');

    // 处理每个.md文件
    mdFiles.forEach(file => {
      const filePath = path.join(movieDirPath, file);
      processArticleFile(filePath);
    });

    console.log('所有文章处理完成！');
  } catch (error) {
    console.error('处理文章时出错:', error);
  }
}

// 执行主函数
processAllArticles();