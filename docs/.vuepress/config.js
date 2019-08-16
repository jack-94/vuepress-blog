module.exports = {
  title: '健强的博客小站',
  description: 'Just playing around',
  locales: {
    '/': {
      lang: 'zh-CN', // 将会被设置为 <html> 的 lang 属性
    }
  },
  head: [ // 注入到当前页面的 HTML <head> 中的标签
    ['link', { rel: 'icon', href: '/favicon.jpg' }], // 增加一个自定义的 favicon(网页标签的图标)
    ['link', { rel: 'manifest', href: '/manifest.json' }], 
  ],
  // base: '/blog/', // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false // 代码块显示行号
  },
  // plugins: ['@vuepress/pwa'],
  themeConfig: {
    repo: 'jack-94/vuepress-blog',
    editLinks: true,
    editLinkText: '编辑文档',
    lastUpdated: '上次更新',
    nav:[ // 导航栏配置
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: '百度', link: 'https://www.baidu.com' }
    ],
    sidebar: [
      '/',
      '/about/',
      ['/news/', '这是新闻'],
    ],
    sidebarDepth: 2,
    plugins: {
      '@vuepress/pwa': {
        serviceWorker: true,
        updatePopup: true
      }
    }
  }
}