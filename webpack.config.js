const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'development',
    devtool: 'cheap-module-source-map',
    entry: {
        popup: path.resolve('src/popup/popup.js'),
        //contentScript: path.resolve('src/contentScript/contentScript.js')
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
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve('src/manifest.json'),
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
        extensions: ['js', '.jsx']
    },
    output: {
        filename: '[name].js',
        path: path.resolve('dist')
    }
}