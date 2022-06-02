// 该文件是整个项目的入口文件

// 引入vue
import Vue from 'vue'  // 完整版vue.js在C:/Users/86157/Desktop/myvuepro/vue_lmz/node_modules/vue/dist/vue

// 引入App组件
import App from './App.vue'


// vue的生产提示
Vue.config.productionTip = false

let person = {}  //如果配置了语法检查，这里会引起报错，vue.config.js里配置了关闭语法检查功能
// 创建Vue实例对象
new Vue({
  // el:"#app", 
  render: h => h(App),  // 渲染一个<App></App>,表示引用组件

  // render(createElement){  //createElement是个函数  render的原始写法
  //   return createElement('h1', '你好啊')
  // }

/* 
获取脚手架的全部配置：
  配置了全局vue， 则执行命令：vue inspect > output.js
  否则执行：npx vue-cli-service inspect > output.js

  默认脚手架呈现结构不能改的地方：
    main.js文件名 public目录名，index.html文件名，favicon.ico文件名 src目录名
  如果非要改：
    借助配置文件
    在src下新建vue.config.js文件，改哪里配置output.js哪里，脚手架启动会自动覆盖对应的参数
*/

}).$mount('#app')  //绑定标签容器

