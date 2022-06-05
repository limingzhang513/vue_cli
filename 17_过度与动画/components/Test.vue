<template>
    <div>
        <button @click="isShow = !isShow">显示/隐藏</button>
        <transition name="lmz" appear>
            <h2 v-show="isShow">你好啊！！！</h2>
        </transition>
    </div>
</template>

<script>
export default {
    name:"Test",
    data() {
        return {
            isShow: true
        }
    },
}
</script>

<style>
    div h2 {
        background-color: orange;
    }
    .lmz-enter-active{
        animation: donghua 1s;
    }
    .lmz-leave-active{
        animation: donghua 1s reverse;
    }
    @keyframes donghua {
        from{
            transform: translateX(-100%);
        }
        to{
            transform: translateX(0px);
        }
    }
</style>