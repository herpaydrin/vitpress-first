import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitpress-first/",

  title: "Home",
  description: "A person bolg",

  lastUpdated: true,
  cleanUrls: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],
    sidebar: [
      {
        text: '示例',
        items: [
          { text: '路由示例', link: '/examples/route-examples' },
          { text: 'Markdown示例', link: '/examples/markdown-examples' },
          { text: 'API 示例', link: '/examples/api' }
        ]
      },
      {
        text: '简历',
        items: [
          { text: '个人简历', link: '/resume/' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    localSearch: {
      localSearch: {
        locales: {
          zh: {
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                noResultsText: '无法找到相关结果',
                resetButtonTitle: '清除查询条件',
                footer: {
                  selectText: '选择',
                  navigateText: '切换'
                }
              }
            }
          }
        }
      }
    }
  },
  rewrites: {
    // 'examples/rewrites/pkg-a/package-a.md': 'pkg-a/index.md',
    // 'examples/rewrites/pkg-a/package-b.md': 'pkg-b/index.md',
    'examples/rewrites/:pkg/(.*).md': ':pkg/(.*).md'
  },
})
