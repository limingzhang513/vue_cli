<template>
  <div>
      <!-- <img src="./assets/logo.png" alt="logo"> -->
      <!-- ref属性就是为了给标签打标识，vue的专属，和和之前的id标识功能差不多 -->
      <h1 v-text="msg"></h1>
      <!-- 应用组件时，可以在标签内传参，被应用组件的vc必须配置props属性 -->
      <Student name="李明章" :age='19' sex="男"/> 
      <hr>
      <!-- 传入的属性加了：就表示动态属性，值就是表达式 -->
      <Student name="玩劳务" :age='20+1' sex="女"/>
  </div>
</template>

<script>
// 安装vuter后,输入<v + Tab键 自动出来vue开发模板
// App.vue 这个文件是所有组件的统一管理组件--必须有
    import Student from './components/Student'
    export default {
        name:"App",
        data() {
            return {
                msg:"欢迎同学学习vue!"
            }
        },
        components:{
            Student
        },
    }
</script>