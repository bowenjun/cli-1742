#!/usr/bin/env node

"use strict";

const async = require("async");

const program = require("commander");

/**
 * 初始化 angular 方法
 * 该方法传入直接复制 angular-lib 文件夹中文件到指定目录中
 */
const angular_init_func = require("./methods/angular-init");

/**
 * 初始化 express 方法
 * 该方法传入直接复制 express-lib 文件夹中文件到指定目录中
 */
const express_init_func = require("./methods/express-init");

/**
 * 初始化 vue 方法
 * 该方法传入直接复制 vue-lib 文件夹中文件到指定目录中
 */
const vue_init_func = require("./methods/vue-init");

/**
 * 初始化 vue 方法
 * 项目可以通过 ssr 服务端渲染
 * 该方法传入直接复制 vue-ssr-lib 文件夹中文件到指定目录中
 */
const vue_init_ssr_func = require("./methods/vue-init-ssr");

/**
 * 主程序
 */
program
    .version("0.0.1")
    .usage("cli-1742")
    .description("this is cli-1742 of commander");

/**
 * 初始化 angular 命令
 */
program.command("init-angular [st]").action(function(st, value) {
    console.info("\n---- angular init ----\n");

    const path = "./" + (st ? st : "");
    angular_init_func(path);
});

/**
 * 初始化 express 项目
 */
program.command("init-express [st]").action(function(st, value) {
    console.info("\n---- express init ----\n");

    const path = "./" + (st ? st : "");
    express_init_func(path);
});

/**
 * 初始化 vue ssr 项目
 */
program.command("init-vue [st]").action(function(st, value) {
    console.info("\n---- vue init ----\n");

    const path = "./" + (st ? st : "");
    vue_init_func(path);
});

/**
 * 初始化 vue ssr 项目
 */
program.command("ssr-vue [st]").action(function(st, value) {
    console.info("\n---- vue init ssr ----\n");

    const path = "./" + (st ? st : "");
    vue_init_ssr_func(path);
});

program.parse(process.argv);
