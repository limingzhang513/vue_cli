<template>
  <div class="demo">
      <h1 v-text="msg"></h1>
      <!-- 通过父组件给子组件传递函数，实现子组件给父组件传递数据 -->
      <Student :getStudentName="getStudentName"/> 
      <hr>
      <!-- 第一种绑定自定义事件，实现子组件给父组件传递数据；如何触发：在子组件vc端使用$emit调用-->
      <School v-on:schoolname="getSchoolName"/>
      <hr>
      <!-- 简写形式 ,并设置了只触发一次-->
      <!-- <School @schoolname.once="getSchoolName"/> -->
      <!--
      原理：v-on是为School组件vc实例绑定了事件,如果想给父组件传递数据需要，设定回调方法在父组件
      在组件端使用this.$emit("自定义事件名", 数据参数)可以触发自定义事件 
      -->
      <!-- 第二种绑定自定义事件，定义ref属性 -->
      <!-- @click="show"这样写会被理解为自定义事件，需要在子组件内使用$emit -->
      <School ref="MySchool" @click="show2"/>
      <hr>

      <!-- 说明当前组件的click是原生的自带的点击事件 -->
      <School ref="MySchool" @click.native="show"/>

      <!-- ★★★★★上边的所有子组件： getSchoolName，show2，show 均需要在父组件才能被调用，且受到子组件的数据★★★★★-->
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
        },
        methods: {
            getStudentName(name){
                console.log(name)
            },
            getSchoolName(name, ...params){
                console.log("学校名称:", name, params)
            },
            show(){
                alert("我是原生dom点击事件")
            },
            show2(){
                alert("我的事件名虽然是click但是我是自定义事件不是原生dom事件")
            }
        },
        // 使用vue生命周期函数mounted，挂载完成后，触发自定义事件
        mounted() {  // mounted是和data属性同级的
            //在生命周期函数里为组件自定义一个事件，使用$on("事件名", "事件触发的函数"),  
            this.$refs.MySchool.$on('schoolname', this.getSchoolName)
            // this.$refs.MySchool.$on('schoolname', (name, ...params)=>{
            //     console.log("学校名称:", name, params)
            // })
            // 绑定的事件只限制触发一次
            // this.$refs.MySchool.$once('schoolname', this.getSchoolName)

            setTimeout(()=>{  // 设置三秒后生
                if(this.$refs.MySchool) {
                    console.log(this.$refs.MySchool.$options)
                    // console.log(this.$destroy())
                    }
                else{
                    console.log("不行了")
                    }
                    //this.$refs.MySchool.$destroy 的 最后一个$符号下会有...，取消方式：设置一下vetur配置，Validation: Script 取消勾选
                    // console.log(this.$refs.MySchool._events)  //组件有几个自定义事件
            }, 2000)
        },
    }
</script>
<style>
    .demo{
        background-color: gray;
        padding: 5px;
    }
</style>