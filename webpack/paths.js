const fs = require('fs');
const path = require('path');

const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

module.exports = {
  src: resolveApp('src'),
  dist: resolveApp('dist'),
  static: resolveApp('static')
}
