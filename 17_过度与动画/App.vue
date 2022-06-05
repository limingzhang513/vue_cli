<template>
    <div>
        <Test/>   
        <Test2/>   
        <Test3/>   
    </div>
</template>

<script>
// 安装npm里的动画库：npm i animate.css
import Test from './components/Test'
import Test2 from './components/Test2'
import Test3 from './components/Test3'
export default {
    name:"App",
    components:{Test, Test2, Test3},
}
</script>
<style>
</style>