<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{addr}}</h2>
        <button @click="showName">点我显示学校名称</button>
        <Student/>
        <Teacher></Teacher>
        
    </div>
</template>

<script>
    // 把组件暴露出去才能被其他组件import导入
    // export const School = Vue.extend({  // 第一种暴露方式
    // const School = Vue.extend({
    //     data() {
    //         return {
    //             name:"华电",
    //             addr:"保定"
    //         }
    //     },
    //     methods: {
    //         showName(){
    //             alert(this.name)
    //         }
    //     },
    // })
    // export default School  // 第二种暴露方式

    // 第三种暴露方式
    // export default Vue.extend({
    //     name:"School", //尽量保持与文件名一致
    //     data() {
    //         return {
    //             name:"华电",
    //             addr:"保定"
    //         }
    //     },
    //     methods: {
    //         showName(){
    //             alert(this.name)
    //         }
    //     },
    // })


    //第四种暴露方式，也是最常用最简洁的方式
    import Student from './Student'
    import Teacher from './Teacher'
    export default {
        name:'School', //文件名一致,文件名School.vue, 则name:"SchoolVue"
        data() {
            return {
                name:"华电",
                addr:"保定"
            }
        },
        components:{Student, Teacher},
        methods: {
            showName(){
                alert(this.name)
            }
        },
    }
</script>

<style>
    .demo{
        background-color: orange;
    }
</style>