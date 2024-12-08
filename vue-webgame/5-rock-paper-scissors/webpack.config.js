const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
  mode: 'development', // 개발 모드 설정
  devtool: 'eval', // 소스 맵 설정
  resolve: {
    extensions: ['.js', '.vue'], // 파일 확장자 생략 허용
  },
  entry: {
    app: path.join(__dirname, 'main.js'), // 진입점 설정
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
  ],
  output: {
    filename: '[name].js',              // 출력 파일명 설정
    path: path.join(__dirname, 'dist'), // 출력 디렉토리 설정(resolve 사용)
    publicPath: '/dist/',                // 웹팩 개발 서버에서 파일 접근 경로 설정(뒤에도 슬래시 붙여야 함.)
    clean: true,                    // Webpack 5에서 추가된 옵션: 빌드 시 이전 파일 삭제
  },
  devServer: {
    devMiddleware: { publicPath: '/dist' },        // 개발 중인 번들 파일의 접근 경로 설정
    static: { directory: path.resolve(__dirname) }, // 정적 파일이 있는 디렉토리 설정
    hot: true                                      // 핫 모듈 교체 활성화
  }
};
