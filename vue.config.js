const path = require("path"); //引入path模块
const UglifyJsPlugin =require('uglify-js-plugin')
function resolve (dir) {
  return path.join(__dirname, dir); //path.join(__dirname)设置绝对路径
}

module.exports = {

  outputDir: "./server/public",
  // 生产
  publicPath: "././",
  devServer: {
    proxy: {
      "/api": {
        // target: "http://47.100.188.145:3000",
        target: "http://localhost:3001",
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    },
    modules:{
      pulgins: [
        new UglifyJsPlugin({
          uglifyOptions: {
            compress: {
              warnings: false,
              drop_console: true,//console
              pure_funcs: ['console.log']//移除console
            }
          },
          sourceMap: config.build.productionSourceMap,
          parallel: true
        })
      ]
    }
    // host: "127.0.0.1",
    // port: 9099
  },
  chainWebpack: config => {
    config.resolve.alias
      .set("@", resolve("./src"))
      .set("views", resolve("./src/views"))
      .set("components", resolve("./src/components"));
    //set第一个参数：设置的别名，第二个参数：设置的路径
  }
};
