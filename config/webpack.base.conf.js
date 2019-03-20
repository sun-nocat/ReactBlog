
/*
* @Description: 公用的配置
* @Author: sunmingming
* @Email: sun_mingming@foxmail.com
* @Date: 2019-03-18 16:03:01
*/

'use strict'

const path  = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    entry:{
        app:'./src/main.js'
    },
    output:{
        path:path.resolve(__dirname, '../dist'),
        filename:"[name].js"
    },

    resolve:{
        extensions:['.ts','.tsx','.js','.json']
    },

    //loader
    module:{
        rules:[
            {
                test:/.js|jsx$/,
                exclude:/(node_modules|bower_components)/,//屏蔽不需要处理的文件
                loader: 'babel-loader'
            },{
                test:/.css$/,
                use:['style-loader', 'css-loader']
            }
        ]
    },

    //插件
    plugins:[
        new HtmlWebpackPlugin({
            filename:'index.html',
            template:'index.html',
            inject:'body'
        })
    ]
}  
            