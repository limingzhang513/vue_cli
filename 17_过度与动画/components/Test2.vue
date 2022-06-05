<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition-group name="lmz" appear>
            <!-- 动画交替出现 -->
            <h2 v-show="!isShow" key="1">你好啊！！！</h2>
            <h2 v-show="isShow" key="2">我不好！！！</h2>
        </transition-group>
        
    </div>
</template>

<script>
export default {
    name:"Test2",
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
    /* 进入起点离开终点*/
    .lmz-enter, .lmz-leave-to{
        transform: translateX(-100%);
    }
    /* 进入离开时长 */
    .lmz-enter-active, .lmz-leave-active{
        transition: 0.8s linear;
    }
    /* 进入终点 离开起点*/
    .lmz-enter-to, .lmz-leave{
        transform: translateX(0);
    }   
</style>