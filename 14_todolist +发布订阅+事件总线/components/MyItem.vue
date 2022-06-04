<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="changeBox(todo.id)" />
            <!-- 如下使用v-model双向数据绑定也可以实现，但是不建议，因为官方不希望props接收的值被改变，此处因为被修改的值在对象里所以vue未报错 -->
            <!-- <input type="checkbox" v-model="todo.done"> -->
            <span>{{todo.title}}</span>
        </label>
        <button class="btn btn-danger" @click="deltilte(todo.id)">删除</button>
    </li>
</template>

<script>
// 导入第三方库
import pubsub from 'pubsub-js'


export default {
    name:"MyItem",
    // 声明接收参数todoObj
    props:['todo'],
    methods: {
        changeBox(id){
            // 触发事件，发送数据
            this.$bus.$emit("appcallback", id)
        },
        deltilte(id){
            if (confirm("确定删除吗？"))  // 弹窗提示确定删除吗？
            //通知app删除对应的对象, 触发全局事件，发送数据
            // 修改为发布订阅模式的发布数据
            // this.$bus.$emit("deleteSuccTitle", id)
            pubsub.publish("deleteSuccTitle", id)  //参数：消息名称（唯一标识），发布数据
        }
    },
}
</script>

<style scoped>
    /* li表示为整个li标签加属性；hover表示鼠标箭头的悬浮样式 */
    li {
        height: 30px;
        border: 1px;
        margin-right: 10px;
        /* 去掉li前边的点 */
        list-style-type:none;
    }
    li:hover{
        background-color: #ddd;
    }

    /* 表示li标签下的所有button标签 */
    li button {
        /* 漂浮起来 */
        float: right;
        display: none;
        margin-top: 3px;
        background-color: red;
        border-radius: 5px
    }

    /* 表示在鼠标箭头悬浮在li标签时，对button标签的样式属性修改，将隐藏修改为显示 */
    li:hover button {
        display: block;
    }

</style>