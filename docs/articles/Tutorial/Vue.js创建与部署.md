
---

# Vue.js 项目创建与部署 GitHub 教程

Vue.js 是一个渐进式的 JavaScript 框架，用于构建用户界面。以下是从创建 Vue 项目到部署到 GitHub Pages 的详细步骤。

## 1. 环境准备

在开始之前，请确保你的电脑上已经安装了以下工具：

- [Node.js](https://nodejs.org/)（建议版本：12.x 或更高）
- [Git](https://git-scm.com/)

你可以通过在命令行中输入以下命令来检查安装情况：

```md
node -v
git --version
```

如果没有安装 Node.js 或 Git，请先前往上述链接下载并安装。

## 2. 创建 Vue 项目

### 2.1. 安装 Vue CLI

Vue CLI 是一个标准化的 Vue.js 项目脚手架。你可以通过以下命令全局安装 Vue CLI：

```md
npm install -g @vue/cli
```

安装完成后，可以通过以下命令验证安装是否成功：

```md
vue --version
```

### 2.2. 创建项目

在终端中，导航到你希望创建项目的目录，然后运行以下命令：

```md
vue create my-vue-app
```

此命令会提示你选择一系列项目配置选项。你可以选择默认配置或根据自己的需求自定义配置。创建完成后，进入项目目录：

```md
cd my-vue-app
```

### 2.3. 启动开发服务器

在项目根目录下运行以下命令启动开发服务器：

```md
npm run serve
```

成功后，在浏览器中访问 `http://localhost:8080`，即可看到你的 Vue 项目。

## 3. 部署到 GitHub Pages

### 3.1. 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com/)，点击右上角的 `+` 号，选择 `New repository`。
2. 创建一个新的仓库，仓库名可以是任意名称，如 `my-vue-app`。

### 3.2. 配置 Vue 项目

#### 3.2.1. 安装部署插件

在项目根目录下，运行以下命令安装 `gh-pages` 插件：

```md
npm install gh-pages --save-dev
```

#### 3.2.2. 修改 `vue.config.js`

在项目根目录下创建或编辑 `vue.config.js` 文件，并添加以下内容：

```javascript
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-vue-app/'
    : '/'
}
```

请将 `my-vue-app` 替换为你的 GitHub 仓库名称。

#### 3.2.3. 更新 `package.json`

在 `package.json` 文件中添加以下内容：

```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

### 3.3. 部署到 GitHub Pages

在项目根目录下运行以下命令进行部署：

```md
npm run deploy
```

部署完成后，Vue 项目将被推送到 GitHub Pages。

## 4. 查看线上项目

部署成功后，访问 `https://username.github.io/my-vue-app/`（将 `username` 替换为你的 GitHub 用户名，将 `my-vue-app` 替换为你的仓库名），即可看到你的 Vue 项目。

---

## 常见问题

### 1. 如何清理项目？

你可以使用以下命令清理已生成的文件：

```md
npm run clean
```

### 2. 如何更新 Vue CLI？

使用以下命令可以将 Vue CLI 更新到最新版本：

```md
npm update -g @vue/cli
```

## 结语

通过以上步骤，你已经成功创建了一个 Vue.js 项目，并部署到了 GitHub Pages 上。如果你希望对项目进行更多的个性化设置，请参考 [Vue.js 官方文档](https://vuejs.org/v2/guide/)。

---
