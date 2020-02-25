const pathLib = require('path')
const Webpack = require('webpack')


module.exports = {
    entry : pathLib.resolve('./libs/1.js'),     //入口路径
    output : {
        path:pathLib.resolve('./dest/'),        //结果目录
        filename:'bundle.js'                    //结果文件名
    },                                          //
    hot : true,
    plugins:[
        new Webpack.HotModuleReplacementPlugin()    //热模块更新插件
    ]
}