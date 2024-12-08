const VueLoaderPlugin = require('vue-loader/lib/plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'eval', // 소스 맵 생성
    resolve: {
        extensions: ['.js', '.vue'], // 확장자 생략 가능 설정
    },
    entry: {
        app: path.join(__dirname, 'main.js'), // 진입 파일
    },
    module: {
        rules: [{
            test: /\.vue$/,
            use: 'vue-loader',
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                {
                    loader: 'css-loader',
                    options: {
                        esModule: false,
                    }
                },
            ]
        }],
    },
    plugins: [
        new VueLoaderPlugin(), // Vue 로더 플러그인 활성화
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/', // 정적 파일 경로
    },
    devServer: {
        devMiddleware: {publicPath: '/dist'},
        static: {directory: path.resolve(__dirname)},
        hot: true // 핫 모듈 교체 활성화
    }
};
