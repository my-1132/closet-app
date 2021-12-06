<template>
    <div class="spring">
        <Header />
        <div class="tagName">
            #春
        </div>
        <div v-if="spring.length === 0 ">
            <span>アイテムがありません。</span>
        </div>
        <span class="container">
        <div v-for="springItem in spring" :key="springItem.id" >
            <span>{{springItem. title }}</span>
            <div><img class="imgs" :src="require(`~/assets/${springItem.url}`)" /></div>
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
        ...mapGetters(['spring'])
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
</style>