<template>
    <div class="all">
        <Header />
        <div class="tagName">
            #オールシーズン
        </div>
        <div v-if="all.length === 0 ">
            <span>アイテムがありません。</span>
        </div>
        <div class="container">
            <div v-for="(allItem,index) in all" :key="index" class="container2">
                <span>{{allItem. title }}</span>
                <span><button @click="deleteConfirm(index)">削除</button></span>
                <div><img class="imgs" :src="require(`~/assets/${allItem.url}`)" /></div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters,} from 'vuex'
import Header from "../.nuxt/components/Header.vue"

export default{
    components:{
        Header
    },
    computed:{
        ...mapGetters(['all'])
    },
    methods:{
        deleteConfirm(index){
            if(confirm("削除してもよろしいですか？")){
                this.all.splice(index,1)

}
        }
        // ...mapActions(['deleteClosetItem'])
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
        // display: flex;
        flex-wrap: wrap;
        text-align: center;
}
.container2{
    margin-left: 0 auto;
    margin-right: auto;
    width: 8em
}
.imgs{
    width: 300px;
    height: 300px;
}
</style>