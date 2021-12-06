<template>
    <div class="spring">
        <Header />
        <div class="tagName">
            <span>#秋</span>
        </div>
        <div v-if="autumn.length === 0 ">
            <span>アイテムがありません。</span>
        </div>
        <span class="container">
        <div v-for="autumnItem in autumn" :key="autumnItem.id" >
            <span>{{autumnItem. title }}</span>
            <div><img class="imgs" :src="require(`~/assets/${autumnItem.url}`)" /></div>
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
        ...mapGetters(['autumn'])
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