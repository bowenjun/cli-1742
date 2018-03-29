const fs = require('fs'),
    stat = fs.stat;

const path = require('path');
let dirc = null;

var copy = function (src, dst) {
    // 读取目录中的所有文件/目录
    fs
        .readdir(src, function (err, paths) {
            if (err) {
                throw err;
            }
            paths
                .forEach(function (path) {
                    var _src = src + '/' + path,
                        _dst = dst + '/' + path,
                        readable,
                        writable;
                    stat(_src, function (err, st) {
                        if (err) {
                            throw err;
                        }
                        console.info('create: ' + _src.replace(dirc + '/', ''));
                        // 判断是否为文件
                        if (st.isFile()) {
                            // 创建读取流
                            readable = fs.createReadStream(_src);
                            // 创建写入流
                            writable = fs.createWriteStream(_dst);
                            // 通过管道来传输流
                            readable.pipe(writable// 如果是目录则递归调用自身
                            );
                        } else if (st.isDirectory()) {
                            exists(_src, _dst, copy);
                        }
                    });
                });
        });
};

// 在复制目录前需要判断该目录是否存在，不存在需要先创建目录
var exists = function (src, dst, callback) {
    fs
        .exists(dst, function (exists) {
            // 已存在
            if (exists) {
                callback(src, dst);
            } else {
                fs
                    .mkdir(dst, function () {
                        callback(src, dst);
                    });
            }
        });
};

/**
* 执行复制
* @param  {[type]} path [description]
* @return {[type]}      [description]
*/
var exe = function (dir, path) {
    dirc = dir;
    exists(dir, path, copy)
}

module.exports = exe;
