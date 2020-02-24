const path = require('path');
module.exports = {
    entry: './slider_native_script/index.js',
    output: {
        filename: 'webpack_slider.js',
        path: path.resolve(__dirname, "slider_webpack_script")
    }
};