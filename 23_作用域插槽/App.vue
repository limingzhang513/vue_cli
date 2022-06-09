<template>
    <div class="container">

        <!-- 作用插槽，标签渲染在父组件中，但数据在子组件中，可以通过在子组件动态绑定方式传入数据
            父组件在组件标签内必须使用template标签，在template标签内使用slot-scope属性获取子组件传过来的数据
         -->
         
        <Category title="游戏">
            <template slot-scope="{games}">
                <div>
                    <ul>
                        <li v-for="(data, index) in games" :key="index">{{data}}</li>
                    </ul>
                </div>
            </template>
        </Category>
        <Category title="游戏">
            <template slot-scope="games">
                <div>
                    <ol>
                        <li v-for="(data, index) in games.games" :key="index">{{data}}</li>
                    </ol>
                </div>
            </template>
        </Category>

        <Category title="游戏">
            <template slot-scope="{games}">
                <h2 v-for="(data, index) in games" :key="index">{{data}}</h2>
            </template>
            
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'
export default {
    components: {Category},
    name:"App",
}
</script>
<style>
/* 多个类标签添加样式用","都好分割 */
    .container, .foot{
        display: flex;
        justify-content: space-around;
    }
    img{
        width: 100%;
    }
    video{
        width: 100%;
    }
    h2,.cen{
        text-align: center;
    }
</style>