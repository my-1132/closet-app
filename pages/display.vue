<template>
    <div class="container">
        <Header />
        <h2 class="name">クローゼット</h2>
        <div class="items">
            <div class="tag">
                <span class="stl">アイテム</span>
                <nuxt-link to="/allItems">
                    <div class="right">
                        <button class="rightBtn">すべて見る</button>
                    </div>
                </nuxt-link>
            </div>
            <div class="tagStyle">
                <nuxt-link to="/tops">
                    <button class="btnStyle">
                        トップス
                        <span>{{tops.length}}アイテム</span>
                        <span>></span>
                    </button>
                </nuxt-link>
            </div>
            <div class="tagStyle">
                <nuxt-link to="/bottom">
                    <button class="btnStyle">
                        ボトムス
                        <span>{{bottom.length}}アイテム</span>
                        <span>></span>
                    </button>
                </nuxt-link>
            </div>
            <div class="tagStyle">
                <nuxt-link to="/outer">
                    <button class="btnStyle">
                        アウター
                        <span>{{outer.length}}アイテム</span>
                        <span>></span>
                    </button>
                </nuxt-link>
            </div>
            <div class="tagStyle">
                <nuxt-link to="/shoes">
                <button class="btnStyle">
                    シューズ
                    <span>{{shoes.length}}アイテム</span>
                    <span>></span>
                </button>
                </nuxt-link>
            </div>
        </div>
        <div class="season">
            <div class="tag">
                シーズン
                <div></div>
            </div>
            <div class="tagStyle">
                <nuxt-link to="/all">
                    <button class="btnStyle">オールシーズン
                        <span>{{all.length}}アイテム</span>
                        <span>></span>
                    </button>
                </nuxt-link>
            </div>
            <div class="tagStyle">
                <nuxt-link to="/spring">
                    <button class="btnStyle">
                        春                    
                        <span>{{spring.length}}アイテム</span>
                        <span>></span>
                    </button>
                </nuxt-link>
            </div>
            <div class="tagStyle">
                <nuxt-link to="/summer">
                    <button class="btnStyle">
                        夏
                        <span>{{summer.length}}アイテム</span>
                        <span>></span>
                    </button>
                </nuxt-link>
            </div>
            <div class="tagStyle">
                <nuxt-link to="/autumn">
                    <button class="btnStyle">
                        秋
                        <span>{{autumn.length}}アイテム</span>
                        <span>></span>
                    </button>
                </nuxt-link>
            </div>
            <div class="tagStyle">
                <nuxt-link to="/winter">
                    <button class="btnStyle">
                        冬
                        <span>{{winter.length}}アイテム</span>                   
                        <span>></span>
                    </button>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script>
    import {  mapState,mapGetters} from 'vuex'
    import Header from "../components/Header.vue"
export default {
    components:{
        Header
    },
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
        width: 100%;
        padding: 25px;
        margin-top: 15px;
        font-size: 20px;
    }

    .container {
        font-family: "Hiragino Maru Gothic Pro";
    }
    .tag{
        background-color: #80a491;
        padding: 15px 10px;
        color: #fff;
        font-size: 18px;
    }
    .tagStyle{
        padding: 12px 10px;
        border-style: solid ;
        border-width: 1px;

    }
    .btnStyle{
        text-decoration: none;
        border: none;
        background: transparent;
        font-size: 20px;

    }
    .right{
        text-decoration: none;
        text-align: right;
        padding: 0 15px 0 0 ;
    }
    .rightBtn{
        text-decoration: none;
        border: none;
        background: transparent;
        font-size: 17px;
        color: #fff;
    }
    .name{
        text-align: center;
    }

    @media screen and (max-width: 450px){


        
    }


</style>
