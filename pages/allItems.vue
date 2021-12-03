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
            <div v-for="(clothListItem,index) in clothList.chosens" :key="clothListItem.id" class="container2">
                <span>{{clothListItem.title }}</span>
                <span><button @click="deleteConfirm(index)">削除</button></span>
                <div><img class="imgs" :src="require(`~/assets/${clothListItem.url}`)" /></div>
            </div>
        </span>
    </div> 
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Header from "../components/Header.vue"

export default{
    components:{
        Header
    },
    computed:{
        ...mapState(['clothList'])
    },
    created(){
        console.log(this.clothList);
    },
    methods:{
        deleteConfirm(index){
            if(confirm('削除してもいいですか？')){
                this.deleteClosetItem(index)
            }
        },
        ...mapActions(['deleteClosetItem'])
    },
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