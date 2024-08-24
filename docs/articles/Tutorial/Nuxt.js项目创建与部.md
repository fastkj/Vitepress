
---

# Nuxt.js 项目创建与部署 GitHub 教程

Nuxt.js 是一个基于 Vue.js 的框架，用于构建服务器渲染应用（SSR）和静态站点生成器（SSG）。以下是从创建 Nuxt.js 项目到部署到 GitHub Pages 的详细步骤。

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

## 2. 创建 Nuxt.js 项目

### 2.1. 初始化项目

在终端中，导航到你希望创建项目的目录，然后运行以下命令：

```md
npx create-nuxt-app my-nuxt-app
```

此命令将引导你完成项目初始化过程，包括选择框架、UI 库、测试框架等。根据提示选择适合你的配置。

### 2.2. 进入项目目录

完成项目初始化后，进入项目目录：

```md
cd my-nuxt-app
```

### 2.3. 启动开发服务器

在项目根目录下运行以下命令启动开发服务器：

```md
npm run dev
```

成功后，在浏览器中访问 `http://localhost:3000`，即可看到你的 Nuxt.js 项目。

## 3. 配置 Nuxt.js 进行静态站点生成

Nuxt.js 可以将项目生成静态站点，这对于部署到 GitHub Pages 非常适用。

### 3.1. 修改 `nuxt.config.js`

在项目根目录下，找到并编辑 `nuxt.config.js` 文件，添加或修改以下内容：

```javascript
export default {
  target: 'static',
  router: {
    base: '/my-nuxt-app/'
  }
}
```

将 `my-nuxt-app` 替换为你的 GitHub 仓库名称。

### 3.2. 生成静态文件

在项目根目录下运行以下命令生成静态文件：

```md
npm run generate
```

生成的静态文件将被放置在 `dist/` 目录中。

## 4. 部署到 GitHub Pages

### 4.1. 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com/)，点击右上角的 `+` 号，选择 `New repository`。
2. 创建一个新的仓库，仓库名可以是 `my-nuxt-app`。

### 4.2. 配置 `package.json`

在 `package.json` 文件中添加或修改以下内容：

```json
"scripts": {
  "deploy": "npm run generate && git add dist && git commit -m 'Deploy to GitHub Pages' && git subtree push --prefix dist origin gh-pages"
}
```

### 4.3. 初始化 Git 仓库

如果你尚未在项目中初始化 Git 仓库，可以运行以下命令：

```md
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/my-nuxt-app.git
git branch -M main
git push -u origin main
```

请将 `username` 替换为你的 GitHub 用户名，将 `my-nuxt-app` 替换为你的仓库名。

### 4.4. 部署到 GitHub Pages

在项目根目录下运行以下命令进行部署：

```md
npm run deploy
```

部署成功后，Nuxt.js 项目将被推送到 GitHub Pages 的 `gh-pages` 分支。

## 5. 查看线上项目

部署成功后，访问 `https://username.github.io/my-nuxt-app/`（将 `username` 替换为你的 GitHub 用户名，将 `my-nuxt-app` 替换为你的仓库名），即可看到你的 Nuxt.js 项目。

---

## 常见问题

### 1. 如何清理生成的静态文件？

你可以使用以下命令清理生成的静态文件：

```md
npm run clean
```

### 2. 如何更新 Nuxt.js？

使用以下命令可以将 Nuxt.js 更新到最新版本：

```md
npm update nuxt
```

## 结语

通过以上步骤，你已经成功创建了一个 Nuxt.js 项目，并部署到了 GitHub Pages 上。如果你希望对项目进行更多的个性化设置，请参考 [Nuxt.js 官方文档](https://nuxtjs.org/docs/).

---
