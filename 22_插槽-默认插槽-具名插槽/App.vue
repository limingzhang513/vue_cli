<template>
    <div class="container">
        <!-- Category组件内的a 标签会直接渲染到默认插槽 -->
        <!-- <Category>
            <a href="xxx">xxxx</a>
        </Category> -->
        
        <Category title="食物">
            <img slot="zhong" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F27%2Fe8%2F06%2F27e806c993b312ae19ebc98946a9f16d.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657271319&t=9c2fef5ba4670e1c2ac3421f03539ae6" alt="">
            <div class="cen" slot="xia">
                <a href="https:www.baidu.com">更多美食</a>
            </div>

        </Category>
        <Category title="游戏">
            <div slot="zhong">
                <ul>
                    <li v-for="(data, index) in games" :key="index">{{data}}</li>
                </ul>
            </div>
            <div class="foot" slot="xia">
                <a href="https:www.baidu.com">网络游戏</a>
                <a href="https:www.baidu.com">单机游戏</a>
            </div>

        </Category>
        <Category title="电影">
            <img  slot="zhong" src="https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2F352be5223a89d9552af264d17433da561995654140507-JgGauT_fw658&refer=http%3A%2F%2Fhbimg.b0.upaiyun.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1657272817&t=d26a0b4e9c1e23a7c45e9fcd126b23c4" alt="">
            <template slot="xia">
                <div class="foot">
                <a href="www.aibua.com">武侠</a>
                <a href="www.aibua.com">爱情</a>
                <a href="www.aibua.com">动作</a>
                </div>
            </template>
            
        </Category>
    </div>
</template>

<script>
import Category from './components/Category'
export default {
    components: {Category},
    name:"App",
    data() {
        return {
            foods:['烧饼', '油条', '豆浆', '茶叶蛋'],
            games:['王者', '联盟', 'cf', 'dnf'],
            films:['金刚', '金瓶梅', '金鸡奖', '金子']
        }
    },
}
</script>
<style>
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
    .cen{
        text-align: center;
    }
</style>