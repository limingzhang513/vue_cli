// 混合，多个组件可以分别灵活引用
// 混合就是复用配置
// 组件里配置均可以在混合里使用
// 组件有的，以组件为主；组件没有的将混合内的补充进去
// 混合也可以在main.js导入，应用到全局
export const mixin = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    mounted() {
        console.log("你好哈")  //生命周期的挂载
    },
}
export const mixin2 = {
    data() {
        return {
            x:100,
            y:99
        }
    }
}