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
  lintOnSave:false  //关闭语法检查
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
