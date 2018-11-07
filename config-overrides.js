const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

module.exports = function override(config, env) {
    config = injectBabelPlugin(
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
        config,
    )

    config = rewireReactHotLoader(config, env)

    config = rewireLess.withLoaderOptions({
        modifyVars: { "@primary-color": "#61dafb" },
        javascriptEnabled: true,
    })(config, env)
    return config
}