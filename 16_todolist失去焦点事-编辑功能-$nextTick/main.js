// 该文件是整个项目的入口文件

// 引入vue
import Vue from 'vue'  // 完整版vue.js在C:/Users/86157/Desktop/myvuepro/vue_lmz/node_modules/vue/dist/vue

// 引入App组件
import App from './App.vue'


// vue的生产提示
Vue.config.productionTip = false


// 创建Vue实例对象
const vm = new Vue({
  // el:"#app", 
  render: h => h(App),  // 渲染一个<App></App>,表示引用组件
  
  // 配置全局事件总线  :  最优配置全局事件总线的方式
  beforeCreate(){  // 在创建vm实例之前，生命周期函数
    Vue.prototype.$bus = this  // 安装全局事件总线
  }
}).$mount('#app')  //绑定标签容器

