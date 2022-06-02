<template>
    <div class="stu">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name: "李明章",
                sex: "男"
            }
        }
    }
</script>
<style>
    .stu{
        background-color: orange;
    }
</style>