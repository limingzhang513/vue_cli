<template>
    <div class="todo-footer" v-show="allTotal">
        <label>
            <input type="checkbox" v-model="isAll"/>
        </label>
        <span>
            <span>已完成{{caletodos}}</span> / 全部{{allTotal}}
        </span>
        <button class="btn btn-danger" @click="deleteAllSucessTasks">请清除已完成任务</button>
    </div>
</template>

<script>
export default {
    name:"MyFooter",
    props:["todos", "checkAlltodos", "clearAllSucessTasks"],
    methods: {
        deleteAllSucessTasks(){
            this.clearAllSucessTasks()
        }
    },
    computed:{
        allTotal(){
            if(this.todos instanceof Array) return this.todos.length
        },
        caletodos(){
            // 数组统计符合条件的元素个数reduce
            // return this.todos.reduce((pre, current)=>{
            //     return pre + (current.done ? 1:0)
            // }, 0)

            //最简化书写:reduce说明：作用：用于统计数组中满足条件的元素个数
            // 遍历数组，reduce第一个参数为箭头函数,第二个参数为初始值0，
            //（pre, todo）为箭头函数的两个参数，
            // 最后一个reduce函数的参数0为pre的初始值，返回值作为第二次遍历的初始值
            return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0)

            //普通循环统计
            // let n = 0
            // for (let i of this.todos){
            //     if(i.done){
            //         n++
            //     }
            // }
            // return n
        },
        isAll:{ //计算属性简写只能被读，当计算属性需要被修改时，则需要写成对象形式（完整版形式）
            get(){
                return this.caletodos === this.allTotal && this.allTotal > 0
            },
            set(value){
                this.checkAlltodos(value)
            }
            
        }
}
}
</script>

<style scoped>
    .todo-footer {
        margin-left: 40px;
        margin-bottom: 10px;
        /* border:1px solid; */
        margin-right: 0px;
    }
    .todo-footer button {
        float: right;
        margin-right: 10px;
        border-radius: 5px;
        background-color: red;
    }
</style>