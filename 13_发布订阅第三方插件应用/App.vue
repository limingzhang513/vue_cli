<template>
  <div class="demo">
      <h1 v-text="msg"></h1>
      <!-- 通过父组件给子组件传递函数，实现子组件给父组件传递数据 -->
      <Student/> 
      <hr>
      <School/>
  </div>
</template>

<script>
// 安装vuter后,输入<v + Tab键 自动出来vue开发模板
// App.vue 这个文件是所有组件的统一管理组件--必须有
    import Student from './components/Student'
    import School from './components/School'
    export default {
        name:"App",
        data() {
            return {
                msg:"欢迎新同学学习vue!"
            }
        },
        components:{
            Student,
            School
        }
    }
</script>
<style>
    .demo{
        background-color: gray;
        padding: 5px;
    }
</style>