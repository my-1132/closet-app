<template>
    <div class="winter">
        <Header />
        <div class="tagName">
            #冬
        </div>
        <div v-if="winter.length === 0 ">
            <span>アイテムがありません。</span>
        </div>
        <span class="container">
        <div v-for="winterItem in winter" :key="winterItem.id" >
            <span>{{winterItem. title }}</span>
            <div><img class="imgs" :src="require(`~/assets/${winterItem.url}`)" /></div>
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
        ...mapGetters(['winter'])
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
    margin-top: 40px;
    margin-left: 70px;}

.imgs{
    width: 300px;
    height: 300px;
    padding: 5%;
}
</style>