<template>
    <section>
        <h3>查询github用户</h3>
        <div>
            <input type="text" placeholder="输入姓名匹配查询" v-model="keyword"/>&nbsp;
            <button @click="getUsers">查询</button>
        </div>

    </section>
</template>

<script>
import axios from 'axios'
export default {
    name: "Search",
    data() {
        return {
            keyword:'',
        }
    },
    methods: {
        getUsers(){
            // 点击查询时
            this.$bus.$emit("userList", {isFirst:false, isLoading:true, errmsg:'', users:[]})
            // github的免费测试接口获取用户信息
            axios.get(`https://api.github.com/search/users?q=${this.keyword}`).then(
                Response => {
                    // console.log("请求成功了", Response.data.items)
                    //发送github获取的数据，成功响应后
                    this.$bus.$emit("userList", {isLoading:false, errmsg:'', users:Response.data.items})
                },
                error => {
                    // console.log("失败了", error.message)
                    this.$bus.$emit("userList", {isLoading:false, errmsg:error.message, users:[]})
                }
            )
        },

    },
}
</script>

<style>

</style>