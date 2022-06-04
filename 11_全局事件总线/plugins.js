export default {
    install(Vue,a,b,c){
        //第一个参数是Vue,vm的缔造者，后边的参数可以通过main.js里的Vue.use(plugins,1,2,3)位置传参传入
        console.log("我是一个插件，位置参数", a, b, c)

        // 全局过滤器
        Vue.filter("myslice", function(value){  //将myslice注册为全局过滤器
            return value.slice(0,2) // 切片的使用 前闭后开，切割前4位
        })

        //全局指令
        Vue.directive('fbind', {  //全局指令
            // 指令和标签成功绑定时,调用
            bind(element, binding){  //固定的方法
                console.log("bind")  //这里的this是window
                element.value = binding.value  //input 通过标签对象获取值是点value：element.value
            },
            // 指令所在标签被插入页面时，调用
            inserted(element, binding){  //固定的方法
                console.log("inserted")
                element.focus()//自动获取焦点
            },
            // 指令所在的模板发生变化时，调用
            update(element, binding){  //固定的方法
                console.log("update")
                element.value = binding.value
            }
        })

        // 全局混入
        Vue.mixin({
            data() {
                return {
                    x: 100,
                    y: 99
                }
            },
        })
        // 给vue原型加上了一个hello方法，箭头函数实现，这样（vc和vm就都能用了）
        Vue.prototype.hello = ()=>{alert('插件为vue加入了全局的hello方法')}
    }
}