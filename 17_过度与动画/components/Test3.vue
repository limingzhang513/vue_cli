<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group 
            appear
            name="animate__animated animate__bounce"
            enter-active-class="animate__swing"
            leave-active-class="animate__backOutUp"   
        >
            <h2 v-show="!isShow" key="1">你好啊！！！</h2>
            <h2 v-show="isShow" key="2">我不好！！！</h2>
        </transition-group>
        
    </div>
</template>

<script>
import 'animate.css' // 样式库直接导入不用from
export default {
    name:"Test3",
    data() {
        return {
            isShow: true
        }
    },
}
</script>

<style scoped>
    div h2 {
        background-color: orange;
    } 
</style>