
---

# VitePress 项目创建与部署 GitHub 教程

VitePress 是一个由 Vue 驱动的静态网站生成器，专注于生成文档。以下是从创建 VitePress 项目到部署到 GitHub Pages 的详细步骤。

## 1. 环境准备

在开始之前，请确保你的电脑上已经安装了以下工具：

- [Node.js](https://nodejs.org/)（建议版本：14.x 或更高）
- [Git](https://git-scm.com/)

你可以通过在命令行中输入以下命令来检查安装情况：

```md
node -v
git --version
```

如果没有安装 Node.js 或 Git，请先前往上述链接下载并安装。

## 2. 创建 VitePress 项目

### 2.1. 初始化项目

在终端中，导航到你希望创建项目的目录，然后运行以下命令初始化一个新的 VitePress 项目：

```md
mkdir my-vitepress-site
cd my-vitepress-site
npm init
```

### 2.2. 安装 VitePress

在项目根目录下，运行以下命令安装 VitePress：

```md
npm install vitepress
```

### 2.3. 创建项目结构

在项目目录下创建以下文件和文件夹结构：

```md
mkdir docs
echo '# Hello VitePress' > docs/index.md
```

此时，`docs/index.md` 文件将成为你的首页内容。

### 2.4. 启动开发服务器

在项目根目录下运行以下命令启动本地开发服务器：

```md
npx vitepress dev docs
```

成功后，在浏览器中访问 `http://localhost:5173`，即可看到你的 VitePress 项目。

## 3. 部署到 GitHub Pages

### 3.1. 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com/)，点击右上角的 `+` 号，选择 `New repository`。
2. 创建一个新的仓库，仓库名可以是任意名称，如 `my-vitepress-site`。

### 3.2. 配置 VitePress 部署信息

#### 3.2.1. 更新 `package.json`

在 `package.json` 文件中添加或修改以下内容：

```json
{
  "scripts": {
    "build": "vitepress build docs",
    "serve": "vitepress serve docs",
    "deploy": "vitepress build docs && cd docs/.vitepress/dist && git init && git add . && git commit -m 'Deploy to GitHub Pages' && git remote add origin https://github.com/username/my-vitepress-site.git && git branch -M main && git push -f origin main && cd -"
  }
}
```

请将 `username` 替换为你的 GitHub 用户名，将 `my-vitepress-site` 替换为你的仓库名。

#### 3.2.2. 配置 `docs/.vitepress/config.js`

在 `docs/.vitepress/` 目录下创建或编辑 `config.js` 文件，添加以下内容：

```javascript
module.exports = {
  base: '/my-vitepress-site/',  // 仓库名，确保以斜杠开头和结尾
  title: 'My VitePress Site',
  description: 'Just playing around'
}
```

请将 `my-vitepress-site` 替换为你的 GitHub 仓库名称。

### 3.3. 部署到 GitHub Pages

在项目根目录下运行以下命令进行部署：

```md
npm run deploy
```

部署完成后，VitePress 项目将被推送到 GitHub Pages。

## 4. 查看线上项目

部署成功后，访问 `https://username.github.io/my-vitepress-site/`（将 `username` 替换为你的 GitHub 用户名，将 `my-vitepress-site` 替换为你的仓库名），即可看到你的 VitePress 项目。

---

## 常见问题

### 1. 如何清理项目？

你可以使用以下命令清理已生成的文件：

```md
npm run clean
```

### 2. 如何更新 VitePress？

使用以下命令可以将 VitePress 更新到最新版本：

```md
npm update vitepress
```

## 结语

通过以上步骤，你已经成功创建了一个 VitePress 项目，并部署到了 GitHub Pages 上。如果你希望对项目进行更多的个性化设置，请参考 [VitePress 官方文档](https://vitepress.dev/).

---