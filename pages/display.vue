<template>
    <div class="container">
        <Header />
        <h2>クローゼット</h2>
        <div class="items">
            <div>
                <span>アイテム</span>
                <nuxt-link to="/allItems">
                    <span>すべて見る</span>
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="/tops">
                    トップス
                    <span>{{tops.length}}アイテム</span>
                    <span>></span>
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="/bottom">
                    ボトムス
                    <span>{{bottom.length}}アイテム</span>
                    <span>></span>
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="/outer">
                    アウター
                    <span>{{outer.length}}アイテム</span>
                    <span>></span>
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="/shoes">
                    シューズ
                    <span>{{shoes.length}}アイテム</span>
                    <span>></span>
                </nuxt-link>
            </div>
        </div>
        <div class="season">
            <div>シーズン</div>
            <div>
                <nuxt-link to="/all">
                    オールシーズン
                    <span>{{all.length}}アイテム</span>
                    <span>></span>
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="/spring">
                    春                    
                    <span>{{spring.length}}アイテム</span>
                    <span>></span>
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="/summer">
                    夏
                    <span>{{summer.length}}アイテム</span>
                    <span>></span>
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="/autumn">
                    秋
                    <span>{{autumn.length}}アイテム</span>
                    <span>></span>
                </nuxt-link>
            </div>
            <div>
                <nuxt-link to="/winter">
                    冬
                    <span>{{winter.length}}アイテム</span>                   
                    <span>></span>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {  mapState,mapGetters} from 'vuex'
    // import Header from "../.nuxt/components/Header.vue"
export default {
    // components:{
    //     Header
    // },
    data: () => {
        return {
            latitude: 0,
            longitude: 0,
            weatherInfo: [],
        }
    },
    computed: {
        ...mapState(['clothList']),
        ...mapGetters(['all','spring','summer','autumn','winter','tops','bottom','outer','shoes'])
    },
    created() {
        console.log(this.clothList);
        console.log(this.all);
        console.log(this.spring);
        console.log(this.summer);
        console.log(this.autumn);
        console.log(this.winter);
    },
    methods:{
    }
}
</script>

<style lang="scss" scoped>

    @mixin box($background-color) {
        background-color: $background-color;
    }
    .seasontitle {
        // position: relative;
        // display: inline-block;
        // margin: 1.5em 15px 1.5em 0;
        // padding: 0 5px;
        // width: 90px;
        // height: 90px;
        // line-height: 90px;
        // text-align: center;
        // color: #eee;
        // font-size: 20px;
        // font-weight: bold;
        // border-radius: 50%;
        // box-sizing: border-box;
        width: 100%;
        padding: 25px;
        margin-top: 15px;
        font-size: 20px;

    }

    .container {
        font-family: "Hiragino Maru Gothic Pro";
    }
    .container3 {
        display: flex;
        flex-wrap: wrap;
        // text-align: center;
    }
    .container2{
        border:grey 2px dashed;
        border-radius: 5px;
        padding: 3px 5px;
        width: 70%;
    }

</style>

