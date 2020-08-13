module.exports = {
  title: 'Mangokk',
  description: 'Mangokk Blog',
  // 用于修改内部的 Webpack 配置
  configureWebpack: {

  },
  themeConfig: {
    // 搜索框
    search: false,
    // 导航栏
    nav: [
      {
        text: "文章",
        link: "/articles/",
      },
    ],
    // 侧边栏
    sidebar: {
      '/articles': [
        {
          title: '文章1',
          path: '/articles/article1.html',      
        },
        {
          title: '文章2',
          path: '/articles/article2.html',      
        },
      ]
    },
    // 下一篇按钮
    nextLinks: false,
    // 上一篇按钮
    prevLinks: false,
    // 页面滚动
    smoothScroll: true
  }
}