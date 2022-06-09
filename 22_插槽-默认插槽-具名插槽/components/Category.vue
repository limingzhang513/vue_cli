<template>
<div class="Category">
    <h3>{{title}}分类</h3>

    <!-- 定义一个默认插槽 -->
    <!-- <slot></slot> -->

    <!-- 定义一个具名插槽 -->
    <slot name="zhong">我是一些默认值</slot> 
    <slot name="xia">我是一些默认值</slot> 
</div>
  
</template>

<script>
export default {
    name:"Category",
    props:['title']
}
</script>

<style scoped>
    .Category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3 {
        text-align: center;
        background-color: orange;
    }

</style>