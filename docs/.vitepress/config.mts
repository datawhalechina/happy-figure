import { defineConfig } from 'vitepress'
import { withMermaid } from 'vitepress-plugin-mermaid'

// https://vitepress.dev/reference/site-config

// 1. 获取环境变量并判断
// 如果环境变量 EDGEONE 等于 '1'，说明在 EdgeOne 环境，使用根路径 '/'
// 否则默认是 GitHub Pages 环境，使用仓库子路径 '/easy-vecdb/'
const isEdgeOne = process.env.EDGEONE === '1'
const baseConfig = isEdgeOne ? '/' : '/happy-figure/'

export default withMermaid(defineConfig({
  lang: 'zh-CN',
  title: "Happy Figure",
  description: "AI科研绘图实战教程",
  base: baseConfig,
  head: [
    ['link', { rel: 'icon', href: `${baseConfig}happy-figure-logo.png` }]
  ],
  markdown: {
    math: true
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/happy-figure-logo.png',
    nav: [
      { text: 'PDF版本下载', link: 'https://github.com/BAIKEMARK/happy-figure/releases' },
    ],
    search: {
      provider: 'local',
      options: {
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
    },
    sidebar: [
      {
        text: '前言',
        link: '/preface'
      },
      {
        text: '第一部分：认知与工具 (入门篇)',
        items: [
          { text: '第一章：认识科研绘图', link: '/chapter1/' },
          { text: '第二章：AI 绘图核心技法与工具链', link: '/chapter2/' }
        ]
      },
      {
        text: '第二部分：方法与实战 (实战篇)',
        items: [
          { text: '第三章：提示词工程', link: '/chapter3/' },
          { text: '第四章：场景实战', link: '/chapter4/' }
        ]
      },
      {
        text: '第三部分：交付与合规 (进阶篇)',
        items: [
          { text: '第五章：高阶控图 (🚧施工中)', link: '/chapter5/' },
          { text: '第六章：避坑指南 (🚧施工中)', link: '/chapter6/' }
        ]
      },
      {
        text: '结语 (🚧施工中)',
        link: '/chapter7/'
      },
      {
        text: '📎 附录：AI 科研绘图实战速查手册',
        link: '/appendix/quick-reference'
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/BAIKEMARK/happy-figure' }
    ],

    editLink: {
      pattern: 'https://github.com/BAIKEMARK/happy-figure/blob/main/docs/:path'
    },

    footer: {
      message: '<a href="https://beian.miit.gov.cn/" target="_blank">京ICP备2026002630号-1</a> | <a href="https://beian.mps.gov.cn/#/query/webSearch?code=11010602202215" rel="noreferrer" target="_blank">京公网安备11010602202215号</a>',
      copyright: '本作品采用 <a href="http://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank">知识共享署名-非商业性使用-相同方式共享 4.0 国际许可协议（CC BY-NC-SA 4.0）</a> 进行许可'
    }
  },
  mermaid: {
    // 直接在 mermaid 对象下配置，不再嵌套
    flowchart: {
      useMaxWidth: true,
      htmlLabels: true,
      curve: 'basis',
      padding: 15, // 缩小节点内边距，减少空白
      nodeSpacing: 30, // 缩小节点间距
      rankSpacing: 40  // 缩小层级间距
    }
  }
}))
