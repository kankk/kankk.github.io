module.exports = {
  title: 'Hello Mangokk',
  description: 'Mangokkkkkkkk',
  // 用于修改内部的 Webpack 配置
  configureWebpack: {

  },
  themeConfig: {
    // 搜索框
    search: false,
    // 导航栏
    nav: [
      {
        text: "指南",
        link: "/guide/",
      },
      {
        text: "手册",
        link: "/handbook/",
      },
    ],
    // 侧边栏
    sidebar: [
      {
        title: '文章 1',
        path: '/',
      },
      {
        title: '文章 2',
        path: '/'
      }
    ],
    // 下一篇按钮
    nextLinks: false,
    // 上一篇按钮
    prevLinks: false,
    // 页面滚动
    smoothScroll: true
  }
}