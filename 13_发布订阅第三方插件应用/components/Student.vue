<template>
    <div class="stu">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentNameToSchool">点我把学生姓名发给兄弟组件School</button>
    </div>
</template>

<script>
    import pubsub from 'pubsub-js'
    export default {
        name:'Student',
        data() {
            return {
                name: "李明章",
                sex: "男"
            }
        },
        methods:{
            // 找到事件，发送数据
            sendStudentNameToSchool(){
                // this.$bus.$emit("student", this.name)
                pubsub.publish("studentname", this.name)  // 参数：消息名称，数据
            }
        }
    }
</script>
<style  lang="less" scoped>
    .stu{
        background-color: orange;
        padding: auto;
    }
</style>