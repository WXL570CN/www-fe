# www-fe
[TOC]

### 1.安装node (v8.10以上)
https://nodejs.org/zh-cn/ 下载安装长期支持版

### 2.拉代码
```
git clone ssh://git@gitlab.mf.plokij.com:30022/mafengs/www-fe.git
```

### 3.安装项目依赖
```
cd www-fe
npm install --verbose --registry=https://registry.npm.taobao.org
```

### 4.启动webpack dev server
```
npm start
```

### 5.打开对应链接
- demo：http://127.0.0.1:3000
- 会员中心：http://127.0.0.1:3000/user-center.html

### [目录结构](./tree.md)

### 参考资料
- [vue入门](https://cn.vuejs.org/v2/guide/) :（基础章节一定要熟悉） 
    - 基础
    - [数组更新注意事项](https://cn.vuejs.org/v2/guide/list.html#%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
    - [对象变更检测注意事项](https://cn.vuejs.org/v2/guide/list.html#%E5%AF%B9%E8%B1%A1%E5%8F%98%E6%9B%B4%E6%A3%80%E6%B5%8B%E6%B3%A8%E6%84%8F%E4%BA%8B%E9%A1%B9)
- [路由vue router](https://router.vuejs.org/zh/)
    - [嵌套路由](https://router.vuejs.org/zh/guide/essentials/nested-routes.html)
    - [数据获取](https://router.vuejs.org/zh/guide/advanced/data-fetching.html)
    - [导航守卫](
https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)
- [状态管理简介](https://cn.vuejs.org/v2/guide/state-management.html) : 单个组件时使用
- [状态管理进阶](https://vuex.vuejs.org/zh/) ：跨组件使用


