<template>
    <ul class="todo-main">
        <transition-group 
            appear=""
            name="animate__animated animate__bounce"
            enter-active-class="animate__backInRight"
            leave-active-class="animate__fadeOutTopRight"
        >
            <MyItem 
                v-for="todoObj of todos" 
                :key="todoObj.id" 
                :todo="todoObj"/> 
        </transition-group>

    </ul>
</template>

<script>
import 'animate.css'
import MyItem from '@/components/MyItem'
export default {
    name:"MyList",
    components:{MyItem},
    props:["todos"]
}
</script>

<style>

</style>