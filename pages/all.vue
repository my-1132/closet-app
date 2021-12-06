<template>
    <div class="all">
        <Header />
        <div class="tagName">
            #オールシーズン
        </div>
        <div v-if="all.length === 0 ">
            <span>アイテムがありません。</span>
        </div>
        <span class="container">
            <div v-for="(allItem,index) in all" :key="index">
                <span>{{allItem. title }}</span>
                <div><img class="imgs" :src="require(`~/assets/${allItem.url}`)" /></div>
            </div>
        </span>
    </div>
</template>

<script>
import { mapGetters,} from 'vuex'
import Header from "../components/Header.vue"

export default{
    components:{
        Header
    },
    computed:{
        ...mapGetters(['all'])
    },
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
}
</style>