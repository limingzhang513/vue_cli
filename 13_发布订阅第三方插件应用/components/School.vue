<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{addr}}</h2>
        <h2>查询的学生姓名：{{studentName}}</h2>
    </div>
</template>

<script>
    // 导入安装的发布订阅第三方插件；安装方式：npm i pubsub-js
    import pubsub from 'pubsub-js'  
    export default {
        name:'School',
        data() {
            return {
                name:"华电",
                addr:"保定",
                studentName:'',
            }
        },
        mounted() {
            // console.log("挂在后获取全局总线：", this.$bus)
            //注册自定义事件，接收数据
            // this.$bus.$on("student", (name)=>{
            //     console.log("student 组件发过来的学生姓名", name)
            //     this.studentName = name
            // })

            // 在需要数据的组件进行订阅设定，当其他组件发布了数据，订阅组件会自动获取到数据
            this.pubId = pubsub.subscribe("studentname", (msgName, data)=>{  //或者把这个箭头函数写道methods里
                console.log("student 组件发过来的学生姓名", data, "消息名称(标识):", msgName)
                console.log(this)
                this.studentName = data
            })  
        },
        beforeDestroy() {
            // 全局的事件总线，如果使用完了不销毁，则一直占用
            // this.$bus.$off("student")
            pubsub.unsubscribe(this.pubId)  //取消订阅
        }
    }
</script>
<style lang="less" scoped> 
    .demo{
        background-color: blue;
        padding: auto;
    }
</style>