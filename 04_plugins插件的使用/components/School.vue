<template>
    <div>
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{addr}}</h2>
        <!-- 使用全局的指令，在input标签自动获取焦点，并指定初始值 -->
        <input type="text" v-fbind:value="name">
        <button @click="myhello">点我调用全局的hello方法</button>
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
        methods:{
            myhello(){
                this.hello()  //全局的hello方法
            }
        }
    }
</script>