#!/usr/bin/env node

"use strict";

const async = require("async");

const program = require("commander");

const copy = require("./copy");

/**
 * 主程序
 */
program
    .version("0.0.1")
    .usage("cli-1742")
    .description("this is cli-1742 of commander");

const commands = [{
    c: 'init-angular [st]',
    p: './lib/angular',
    d: '\n---- angular init ----\n'
}, {
    c: 'init-express [st]',
    p: './lib/express',
    d: '\n---- express init ----\n'
}, {
    c: 'init-koa [st]',
    p: './lib/koa',
    d: '\n---- koa init ----\n'
}, {
    c: 'init-vue [st]',
    p: './lib/vue',
    d: '\n---- vue init ----\n'
}, {
    c: 'ssr-vue [st]',
    p: './lib/vue-ssr',
    d: '\n---- vue init ssr ----\n'
}, {
    c: 'init-react [st]',
    p: './lib/react',
    d: '\n---- react init ----\n'
}]

for (let i = 0; i < commands.length; i++) {
    program.command(commands[i].c).action(function(st, value) {
        console.info(commands[i].d);
    
        const path = "./" + (st ? st : "");
        copy(commands[i].p, path);
    });
}

program.parse(process.argv);
