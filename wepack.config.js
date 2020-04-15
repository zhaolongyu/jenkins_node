const path = require('path');
module.exports = {
  mode:'development', // 开发模式
  entry: path.resolve(__dirname,'../src/main.js'),    // 入口文件
  output: {
      filename: 'output.js',      // 打包后的文件名称
      path: path.resolve(__dirname,'./server/public')  // 打包后的目录
  },
  modules:{
    plugins:[
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_debugger: true,
          drop_console: true
        },
      })
    ]
  }
}
