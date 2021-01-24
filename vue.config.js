const path = require("path");
const vConsolePlugin = require("vconsole-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const CompressionWebpackPlugin = require("compression-webpack-plugin");
const productionGzipExtensions = /\.(js|css|json|txt|html|ico|svg)(\?.*)?$/i;
const webpack = require("webpack");

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "./" : "/Kavier_Web",
  assetsDir: "static",
  outputDir: "Kavier_Web",
  productionSourceMap: false,
  lintOnSave: false,
  devServer: {
    disableHostCheck: true,
    port: 4466
  },
  configureWebpack: config => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    );
    if (process.env.NODE_ENV === "production") {
      const plugins = [];
      // plugins.push(
      //   new UglifyJsPlugin({
      //     uglifyOptions: {
      //       warnings: false,
      //       compress: {
      //         drop_console: true,
      //         drop_debugger: false,
      //         pure_funcs: ["console.log"] //移除console
      //       }
      //     },
      //     sourceMap: false,
      //     parallel: true
      //   })
      // );

      //gzip压缩
      plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path].gz[query]",
          algorithm: "gzip",
          test: productionGzipExtensions,
          threshold: 10240, //超过10k就压缩
          minRatio: 0.8
        })
      );

      config.plugins = [...config.plugins, ...plugins];
      // config.plugins.push(
      //   new vConsolePlugin({
      //     filter: [],
      //     enable: true
      //   })
      // );
    } else {
      config.plugins.push(
        new vConsolePlugin({
          filter: [],
          enable: true
        })
      );
    }
  },
  //全局CSS预处理--less
  chainWebpack: config => {
    config.plugins.delete("prefetch");
    config.optimization.minimize(true);
    const types = ["vue-modules", "vue", "normal-modules", "normal"];
    types.forEach(type =>
      addStyleResource(config.module.rule("less").oneOf(type))
    );

    // 图片压缩
    // config.module
    //   .rule("images")
    //   .use("image-webpack-loader")
    //   .loader("image-webpack-loader")
    //   .options({
    //     bypassOnDebug: true,
    //     //压缩JPEG图像
    //     mozjpeg: { progressive: true, quality: 65 },
    //     //压缩PNG图像
    //     optipng: { enabled: false },
    //     //压缩PNG图像
    //     pngquant: { quality: "65-90", speed: 4 },
    //     //压缩GIF图像
    //     gifsicle: { interlaced: false }
    //   })
    //   .end();
  },
  css: {
    extract: true, //使用css分离插件
    loaderOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  }
};

//全局样式文件路径
function addStyleResource(rule) {
  rule
    .use("style-resource")
    .loader("style-resources-loader")
    .options({
      patterns: [path.resolve(__dirname, "./src/assets/css/cssCommon.less")]
    });
}
