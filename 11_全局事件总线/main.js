// 该文件是整个项目的入口文件

// 引入vue
import Vue from 'vue'  // 完整版vue.js在C:/Users/86157/Desktop/myvuepro/vue_lmz/node_modules/vue/dist/vue

// 引入App组件
import App from './App.vue'


// vue的生产提示
Vue.config.productionTip = false

// 配置全局事件总线, 思路找一个全局所有组件都能找到的东西，Vueconpoments就是
// const Demo = Vue.extend({})
// const x = new Demo()
// Vue.prototype.$x = x

// 创建Vue实例对象
const vm = new Vue({
  // el:"#app", 
  render: h => h(App),  // 渲染一个<App></App>,表示引用组件

  // 配置全局事件总线  :  最优配置全局事件总线的方式
  beforeCreate(){
    Vue.prototype.$bus = this
  }
}).$mount('#app')  //绑定标签容器

