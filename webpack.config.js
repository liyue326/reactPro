const path = require('path');
const HtmlwebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// 单独生层css文件 不和 js混在一起 因为js加载完css才会加载会有白屏所以提出css文件
module.exports = {
  entry: './src/app.jsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: "/dist/", // f访问目录从 ／dist/index.html开始了
    filename: 'js/app.js'
  },
  resolve: {
    alias: {
      page: path.resolve(__dirname, 'src/pages'), // path.resolve __dirname 是指当前路径也就是根目录
      component: path.resolve(__dirname, 'src/component')
    }
  },
  plugins: [
    new HtmlwebpackPlugin({
      template: './src/index.html',
      favicon: './favicon.ico'
    }),
    new ExtractTextPlugin('index.css') // 一直出错是因为这块没有传参数
  ],
  devServer: {
    port: 8086,
    historyApiFallback: {
      index: '/dist/index.html'   // 404页面默认都到这
    }
  },
  module: {
    rules: [
      // css文件的处理
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
      // sass文件的处理
      {
        test: /\.scss$/,
        exclude: [path.resolve(__dirname, "node_modules")],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env', 'react']
          } // 这个选项必须有  不然没有效果 env会根据环境来打包 babel-presets-env 放在babelrc里面也行
        }

      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192,
            name: 'assets/img/[name].[ext]' // 也就是路径
          }
        }]
      }
    ]
  }
};