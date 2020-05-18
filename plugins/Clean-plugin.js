const recursiveReadSync = require("recursive-readdir-sync");
const minimatch = require("minimatch");
const path = require("path");
const fs = require("fs");
const union = require("lodash.union");
function CleanPlugin (options) {
  this.options = options;
}
// 匹配文件
function getUnmatchFiles(fromPath, exclude = []) {
  const unmatchFiles = recursiveReadSync(fromPath).filter(file =>
    exclude.every(
      excluded => {
        return !minimatch(path.relative(fromPath, file), path.join(excluded), {
          dot: true
        })
      }
    )
  );
  return unmatchFiles;
}
CleanPlugin.prototype.apply = function (compiler) {
  const outputPath = compiler.options.output.path;
  compiler.hooks.done.tap('CleanPlugin', stats => {
    if (compiler.outputFileSystem.constructor.name !== "NodeOutputFileSystem") {
      return;
    }
    const assets = stats.toJson().assets.map(asset => asset.name);
    // 多数组合并并且去重
    const newAssets = union(this.options.exclude, assets);
    // 获取未匹配文件
    const unmatchFiles = getUnmatchFiles(outputPath, newAssets);
    // 删除未匹配文件
    unmatchFiles.forEach(fs.unlinkSync);
  })
}

module.exports = CleanPlugin;
