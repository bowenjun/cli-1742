# cli-1742

基于 `vue-cli` 的脚手架工具。

`vue` 作为一个渐进式框架，很多第三方库都需要自己再配置。`cli-1742` 就是在此 `vue-cli` 基础上集成了很多常用的库，方便公司内部或初学者使用。

## 更新日志

- 0.2.0 新增 `ssr` 服务端渲染模块，通过 `cli-1742 ssr` 命令新建项目

- 0.1.x 基础功能，完成通过 `cli-1742 init` 命令新建项目

## 安装方法

```
npm install cli-1742 -g
```

## 使用手册

### init

``` bash
# 1.初始化项目

# - new folder
cli-1742 init new-folder

# - exist folder
cli-1742 init

# 2.安装依赖
npm install

# 3.运行
npm run dev

# 4.打包
npm run build
```

### ssr

```bash
# 1.初始化项目

# - new folder
cli-1742 ssr new-folder

# - exist folder
cli-1742 ssr

# 2.安装依赖
{...同init}
```

## 简要说明

### 技术栈

- vue2

- vue-router

- vuex

- iview

- axios

- echarts

- less

- webpack

- ssr

### 常用模块

- filters

    文件路径：src/filters/index.js

    包括时间格式过滤器、空字符过滤器、...

- axios

    文件路径：src/service/*

    方法被封装在method.js中，具体的请求接口配置在service.js中

- vue-router

    文件路径：src/router/*

    路由配置在router.js中，路由按需加载

- vuex

    文件路径：src/store/*

    vuex的使用参考官方文档

---

作者：1742

邮箱：bvct1742@163.com
