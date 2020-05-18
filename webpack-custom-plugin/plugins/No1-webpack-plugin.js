// 第一版
// function No1WebpackPlugin (options) {
//   this.options = options
// }
// No1WebpackPlugin.prototype.apply = function (compiler) {
//   compiler.plugin('done', () => {
//     console.log(this.options.msg)
//   })
// }
// 第二版
// class No1WebpackPlugin {
//   constructor (options) {
//     this.options = options
//   }
//   apply (compiler) {
      // compiler.plugin('done', () => {
      //   console.log(this.options.msg)
      // })
//   }
// }
// 第三版
function No1WebpackPlugin (options) {
  this.options = options
}
No1WebpackPlugin.prototype.apply = function (compiler) {
  compiler.hooks.done.tap('No1', () => {
    console.log(this.options.msg)
  })
}
module.exports = No1WebpackPlugin;