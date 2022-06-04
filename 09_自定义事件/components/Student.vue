<template>
    <div class="stu">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="getName">点击获取学生姓名给app</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        props:['getStudentName'],
        data() {
            return {
                name: "李明章",
                sex: "男"
            }
        },
        methods: {
            getName(){
                this.getStudentName(this.name)
            }
        },

    }
</script>
<style  lang="less" scoped>
    .stu{
        background-color: orange;
        padding: auto;
    }
</style>