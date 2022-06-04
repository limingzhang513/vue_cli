<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
    </div>
</template>

<script>
import { nanoid } from 'nanoid'
export default {
    name:"MyHeader",
    methods: {
        add(e){
            if(!e.target.value) return alert("不能为空")
            const todoObj = {id:nanoid(), title:e.target.value, done:false}
            this.$emit('addTodo', todoObj)
            e.target.value = ''
        }
    },
}
</script>

<style scoped>
    .todo-header {
        margin-left: 2px;
    }
    .todo-header input {
        display: block;
        width: 506px;
        height: 20px;
        margin-top: 5px;
        margin-left: 41px;
    }
</style>