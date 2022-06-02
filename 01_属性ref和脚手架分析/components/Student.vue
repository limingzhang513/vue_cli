<template>
    <div class="sch">
        <h2>姓名：{{name}}</h2>
        <h2>年龄：{{age}}</h2>
        <button @click="showName($event)">点我显示学生名字</button>
    </div>
</template>

<script>
    //第四种暴露方式，也是最常用最简洁的方式
    export default {
        name:'Student', //尽量保持与文件名一致
        data() {
            return {
                name: "李明章",
                age: 30
            }
        },
        methods: {
            showName(event){  //默认事件对象为第一个参数
                console.log(event.target.innerText)  //通过事件找到标签文本内容
                alert(this.name)
            }
        },
    }
</script>

<style>
    .sch{
        background-color: blue;
    }
</style>