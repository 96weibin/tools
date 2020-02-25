const pathLib = require('path')
const Webpack = require('webpack')
module.exports = {
    mode : 'development',           //dev 打包不压缩、pro打包会压缩
    entry : pathLib.resolve('./src/index'),
    output : {
        path : pathLib.resolve('./dest'),   // ./dest与devServer的根目录  平级
        filename : 'bundle.js'
    },
    devServer : {   //
        contentBase : pathLib.resolve('./static'),  //静态服务器根目录
        port : 8090,
        hot : true,            
        historyApiFallback : true   //跳转404路由到index.html
    },
    plugins:[
        new Webpack.HotModuleReplacementPlugin()    //热模块更新插件  不要在生产模式下使用
    ]
}