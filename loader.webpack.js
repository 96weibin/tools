const pathLib = require('path')

module.exports = {
    mode : 'development',
    entry : './src/es6',
    output : {
        path : pathLib.resolve('dest'),
        filename : 'bundle.js'
    },
    module : {
        rules : [
            {
                test : /\.js$/,             //正则匹配文件
                exclude : /node_modules/ ,  //剔除的文件 
                use : {                     //使用的loader
                    loader : 'babel-loader',
                    options : {
                       presets : ['env']
                    }
                }
            }
        ]
    }
}