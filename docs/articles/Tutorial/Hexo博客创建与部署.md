
---

# Hexo 博客创建与部署 GitHub 教程

Hexo 是一个快速、简洁且高效的静态博客框架，基于 Node.js。以下是从创建 Hexo 项目到部署到 GitHub 的详细步骤。

## 1. 环境准备

在开始之前，请确保你的电脑上已经安装了以下环境：

- [Node.js](https://nodejs.org/)（确保 Node.js 版本在 10.13.0 或更高）
- [Git](https://git-scm.com/)

你可以通过在命令行中输入以下命令来检查安装情况：

```bash
node -v
git --version
```

如果没有安装 Node.js 或 Git，请先前往上述链接下载并安装。

## 2. 安装 Hexo

打开终端或命令行，输入以下命令全局安装 Hexo：

```bash
npm install -g hexo-cli
```

安装完成后，可以通过以下命令验证安装是否成功：

```bash
hexo -v
```

## 3. 创建 Hexo 项目

在终端中，导航到你希望创建博客的目录，然后运行以下命令：

```bash
hexo init my-blog
cd my-blog
npm install
```

这里 `my-blog` 是你的博客项目文件夹名称。安装完成后，项目结构会被初始化，并且会自动安装依赖包。

## 4. 本地预览博客

在项目根目录下执行以下命令生成静态文件并启动本地服务器：

```bash
hexo generate
hexo server
```

成功后，在浏览器中访问 `http://localhost:4000`，就可以看到你的 Hexo 博客。

## 5. 部署到 GitHub Pages

### 5.1. 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com/)，点击右上角的 `+` 号，选择 `New repository`。
2. 创建一个新的仓库，仓库名格式为 `username.github.io`（其中 `username` 是你的 GitHub 用户名），例如：`fastkj.github.io`。

### 5.2. 配置 Hexo 部署信息

在 Hexo 项目的根目录下找到 `_config.yml` 文件，并添加或修改以下内容：

```yaml
deploy:
  type: git
  repo: https://github.com/username/username.github.io.git
  branch: main
```

请将 `username` 替换为你的 GitHub 用户名。

### 5.3. 安装部署插件

安装 Hexo 的 Git 部署插件：

```bash
npm install hexo-deployer-git --save
```

### 5.4. 部署到 GitHub Pages

在 Hexo 项目根目录下执行以下命令生成并部署静态文件：

```bash
hexo generate
hexo deploy
```

执行完毕后，你的博客就会自动部署到 GitHub Pages 上。

## 6. 查看线上博客

部署成功后，访问 `https://username.github.io`（将 `username` 替换为你的 GitHub 用户名），即可看到你的博客。

---

## 常见问题

### 1. 如何清理 Hexo 缓存和已生成的文件？

当你遇到问题或需要清理缓存时，可以使用以下命令：

```bash
hexo clean
```

### 2. 如何更新 Hexo？

使用以下命令可以将 Hexo 更新到最新版本：

```bash
npm update hexo-cli -g
```

## 结语

通过以上步骤，你已经成功创建了一个 Hexo 博客，并部署到了 GitHub Pages 上。如果你希望对博客进行更多的个性化设置，请参考 [Hexo 官方文档](https://hexo.io/docs/)。

---