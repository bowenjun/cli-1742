const copy = require('./copy');
const path = require('path');

const dir = path.resolve(__dirname, './vue-ssr-lib');

var exe = function (path) {
    copy(dir, path)
}

module.exports = exe;
