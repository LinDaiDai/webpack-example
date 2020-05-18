function DecideHtmlPlugin () {}

DecideHtmlPlugin.prototype.apply = function (compiler) {
  compiler.hooks.afterPlugins.tap('DecideHtmlPlugin', compiler => {
    const plugins = compiler.options.plugins;
    const hasHtmlPlugin = plugins.some(plugin => {
      return plugin.__proto__.constructor.name === 'HtmlWebpackPlugin'
    })
    if (hasHtmlPlugin) {
      console.log('使用了html-webpack-plugin 😊')
    }
  })
}

module.exports = DecideHtmlPlugin;