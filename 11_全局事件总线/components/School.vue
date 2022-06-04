<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{addr}}</h2>
        <h2>查询的学生姓名：{{studentName}}</h2>
    </div>
</template>

<script>
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
            this.$bus.$on("student", (name)=>{
                console.log("student 组件发过来的学生姓名", name)
                this.studentName = name
            })
        },
        beforeDestroy() {
            // 全局的事件总线，如果使用完了不销毁，则一直占用
            this.$bus.$off("student")
        }
    }
</script>
<style lang="less" scoped> 
    .demo{
        background-color: blue;
        padding: auto;
    }
</style>