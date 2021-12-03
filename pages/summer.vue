<template>
    <div class="summer">
        <Header />
        <div class="tagName">
            #夏
        </div>
        <div v-if="summer.length === 0 ">
            <span>アイテムがありません。</span>
        </div>
        <span class="container">
        <div v-for="summerItem in summer" :key="summerItem.id" class="container2">
            <span>{{summerItem. title }}</span>
            <div><img class="imgs" :src="require(`~/assets/${summerItem.url}`)" /></div>
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
        ...mapGetters(['summer'])
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