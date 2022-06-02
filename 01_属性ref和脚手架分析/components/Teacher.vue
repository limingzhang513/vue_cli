<template>
  <div class="teacher">
      <h2>姓名：{{name}}</h2>
      <h2>性别：{{sex}}</h2>
      <button @click="showTeacher">点我显示老师名字</button>
  </div>
</template>

<script>
export default {
    name: 'Teacher',
    data() {
        return {
            name:'杨白雪',
            sex:'女'
        }
    },
    methods: {
        showTeacher(){
            alert(this.name)
        }
    },
}
</script>

<style>
    .teacher{
        background-color: aquamarine;
    }
</style>