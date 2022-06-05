<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="changeBox(todo.id)" />
            <!-- 如下使用v-model双向数据绑定也可以实现，但是不建议，因为官方不希望props接收的值被改变，此处因为被修改的值在对象里所以vue未报错 -->
            <!-- <input type="checkbox" v-model="todo.done"> -->
            <span v-show="!todo.isedit" v-text="todo.title" ref="todoTitle"></span>
            <span>
                <input type="text" v-show="todo.isedit" :value="todo.title" ref="updateValue">
                <!-- <button v-show="isshow" @click="updateTilteOk">确认</button> -->
            </span>
        </label>
        <button class="btn btn-danger" @click="deltilte(todo.id)">删除</button>
        <button class="btn-edit" @click="editTitle(todo)" v-show="!todo.isedit">编辑</button>
        <button class="btn-edit" @click="updateTilteOk(todo)" v-show="todo.isedit">确认</button>
    </li>
</template>

<script>
// 导入第三方库
import pubsub from 'pubsub-js'


export default {
    name:"MyItem",
    // 声明接收参数todoObj
    props:['todo'],
    data() {
        return {
            yesorno:true,
        }
    },
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
        },
        editTitle(todo){
            if (!todo.hasOwnProperty("isedit")){  //判断对象是否包含某key值
                this.$set(todo, "isedit", true)
            }else{
                todo.isedit = true
            }
            setTimeout(()=>{
                this.$refs.updateValue.focus()  //加入等待任务才能触发获取焦点
            }, 200)
            // todo.isedit = false

        },
        updateTilteOk(todo){
            // console.log(this.$refs.updateValue.value)

            var data = [todo.id, this.$refs.updateValue.value]
            if(!this.$refs.updateValue.value){
                alert("输入不能为空")
                setTimeout(()=>{
                    this.$refs.updateValue.focus()  //加入等待任务才能触发获取焦点
                }, 200)
                console.log(data)
                return
            }
            pubsub.publish("updateTitleOK", data)
            // this.yesorno = true
            this.$refs.todoTitle.innerText = this.$refs.updateValue.value
            todo.isedit = false
        },
        handlerFocus(){

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
    }

    /* 表示在鼠标箭头悬浮在li标签时，对button标签的样式属性修改，将隐藏修改为显示 */
    li:hover button {
        display: block;
    }

</style>