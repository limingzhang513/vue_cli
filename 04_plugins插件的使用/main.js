// 该文件是整个项目的入口文件

// 引入vue
import Vue from 'vue'  // 完整版vue.js在C:/Users/86157/Desktop/myvuepro/vue_lmz/node_modules/vue/dist/vue

// 引入App组件
import App from './App.vue'


// vue的生产提示
Vue.config.productionTip = false

// 引入一个插件，插件是全局的
import plugins from './plugins'
Vue.use(plugins, 1, 2, 3) //使用插件，插件必须在new vue() 之前导入使用, 可以传参数

// 创建Vue实例对象
new Vue({
  // el:"#app", 
  render: h => h(App),  // 渲染一个<App></App>,表示引用组件
}).$mount('#app')  //绑定标签容器

