<template>
    <div class="bottom">
        <Header />
        <div class="tagName">
            ボトムス
        </div>
        <div v-if="bottom.length === 0 ">
            <span>アイテムがありません。</span>
        </div>
        <span class="container">
        <div v-for="bottomItem in bottom" :key="bottomItem.id" class="container2">
            <span>{{bottomItem. title }}</span>
            <div><img class="imgs" :src="require(`~/assets/${bottomItem.url}`)" /></div>
        </div>

        </span>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from "../components/Header.vue"

export default{
    components:{
        Header
    },
    computed:{
        ...mapGetters(['bottom'])
    }
}
</script>

<style lang="scss" scoped>
.tagName{
    color: #fff;
    background-color: #4d4d4d;
    padding: 10px;
    text-align: center;
}
.container{
    display: flex;
    flex-wrap: wrap;
}
.container2{
    margin-left: 0 auto;
    margin-right: auto;
    width: 8em
}
.imgs{
    width: 300px;
    height: 300px;
    padding: 5%;
}
</style>