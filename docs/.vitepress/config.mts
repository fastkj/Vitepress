import { defineConfig } from 'vitepress'
import fs from 'fs'
import path from 'path'

function getSidebarItems(dir) {
  const fullPath = path.resolve(process.cwd(), dir)

  function walkDir(currentPath, basePath = '') {
    const items = []
    const files = fs.readdirSync(currentPath)

    files.forEach(file => {
      const filePath = path.join(currentPath, file)
      const stat = fs.statSync(filePath)

      if (stat.isDirectory()) {
        items.push({
          text: file,
          collapsible: true,
          items: walkDir(filePath, path.join(basePath, file))
        })
      } else if (file.endsWith('.md')) {
        const name = file.replace('.md', '')
        const linkPath = `/${path.join('articles/Tutorial', basePath, name).replace(/\\/g, '/')}` // 不包含 docs
        items.push({ text: name, link: linkPath })
      }
    })

    return items
  }

  return walkDir(fullPath)
}

export default defineConfig({
  base: '/', 
  title: "Neat科技",
  description: "A VitePress Site",
  head: [
    ['link', { rel: 'icon', href: '/icons/my-icon.png' }]
  ],

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/' },
          { text: '示例', link: '/markdown-examples' },
        ],
        sidebar: [
          {
            text: '部署相关笔记',
            items: getSidebarItems('docs/articles/Tutorial')
          }
        ],
        outlineTitle: '文章目录',
        docFooter: {
          prev: '上一篇',
          next: '下一篇'
        },
        darkModeSwitchLabel: '外观',
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '菜单',
        socialLinks: [
          { icon: 'twitter', link: 'https://fastkj.top' },
          
        ],
        search: {
          provider: 'local'
        }
      }
    }
  }
})
