const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: './src/js/index.js',
        form: './src/js/form.js',
        task: './src/js/task.js',
      },
      plugins: [
        new HtmlWebpackPlugin({
          template: './src/index.html',
          filename: 'index.html',
          inject: true,
          chunks: ['index'],
        }),
        new HtmlWebpackPlugin({
          template: './src/form.html',
          filename: 'form.html',
          inject: true,
          chunks: ['form'],
        }),
        new HtmlWebpackPlugin({
          template: './src/task.html',
          filename: 'task.html',
          inject: true,
          chunks: ['task'],
        }),
      ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            }
        ]
    },
};
