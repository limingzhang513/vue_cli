<template>
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    import {mixin, mixin2} from '../mixin'
    export default {
        name:'Stusent',
        data() {
            return {
                name:"李明章",
                sex:"男"
            }
        },
        mixins:[mixin, mixin2] //引用混合
    }
</script>