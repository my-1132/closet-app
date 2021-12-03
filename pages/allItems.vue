<template>
    <div class="allItems">
        <Header />
        <div class="tagName">
            全てのアイテム
        </div>
        <div v-if="clothList.chosens.length === 0 ">
            <span>アイテムがありません。</span>
        </div>
        <span class="container">
            <div v-for="clothListItem in clothList.chosens" :key="clothListItem.id" class="container2">
                <span>{{clothListItem.title }}</span>
                <div><img class="imgs" :src="require(`~/assets/${clothListItem.url}`)" /></div>
            </div>
        </span>
    </div> 
</template>

<script>
import { mapState } from 'vuex'
import Header from "../.nuxt/components/Header.vue"

export default{
    components:{
        Header
    },
    computed:{
        ...mapState(['clothList'])
    },
    created(){
        console.log(this.clothList);
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