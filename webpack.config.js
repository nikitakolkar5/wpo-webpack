ECHO is on.
const path = require('path');

module.exports = {
    entry: './src/index.js',           // entry point
    output: {
        filename: 'main.js',           // output file name
        path: path.resolve(__dirname, 'dist'), // output folder
    },
    mode: 'development',               // development mode
};
