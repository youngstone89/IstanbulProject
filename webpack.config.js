const path = require('path');

module.exports = {
    devtool: 'inline-source-map',
    entry: './src/index.js',
    resolve: {
        modules: [path.resolve((__dirname,'src','node_modules'))]
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
