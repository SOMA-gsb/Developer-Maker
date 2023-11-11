const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        popup: path.resolve('src/popup/popup.js'),
        contentScript: path.resolve('src/contentScript/contentScript.js'),
        background: path.resolve('src/background/backgroud.js')
    },
    module: {
        rules: [
            {
                use : {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            "@babel/preset-env", ["@babel/preset-react", {"runtime": "automatic"}]
                        ]
                    }       
                },
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
            },
            {
                use: ['style-loader', 'css-loader'],
                test: /\.css$/i,
            },
            {
                use: ['url-loader'],
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false,
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('src/static'),
                    to: path.resolve('dist'),
                },
                {
                    from: path.resolve('src/contentScript/card.css'),
                    to: path.resolve('dist'),
                }
            ]
        }),
        new HtmlPlugin({
            title: 'React Extension',
            filename: 'popup.html',
            chunks: ['popup']
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
    output: {
        filename: '[name].js',
        path: path.resolve('dist')
    }
}