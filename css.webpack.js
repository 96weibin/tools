const pathLib = require('path')

module.exports = {
    mode : 'development',
    entry : './src/css.js',
    output : {
        path : pathLib.resolve('./dest'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.css$/,
                use : 'css-loader' 
            }
        ]
    } 
}