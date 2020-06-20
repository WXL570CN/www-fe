```
.
├── build 编译后的文件
├── config 环境配置
│   ├── default.js
│   ├── development.js
│   ├── production.js
│   └── testing.js
├── src
│   ├── index.html demo
│   ├── index.js demo入口
│   ├── pages demo页面
│   │   └── home
│   │       ├── home.css
│   │       ├── home.vue
│   │       └── page1.vue
│   ├── routes.js demo路由
│   └── user-center 会员中心
│       ├── MFConfig.js web应用配置
│       ├── assets 
│       │   └── static 静态资源
│       ├── class-query.html
│       ├── css
│       │   ├── base.css
│       │   └── personal-center.css
│       ├── footer.ejs 底部html
│       ├── header.ejs 头部html
│       ├── index.js 应用入口
│       ├── js
│       │   ├── base.js
│       │   ├── getToken.js
│       │   ├── lib
│       │   │   └── BaseAjax.js
│       │   ├── personal-center.js
│       │   ├── quote.js
│       │   └── user-center
│       │       ├── MFApi.js
│       │       ├── MFUserCenter.js
│       │       └── init.js
│       ├── logger.js
│       ├── pages 会员中心页面及组件
│       │   └── home
│       │       ├── collect 我的收藏
│       │       │   ├── my-collect-vue-controller.js
│       │       │   └── my-collect.vue
│       │       ├── custom-push 我的定制
│       │       │   └── cutsom-push.vue
│       │       ├── dev-template.vue 代码模版
│       │       ├── focus 我的关注
│       │       │   ├── my-focus-vue-controller.js
│       │       │   └── my-focus.vue
│       │       ├── home.vue 会员中心html结构布局
│       │       ├── over-nav-bar.vue 会员中心头部导航
│       │       ├── todo.html
│       │       ├── user-center-content.vue 会员中心内容区
│       │       ├── user-center-sidebar.vue 会员中心侧边导航
│       │       └── user-summary.vue 会员中心用户信息，右侧头部
│       ├── personal-center.ejs 会员中心html入口
│       ├── routes 路由
│       │   ├── home.js
│       │   └── index.js
│       ├── store 状态
│       │   ├── index.js
│       │   └── modules
│       │       ├── summary.js
│       │       └── user-info.js
│       └── util.js
├── tree.md
├── webpack webpack配置
│   ├── default 
│   │   ├── index.js
│   │   ├── plugins
│   │   │   ├── BundleAnalyzerPlugin.js
│   │   │   ├── CaseSensitivePathsPlugin.js
│   │   │   ├── CopyWebpackPlugin.js
│   │   │   ├── HtmlWebpackPlugin.js
│   │   │   ├── MiniCssExtractPlugin.js
│   │   │   ├── VueLoaderPlugin.js
│   │   │   └── index.js
│   │   └── rules
│   │       ├── css.js
│   │       ├── ejs.js
│   │       ├── fonts.js
│   │       ├── images.js
│   │       ├── index.js
│   │       ├── js.js
│   │       ├── sass.js
│   │       └── vue.js
│   ├── development
│   │   ├── DashboardPlugin.js
│   │   ├── devServer.js
│   │   └── index.js
│   ├── local.js
│   └── production
│       └── index.js
└── webpack.config.js

```

