// Webpack 설정 파일로, Vue 컴포넌트와 .vue 파일을 처리하기 위한 설정을 포함함
const VueLoaderPlugin = require('vue-loader/lib/plugin'); // Vue 파일 로더 플러그인
const path = require('path'); // Node.js 경로 모듈

module.exports = {
  mode: 'development', // 개발 모드
  devtool: 'eval', // 빠른 디버깅을 위한 소스 맵
  resolve: {
    extensions: ['.js', '.vue'], // 파일 확장자 생략 가능
  },
  entry: { // entry : 번들링 시작점으로 main.js를 지정
    app: path.join(__dirname, 'main.js'), // 엔트리 파일 지정
  },
  module: {
    rules: [{
      test: /\.vue$/, // .vue 파일 처리
      use: 'vue-loader', // vue-loader 사용
    }],
  },
  plugins: [
    new VueLoaderPlugin(), // Vue 파일 로더 플러그인 활성화
  ],
  output: { // output : 번들링된 파일의 출력 위치를 dist 디렉토리로 설정
    filename: '[name].js', // 출력 파일 이름
    path: path.join(__dirname, 'dist'), // 출력 경로
  },
};
