<template>
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{addr}}</h2>
        <button @click="getSchoolName">点我获取学校名称给app</button>
        <button @click="offbind">解绑schoolname事件</button>
        <button @click="show">点我</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:"华电",
                addr:"保定",
            }
        },
        methods: {
            getSchoolName(){
                let infos = [1,2,3,4,5]
                this.$emit("schoolname", this.name, infos, 520) //通过获取自定义事件名获取并调用事件方法
            },
            show(){
                this.$emit("click")
            },
            offbind(){
                // this.$off("schoolname")  //只适用于解绑一个自定义事件
                // this.$off(["schoolname"])  //解绑多个自定义事件
                this.$off()  //解绑所有
                // this.$destroy()  // 销毁vc实例后,所有组件实例事件全部消失
            }
        },
    }
</script>
<style lang="less" scoped> 
    .demo{
        background-color: blue;
        padding: auto;
    }
</style>