<template>
  <div>
      <!-- <img src="./assets/logo.png" alt="logo"> -->
      <!-- ref属性就是为了给标签打标识，vue的专属，和和之前的id标识功能差不多 -->
      <h1 v-text="msg" ref="title" class="msg"></h1>
      <button ref="btn" @click="showDom">点火获取上边的dom</button>
      <School ref="sch"></School>
  </div>
</template>

<script>
// 安装vuter后,输入<v + Tab键 自动出来vue开发模板
// App.vue 这个文件是所有组件的统一管理组件--必须有
    import School from './components/School'
    export default {
        name:"App",
        data() {
            return {
                msg:"欢迎学习vue!"
            }
        },
        components:{
            School
        },
        methods: {
            showDom(){
                console.log(this.$refs)
                console.log(this.$refs.title)  //通过vue的$refs属性获取这个标签对象
                console.log(this.$refs.btn)  //获取按钮标签对象
                console.log(this.$refs.sch)  //获取组件实例对象
            }
        },
    }
</script>

<style>
    .msg{
        color: rgb(176, 26, 26);;
    }
</style>