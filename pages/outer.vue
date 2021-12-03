<template>
    <div class="outer">
        <Header />
        <div class="tagName">
            アウター
        </div>
        <div v-if="outer.length === 0 ">
            <span>アイテムがありません。</span>
        </div>
        <span class="container">
        <div v-for="outerItem in outer" :key="outerItem.id" class="container2">
            <span>{{outerItem. title }}</span>
            <div><img class="imgs" :src="require(`~/assets/${outerItem.url}`)" /></div>
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
        ...mapGetters(['outer'])
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