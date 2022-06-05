<template>
    <ul class="todo-main">
        <MyItem 
        v-for="todoObj of todos" 
        :key="todoObj.id" 
        :todo="todoObj"/> 
    </ul>
</template>

<script>
import MyItem from '@/components/MyItem'
export default {
    name:"MyList",
    components:{MyItem},
    props:["todos"]
}
</script>

<style>

</style>