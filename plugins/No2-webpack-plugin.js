function No2WebpackPlugin (options) {
  this.options = options
}
No2WebpackPlugin.prototype.apply = function (compiler) {
  compiler.hooks.compile.tap('No2', (compilation) => {
    console.log('compile')
  })
  compiler.hooks.compilation.tap('No2', (compilation) => {
    console.log('compilation')
    compilation.hooks.chunkAsset.tap('No2', (chunk, filename) => {
      console.info(chunk)
      console.log(filename)
    })
  })
}
module.exports = No2WebpackPlugin;