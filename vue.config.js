// 该文件增加的配置可以去 https://cli.vuejs.org/zh/config/#pages 这个网址找
// 该配置文件加入后，里面的配置项会覆盖默认的脚手架配置
// 该文件修改了，一定要重启脚手架

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    }
  },
  lintOnSave:false,  //关闭语法检查

  // 开启代理方式一，解决前端请求后端跨域问题，vue-cli脚手架自带的代理，可以解决这一问题,缺点不能配置多个代理
  // devServer: {
  //   proxy: 'http://localhost:8001' //这里要配置后端服务的ip+port
  // },

  //方式二，多代理，优先匹配前端public目录下资源
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8001',
        pathRewrite:{'^/api': ''},  //代理转发到后端的url不包含/api 开头
        ws: true,  // websocket用于支持websocket
        changeOrigin: true  //默认是true，当设置为true时，后端获取到的请求头中host的端口是假端口
      },
      '/api2': {
        target: 'http://localhost:8002',
        pathRewrite:{'^/api2': ''},
      }
    }
  },
})


// 如下方式，加入自定义配置也可以
// module.exports = {
//   pages: {
//     index: {
//       // page 的入口
//       entry: 'src/main.js',
//   }
// }
// }
