function FileListPlugin (options) {
  this.options = options || {};
  this.filename = this.options.filename || 'fileList.md'
}

FileListPlugin.prototype.apply = function (compiler) {
  // 第一种 回调函数
  compiler.hooks.emit.tapAsync('FileListPlugin', (compilation, cb) => {
    const fileListName = this.filename;
    let len = Object.keys(compilation.assets).length;

    let content = `# 一共有${len}个文件\n\n`;
    for (let filename in compilation.assets) {
      content += `- ${filename}\n`
    }
    compilation.assets[fileListName] = {
      source: function () {
        return content;
      },
      size: function () {
        return content.length;
      }
    }
    cb();
  })
  // 第二种 Promise
  // compiler.hooks.emit.tapPromise('FileListPlugin', compilation => {
  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve()
  //     }, 1000)
  //   }).then(() => {
  //     const fileListName = this.filename;
  //     let len = Object.keys(compilation.assets).length;
  //     let content = `# 一共有${len}个文件\n\n`;
  //     for (let filename in compilation.assets) {
  //       content += `- ${filename}\n`;
  //     }
  //     compilation.assets[fileListName] = {
  //       source: function () {
  //         return content;
  //       },
  //       size: function () {
  //         return content.length;
  //       }
  //     }
  //   })
  // })
  // 第三种 await/async
  // compiler.hooks.emit.tapPromise('FileListPlugin', async (compilation) => {
  //   await new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve()
  //     }, 1000)
  //   })
  //   const fileListName = this.filename;
  //   let len = Object.keys(compilation.assets).length;
  //   let content = `# 一共有${len}个文件\n\n`;
  //   for (let filename in compilation.assets) {
  //     content += `- ${filename}\n`;
  //   }
  //   compilation.assets[fileListName] = {
  //     source: function () {
  //       return content;
  //     },
  //     size: function () {
  //       return content.length;
  //     }
  //   }
  // })
  // compiler.hooks.watchRun.tapAsync('WatcherPlugin', (compiler, cb) => {
  //   console.log(compiler)
  //   cb()
  // })
}
module.exports = FileListPlugin;