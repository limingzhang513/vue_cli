<template>
<div class="Category">
    <h3>{{title}}分类</h3>

    <!--  -->
    <!-- <slot :games="games" >我是一些默认值</slot>  -->
    <slot :games="games" >我只是单一的作用域插槽</slot> 
    <!-- <slot name="xia">我是一些默认值</slot>  -->
</div>
  
</template>

<script>
export default {
    name:"Category",
    props:['title'],
    data() {
        return {
            games:['王者', '联盟', 'cf', 'dnf'],
        }
    },
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