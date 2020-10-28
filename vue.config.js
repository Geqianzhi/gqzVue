

const path = require('path');
const webpackBar  = require('webpackbar');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: false,
    productionSourceMap: false,
    devServer:{
        port:8888,
        open:true,
        overlay:{
            warnings:false,
            errors:true
        }
    },
    configureWebpack(){
        return {
            plugins:[
                new webpackBar({
                    name:"VUE3.0学习"
                })
            ]
        }
    }
}