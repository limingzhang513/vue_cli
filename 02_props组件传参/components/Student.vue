<template>
    <div>
        <h2>学生姓名：{{name}}</h2>
        <!-- 这里把接收的age重新用data定义新属性接收，方便动态修改 -->
        <h2>学生年龄：{{myAge}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="showName">点我显示学生姓名</button> 
        <button @click="addAge">点我年龄加 1</button>     
    </div>
</template>

<script>
    export default {
        name:'Stusent',
        data() {
            return {
                myAge: this.age
            }
        },
        methods: {
            showName(){
                alert(this.name)
            },
            addAge(){
                this.myAge++
            }
        },
        // 第一种方式    // 外部传入的参数无法修改的  //这里的数据优先被接收，
        props:["name", "age", "sex"]  // props，在模板引用组件时，灵活传参
        
        // 第二种方式
        // props:{
        //     name:String,  //限制接收参数的类型
        //     age:Number,
        //     sex:String
        // }

        // 第三种方式
        // props:{
        //     name:{
        //         type:String,  // 类型限制
        //         required: true  // 必要性限定
        //     },
        //     age:{
        //         type:Number,
        //         default:30  //默认值指定
        //     },
        //     sex:{
        //         type:String,
        //         required: true
        //     }
        // }
    }
</script>