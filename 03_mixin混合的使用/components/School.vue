<template>
    <div>
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{addr}}</h2>
    </div>
</template>

<script>
    import {mixin, mixin2} from '../mixin'
    export default {
        name:'School',
        data() {
            return {
                name:"华电",
                addr:"保定",
                x:101  //以组件里的数据为主
            }
        },
        mixins:[mixin, mixin2] //引用混合
    }
</script>