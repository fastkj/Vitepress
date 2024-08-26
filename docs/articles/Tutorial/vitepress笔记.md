VitePress 安装笔记：

---

# VitePress 安装笔记

1. 不要使用中文目录
2. 设置淘宝镜像源：`pnpm config set registry https://registry.npmmirror.com`
3. 安装 VitePress：`pnpm add -D vitepress`
4. 初始化 VitePress 项目：`pnpm vitepress init`
5. 创建 `./docs` 文件夹
6. 如果样式丢失，在 `docs/.vitepress/config.mts` 文件中添加 `base: "."`
7. 启动项目：`pnpm run docs:dev`

### Git 操作

1. 初始化 Git 仓库：
   ```bash
   git init
   git add README.md
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/fastkj/vitepress.git
   git push -u origin main
   ```

2. 配置 Git 用户信息：
   ```bash
   git config --global user.name "GitHub仓库名"
   git config --global user.email "GitHub邮箱账号"
   ```

3. 生成 SSH 密钥：
   ```bash
   ssh-keygen -t ed25519 -C "GitHub邮箱账号"
   ```

4. 重新提交代码：
   ```bash
   git add .
   git commit -m "Initial commit"
   git push -u origin main
   ```

5. 拉取远程仓库的更改并与本地分支合并：
   ```bash
   git pull origin main
   ```

6. 安装依赖并提交锁定文件：
   ```bash
   npm install # 或 yarn install
   git add package-lock.json # 或 yarn.lock
   ```

---

