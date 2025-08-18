# ImtBlog

VuePress 2 博客。主分支 `main` 存代码，`gh-pages` 存构建后的站点文件。

## 在线地址
- 站点：`https://leslie-chan23.github.io/ImtBlog/`

## 开发
```bash
npm install
npm run docs:dev
```

## 构建与发布
- 推送到 `main` → GitHub Actions 自动构建并发布到 `gh-pages`
- 或本地一键发布：
```bash
npm run docs:deploy
```

## 备份与回滚
本仓库支持两种备份方式：

- 本地备份（忽略提交）：`backups/` 目录下会生成 zip（已加入 .gitignore）
  - `repo-main-<时间戳>.zip`：代码快照（HEAD）
  - `site-dist-<时间戳>.zip`：本地构建产物
  - `site-gh-pages-<时间戳>.zip`：`gh-pages` 分支站点快照

- 远程 Releases 备份（推荐）：推送标签触发工作流自动打包并上传至 Releases
  - 创建标签并推送：
    ```powershell
    # Windows PowerShell
    $ts = Get-Date -Format "yyyyMMdd-HHmmss"
    git tag "backup-$ts"
    git push origin "backup-$ts"
    ```
  - 触发的工作流会：
    - 构建站点并打包 `docs/.vuepress/dist`
    - 打包当前仓库代码（排除 `.git`、`node_modules` 等）
    - 若存在 `gh-pages` 分支，也会打包线上站点内容
    - 将以上 zip 作为 Release 资产上传

### 回滚指南
- 回滚代码到某个备份点：
  ```bash
  git fetch --tags
  git checkout <backup-时间戳>
  # 或强制回滚当前分支（谨慎）
  git reset --hard <backup-时间戳>
  git push -f origin main
  ```
- 回滚线上站点：
  1. 打开 Releases，下载对应 `site-gh-pages-*.zip`
  2. 解压后（可选）直接以本地方式重新发布：`npm run docs:deploy`
  3. 或在 `gh-pages` 分支中覆盖文件后推送

## 配置要点
- `docs/.vuepress/config.js` 的 `base` 必须为 `'/ImtBlog/'`（仓库页），若使用 `username.github.io` 用户主页则应为 `'/'`。
