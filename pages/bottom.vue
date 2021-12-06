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
        <div v-for="bottomItem in bottom" :key="bottomItem.id">
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
    text-align: center;
    padding: 10px;
}
.container{
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
    margin-left: 70px;}
.imgs{
    width: 300px;
    height: 300px;
    padding: 5%;
}
@media screen and (max-width: 450px){
    .container{
        margin: 0 ;
    }
}

</style>