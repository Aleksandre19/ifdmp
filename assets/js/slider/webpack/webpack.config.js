const path = require('path');
module.exports = {
    entry: './slider_native_script/index.js',
    output: {
        filename: 'slider.js',
        path: path.resolve(__dirname, "production")
    }
};