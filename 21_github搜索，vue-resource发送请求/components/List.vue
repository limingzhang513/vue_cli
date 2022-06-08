<template>
    <div>
        <div v-show="info.users.length" v-for="user in info.users" :key="user.login">
            <a :href="user.html_url">
                <img :src="user.avatar_url" alt="" style="width: 100px"/>
            </a>
            <p>{{user.login}}</p>
        </div>
        <h2 v-show="info.isFirst">欢迎使用查询用户系统！！！</h2>
        <h2 v-show="info.isLoading">加载中。。。。</h2>
        <h2 v-show="info.errmsg">{{info.errmsg}}</h2>
    </div>
</template>

<script>
export default {
    name:"List",
    data() {
        return {
            info:{
                isFirst:true,
                isLoading:false,
                errmsg:'',
                users: [],
            }

        }
    },
    methods: {
        getUserList(reqdata){
            this.info = {...this.info, ...reqdata}// 类似于python里字典的update方法
        }
    },
    mounted() {
        this.$bus.$on("userList", this.getUserList)
    },

}
</script>

<style>

</style>