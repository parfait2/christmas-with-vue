const { VueLoaderPlugin } = require('vue-loader');
const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: 'development', // 개발 모드 설정
  devtool: 'eval-source-map', // 소스 맵 설정(디버깅용)
  resolve: {
    extensions: ['.js', '.vue'], // 파일 확장자 생략 허용
  },
  entry: {
    app: path.join(__dirname, './src/main.js'), // 진입점 설정
  },
  module: {
    rules: [{
      test: /\.vue$/, // .vue 파일 처리 규칙
      use: 'vue-loader',
    }, {
      test: /\.css$/,
      use: ['vue-style-loader', 'css-loader'],
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
    filename: '[name].js',              // 출력 파일명 설정
    path: path.join(__dirname, 'dist'), // 번들 파일이 저장될 디렉토리
    publicPath: '/',                    // 개발 서버에서 파일 접근 경로 설정
    clean: true,                        // Webpack 5에서 추가된 옵션: 빌드 시 이전 파일 삭제
  },
  devServer: {
    devMiddleware: { publicPath: '/' },        // 개발 중인 번들 파일의 접근 경로 설정
    static: { directory: path.join(__dirname, 'public') }, // 정적 파일이 있는 디렉토리 설정
    hot: true,                               // 핫 모듈 교체 활성화
    historyApiFallback: true, // SPA 라우팅 문제 방지
  }
};
