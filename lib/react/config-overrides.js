const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
module.exports = function override(config, env) {
    // config antd or antd-mobile
    config = injectBabelPlugin([
        'import', {
            libraryName: 'antd',
            style: true
        }
    ], config);
    // config less
    config = rewireLess.withLoaderOptions({
        modifyVars: {
            "@primary-color": "#1DA57A"
        }
    })(config, env);
    return config;
};