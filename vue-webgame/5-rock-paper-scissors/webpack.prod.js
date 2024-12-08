const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: {
    app: path.join(__dirname, './src/main.js'), // 진입점 설정
  },
  module: {
    rules: [{
      test: /\.vue$/, // .vue 파일 처리 규칙
      use: 'vue-loader',
    }, {
      test: /\.css$/, // .css 파일 처리 규칙
      use: [
        'vue-style-loader',
        {
          loader: 'css-loader',
          options: {
            esModule: false, // CSS 모듈 사용 안 함. // Webpack 5에서 'esModule' 옵션은 기본적으로 true이므로 명시적으로 설정
          }
        },
      ]
    }],
  },
  plugins: [
    new VueLoaderPlugin(), // Vue 로더 플러그인 활성화
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'public', 'index.html'),
      filename: 'index.html',
    }),
  ],
  output: {
    filename: '[name].[contenthash].js', // 캐싱을 위한 해시 추가
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    clean: true,
  },
  optimization: {
    minimize: true,
    minimizer: ['...', new CssMinimizerPlugin()],
  },
};
