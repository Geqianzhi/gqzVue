const path =  require('path'); //引入path模块（node）
const resolve = (dir) => path.join(__dirname, dir); //将文件组成绝对路径
const CompressionPlugin = require("compression-webpack-plugin")//Gzip 压缩
module.exports = {
    outputDir: 'dist',
    lintOnSave:false,  // 关闭eslint
    assetsDir: 'assets', //放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录
     //是否使用包含运行时编译器的 Vue 构建版本。设置true后你就可以在使用template
    runtimeCompiler: false,
     // 生产环境是否生成 sourceMap 文件 sourceMap的详解请看末尾  
    productionSourceMap: false,
    chainWebpack: config => { // webpack链接API
         
    },
    configureWebpack: config => {
          if(process.env.NODE_ENV === 'production'){
            return{
                plugins: [
                    new CompressionPlugin({
                        test:/\.js$|\.html$|.\css/, //匹配文件名
                        threshold: 10240,//对超过10k的数据压缩
                        deleteOriginalAssets: false //不删除源文件
                    })
                ]
            }
        }

    },
    devServer:{ // 配置服务器
        host: '0.0.0.0',  
        port:8888,
        open:true,
        https:false,
        overlay: {
            warnings: true,
            errors: true
        }
    },



    
}