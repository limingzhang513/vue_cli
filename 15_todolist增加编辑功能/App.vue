<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <!-- 引用自定义事件 -->
                <MyHeader @addTodo="addTodo"/>

                <MyList 
                :todos="todos"/>
                <!-- 引用自定义事件 -->
                <MyFooter :todos="todos" 
                @checkAlltodos="checkAlltodos" 
                @clearAllSucessTasks="clearAllSucessTasks"/>
            </div>
        </div>
    </div>
</template>

<script>
// 安装vuter后,输入<v + Tab键 自动出来vue开发模板
// App.vue 这个文件是所有组件的统一管理组件--必须有
// 第三方库一般在上边导入
import pubsub from 'pubsub-js'
import MyHeader from './components/MyHeader'
import MyList from './components/MyList'
import MyFooter from './components/MyFooter'
export default {
    name:"App",
    data() {
        return {
            // todos:[
            //     {id:"01", title:"吃饭", done:true},
            //     {id:"02", title:"喝酒", done:true},
            //     {id:"03", title:"烫头", done:false},
            //     {id:"04", title:"开车", done:true},
            // ],
            todos: JSON.parse(localStorage.getItem("msg")) || [] // 如果浏览器无存储值则返回[]
        }
    },
    components:{MyHeader, MyList, MyFooter},
    methods: {
        // 数据在哪里操作数据的方法就在哪里
        addTodo(x){
            this.todos.unshift(x)
        },
        appcallback(id){
            // script中使用forEach循环，配合箭头函数
            this.todos.forEach((tod)=>{
                if(tod.id === id) tod.done = !tod.done
            })
            // 普通的for循环,of时i是对象，in时i是索引
            // for (let i of this.todos){
            //     if (i === todo){
            //         i.done = !i.done
            //     }
            // }
        },
        deleteSuccTitle(_,id){  //该方法采用了消息订阅，第一个参数默认是消息名称，不使用时用_来占位
            this.todos.forEach((todo)=>{
                if(todo.id === id) this.todos.splice(this.todos.indexOf(todo), 1)
            })
        },
        checkAlltodos(done){
            this.todos.forEach(todo => todo.done = done)  // 箭头函数简写
        },
        // const、var、let区别：
        //1.const定义的变量不可以修改，而且必须初始化。
        //2.var定义的变量可以修改，如果不初始化会输出undefined，不会报错。
        //3.let是块级作用域，函数内部使用let定义后，对函数外部无影响。
        clearAllSucessTasks(){
            // if(confirm("确认删除吗？"))  // 无需加return
            let filterTodos = this.todos.filter((todo)=>{  //清空已勾选的即todo.done === true的，剩下的赋值给this.todos
                return !todo.done})
            if (filterTodos.length === this.todos.length){
                alert("当前没有可删除的")
                return
                }
            if(confirm("确认删除吗？"))
            this.todos = filterTodos
        },
        updateTitleOK(_,data){
            this.todos.forEach((todo)=>{
                if(todo.id === data[0]){
                    todo.title = data[1]
                }
            })
        }
    },
    watch:{
        // 直接把监控对象写成函数则只能监控到对象最外层，如果对象内部key-value更改，无法识别
        // 写成对象形式可以加上深度监控参数,方法名必须使用handler
        todos:{
            deep: true,
            handler(newValue, oldValue){//参数新值、旧值
                localStorage.setItem('msg', JSON.stringify(newValue))
            }
        }
    },

    // 当父组件和孙子组件或者兄弟组件和孙子组件通信时（两个组件之间隔着一个组件），使用全局事件总线
    mounted() {
        //挂载完，绑定自定义事件
        this.$bus.$on("appcallback", this.appcallback)
        // 将删除修改为发布订阅模式
        // this.$bus.$on("deleteSuccTitle", this.deleteSuccTitle)
        this.pubSubId = pubsub.subscribe("deleteSuccTitle", this.deleteSuccTitle)

        this.updateTitleOKId = pubsub.subscribe("updateTitleOK", this.updateTitleOK)
    },
    beforeDestroy() {
        // 当前vc实例被销毁前清除全局应用的事件，避免占着茅坑不拉屎
        this.$bus.$off("appcallback")
        // 将删除的事件销毁该为发布订阅模式的取消订阅
        // this.$bus.$off("deleteSuccTitle")
        pubsub.unsubscribe(this.pubSubId) //必须使用订阅的唯一id
        pubsub.unsubscribe(this.updateTitleOKId)
    },
}
</script>
<style>
/* 一般全局统一的标签样式卸载app，全局应用，比如按钮的样式颜色。。。 如果有额外的样式修改再去组件样式修改*/
.todo-container {
    margin-right: 950px;
    border: 1px solid;
}
.btn-danger {
    background-color: red;
    border-radius: 5px;
}
.btn-edit{
    background-color: aqua;
    border-radius: 5px;
    margin-right: 1px;
}
</style>