

---

# Jekyll 博客创建与部署 GitHub 教程

Jekyll 是一个由 Ruby 驱动的静态网站生成器，特别适合用于创建博客和个人网站。以下是从创建 Jekyll 项目到部署到 GitHub Pages 的详细步骤。

## 1. 环境准备

在开始之前，请确保你的电脑上已经安装了以下工具：

- [Ruby](https://www.ruby-lang.org/en/downloads/)（建议版本：2.5.0 或更高）
- [RubyGems](https://rubygems.org/pages/download)
- [Bundler](https://bundler.io/)
- [Git](https://git-scm.com/)

你可以通过在命令行中输入以下命令来检查安装情况：

```md
ruby -v
gem -v
bundle -v
git --version
```

如果没有安装 Ruby 或 Git，请先前往上述链接下载并安装。

### 1.1. 安装 Jekyll 和 Bundler

使用以下命令安装 Jekyll 和 Bundler：

```md
gem install jekyll bundler
```

## 2. 创建 Jekyll 项目

在终端中，导航到你希望创建博客的目录，然后运行以下命令：

```md
jekyll new my-jekyll-site
cd my-jekyll-site
```

这里 `my-jekyll-site` 是你的博客项目文件夹名称。Jekyll 将会创建一个包含基本结构的项目目录。

### 2.1. 安装依赖

进入项目目录后，使用 Bundler 安装所需的依赖：

```md
bundle install
```

### 2.2. 启动本地服务器

在项目根目录下，运行以下命令启动本地服务器：

```md
bundle exec jekyll serve
```

成功后，在浏览器中访问 `http://localhost:4000`，即可看到你的 Jekyll 博客。

## 3. 部署到 GitHub Pages

### 3.1. 创建 GitHub 仓库

1. 登录 [GitHub](https://github.com/)，点击右上角的 `+` 号，选择 `New repository`。
2. 创建一个新的仓库，仓库名可以是 `username.github.io`（其中 `username` 是你的 GitHub 用户名）或者其他名称。

### 3.2. 配置 Jekyll 部署信息

#### 3.2.1. 更新 `Gemfile`

在 `Gemfile` 文件中，确保包含以下内容：

```ruby
gem "jekyll"
gem "github-pages", group: :jekyll_plugins
```

然后运行以下命令安装 GitHub Pages 相关的插件：

```md
bundle install
```

#### 3.2.2. 配置 `_config.yml`

在项目根目录下找到并编辑 `_config.yml` 文件，确保包含以下内容：

```yaml
# 站点的基本信息
title: My Jekyll Blog
description: >- # 这个 ">" 保持描述为多行文字
  欢迎来到我的 Jekyll 博客。
baseurl: "/my-jekyll-site" # 仓库名称，以斜杠开头
url: "https://username.github.io" # 网站的根 URL

# 构建设置
markdown: kramdown
```

请将 `username` 替换为你的 GitHub 用户名，将 `my-jekyll-site` 替换为你的仓库名（如果你的仓库名是 `username.github.io`，则可以将 `baseurl` 留空）。

### 3.3. 部署到 GitHub Pages

#### 3.3.1. 初始化 Git 仓库

如果你尚未在项目中初始化 Git 仓库，可以运行以下命令：

```md
git init
git add .
git commit -m "Initial commit"
```

#### 3.3.2. 添加远程仓库并推送

将你的项目连接到 GitHub 仓库，并推送到 `main` 分支：

```md
git remote add origin https://github.com/username/my-jekyll-site.git
git branch -M main
git push -u origin main
```

请将 `username` 替换为你的 GitHub 用户名，将 `my-jekyll-site` 替换为你的仓库名。

### 3.4. 查看线上项目

部署成功后，访问 `https://username.github.io/my-jekyll-site/`（将 `username` 替换为你的 GitHub 用户名，将 `my-jekyll-site` 替换为你的仓库名），即可看到你的 Jekyll 博客。

---

## 常见问题

### 1. 如何清理 Jekyll 缓存？

你可以使用以下命令清理生成的文件和缓存：

```md
bundle exec jekyll clean
```

### 2. 如何更新 Jekyll？

使用以下命令可以将 Jekyll 更新到最新版本：

```md
gem update jekyll
```

## 结语

通过以上步骤，你已经成功创建了一个 Jekyll 博客，并部署到了 GitHub Pages 上。如果你希望对博客进行更多的个性化设置，请参考 [Jekyll 官方文档](https://jekyllrb.com/docs/).

---
