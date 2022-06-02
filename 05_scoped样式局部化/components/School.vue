<template>
    <div class="demo">
        <h2 class="clo">学校名称：{{name}}</h2>
        <h2 class="ziti">学校地址：{{addr}}</h2>
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
        }
    }
</script>
<style lang="less" scoped> 
/* lang表示,使用的样式语言less、css等,不可以写成lang='', 默认是css*/
/* 安装最新的less语言插件命令：npm i less-loader */
/* 注意所有vue组件的样式是混在一起的; 使用scoped属性可以限制当前文件样式只在当前组件使用*/
    .demo{
        background-color: blue;
        .ziti{
            font-size: 40px;  //可以嵌套样式
        }
        .clo{
            color: red;
        }
    }
</style>>


</style>