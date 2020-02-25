# tools
web develop tools
webpack : 组合插件使用实现打包、变异、测试、调试等功能

## webpack

1. 安装

```shell
    npm i -g webpack
    # webpack、webpack-cli全局安装，开发安装，
```

2. 配置文件(默认webpack.config.js)

```js
    const pathLib = require('path')
    module.exports = {
        mode : 'development',   //dev 打包不压缩、pro打包会压缩

        //entry : pathLib.resolve('./libs/1.js'),     //单入口  
        entry : {                                      //多入口
            test1 : pathLib.resolve('./libs/1.js'),
            test2 : pathLib.resolve('./libs/2.js'),
        } 
        output : {
            path:pathLib.resolve('./dest/'),        //结果目录
            // filename:'bundle.js'                    //单入口结果文件名    
            filename : '[name].bundle.js'       //多入口输出 test1.bundle.js、test2.bundle.js
        }  //

    }
```

```shell
    webpack --config ***.webpack.js     #启动非默认配置文件
```

### dev-server

1. 安装

```
    cnpm i -D webpack webpack-cli webpack-dev-serverk
```

2. 配置

```js
    devServer : {   
        contentBase : pathLib.resolve('./static'),  //静态目录
        port : 8090,        
        hot : true,                 //热修改    
        historyApiFallback : true   //404转到 index.html
    },
    plugins:[
        new Webpack.HotModuleReplacementPlugin()    //热模块更新插件  不要在生产模式下使用
    ]
```

```shell
    webpack-dev-server --watch --inline --config devser.webpack.js
    # inline 和 ifream 两种模式
    # --watch  监听静态文件变化
```


### loader  --翻译

    1. babel-loader

```js
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
```
    2. css-loader

```js
module : {
        rules : [
            {
                test : /\.css$/,
                use : 'css-loader' 
            }
        ]
    } 
```

    3. img-loader

    4. ts-loader

```js
```