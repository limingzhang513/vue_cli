<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo="addTodo"/>

                <MyList 
                :todos="todos" 
                :appcallback="appcallback" 
                :deleteSuccTitle="deleteSuccTitle"/>

                <MyFooter :todos="todos" 
                :checkAlltodos="checkAlltodos" 
                :clearAllSucessTasks="clearAllSucessTasks"/>
            </div>
        </div>
    </div>
</template>

<script>
// 安装vuter后,输入<v + Tab键 自动出来vue开发模板
// App.vue 这个文件是所有组件的统一管理组件--必须有
    import MyHeader from './components/MyHeader'
    import MyList from './components/MyList'
    import MyFooter from './components/MyFooter'
    export default {
        name:"App",
        data() {
            return {
                todos:[
                    {id:"01", title:"吃饭", done:true},
                    {id:"02", title:"喝酒", done:true},
                    {id:"03", title:"烫头", done:false},
                    {id:"04", title:"开车", done:true},
                ]
            }
        },
        components:{MyHeader, MyList, MyFooter},
        methods: {
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
            deleteSuccTitle(id){
                this.todos.forEach((todo)=>{
                    if(todo.id === id) this.todos.splice(this.todos.indexOf(todo), 1)
                })
            },
            checkAlltodos(done){
                this.todos.forEach(todo => todo.done = done)  // 箭头函数简写
            },
            clearAllSucessTasks(){
                if(confirm("确认删除吗？"))  // 无需加return
                this.todos = this.todos.filter((todo)=>{  //清空已勾选的即todo.done === true的，剩下的赋值给this.todos
                    return !todo.done
                })
            }
        },
    }
</script>
<style>
    .todo-container {
        margin-right: 950px;
        border: 1px solid;
    }
</style>