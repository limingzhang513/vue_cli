<template>
    <div>
        <button @click="getStudentName">获取学生信息</button>
        <h2>学生姓名：{{info.name}}</h2>
        <h2>学生年龄：{{info.age}}</h2>
        <h2>学生性别：{{info.sex}}</h2>
        <h2>学生描述：{{info.msg}}</h2>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"App",
    data() {
        return {
            info:{
                name:"",
                age:"",
                sex:'',
                msg:''
            }

        }
    },
    methods:{
        //跨域问题：协议，域名，端口不一致就会存在跨域问题：一般跨域请求数据是请求回来了，但是浏览器识别到请求跨域了就不在给用户
        /*
        Ⅰ、采用cors解决跨域问题，需要后端在响应头内加入一些信息，当浏览器识别到这些信息便可以放手把数据给到用户
        Ⅱ、利用前端的jsonp,就是利用script标签中的src属性可以请求外部资源的特殊能力，但需要前后端配合，并且，src只限制get类请求
        Ⅲ、代理服务器（最常用：原理：将代理服务器和前端保持同源，再用代理服务器和后端进行http通信（代理和后端服务之间不存在跨域问题））
        */
        getStudentName(){
            // 脚手架开启了代理后，请求的端口需要改成前端的8080，api是后端接口的，
            // 因为vue.config.js里配置的localhost,所以这里也需要使用localhost
            axios.get("http://localhost:8080/api/checkouts/checkout1").then(
                Response =>{
                    console.log('请求成功',Response.data)
                    this.info = Response.data
                },
                error =>{
                    console.log('请求失败', error.message)
                }
            )
        }
    }
}
</script>
<style>
</style>