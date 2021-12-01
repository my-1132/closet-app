<template>
    <div class="container">
        <Header />
        <h2>クローゼット</h2>
        <div class="container3">
            <div class="all">
                オール
                <span class="items">{{all.length}}アイテム</span>
            </div>
            <div v-if="all.length === 0 ">
                <span>アイテムがありません。</span>
            </div>
            <div v-for="allItem in all" :key="allItem.id">
                <span>{{allItem. title }}</span>
                <div><img class="imgs" :src="require(`~/assets/${allItem.url}`)" /></div>
            </div>
            <div class="spring">
                春
                <span class="items">{{spring.length}}アイテム</span>
            </div>
            <div v-if="spring.length === 0 ">
                <span>アイテムがありません。</span>
            </div>
            <div v-for="springItem in spring" :key="springItem.id">
                <span>{{springItem. title }}</span>
                <div><img class="imgs" :src="require(`~/assets/${springItem.url}`)" /></div>
            </div>
            <div class="summer">
                夏
                <span class="items">{{summer.length}}アイテム</span>
            </div>
            <div v-if="summer.length === 0 ">
                <span>アイテムがありません。</span>
            </div>
            <div v-for="summerItem in summer " :key="summerItem.id">
                <span>{{summerItem. title }}</span>
                <div><img class="imgs" :src="require(`~/assets/${summerItem.url}`)" /></div>                </div>
            <div class="autumn">
                秋
                <span class="items">{{autumn.length}}アイテム</span>
            </div>
            <div v-if="autumn.length === 0 ">
                <span>アイテムがありません。</span>
            </div>
            <div v-for="autumnItem in autumn" :key="autumnItem.id">
                <span>{{autumnItem. title }}</span>
                <div><img class="imgs" :src="require(`~/assets/${autumnItem.url}`)" /></div>
            </div>
            <div class="winter">
                冬
                <span class="items">{{winter.length}}アイテム</span>
            </div>
            <div v-if="winter.length === 0 ">
                <span>アイテムがありません。</span>
            </div>
            <div v-for="winterItem in winter" :key="winterItem.id">
                <span>{{winterItem. title }}</span>
                <div><img class="imgs" :src="require(`~/assets/${winterItem.url}`)" /></div>
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState,mapGetters} from 'vuex'
    import Header from "../.nuxt/components/Header.vue"
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
        today(){
            // 気象情報表示部分の今日の日付
            const now = new  Date()
            const week = ['日','月','火','水','木','金','土']
            return `${now.getMonth()+1}/${now.getDate()}（${week[now.getDay()]}）`
        },
        fasionAdvice(){
            let advice = ''
            if(this.weatherInfo[0]){
                if( Math.floor(this.weatherInfo[0].temp.max) >= 26){
                    advice = '暑い！半袖が活躍する時期です。少し歩くだけで汗ばむ気温なので半袖１枚で大丈夫です。ハットや日傘、日焼け止めといった紫外線対策もまだまだ必要！';
                } else if( Math.floor(this.weatherInfo[0].temp.max)>= 21){
                    advice = '半袖と長袖の分かれ目の気温です。晴れて日差しのある日は半袖を、曇りや雨の日は長袖がおすすめです！'
                } else if( Math.floor(this.weatherInfo[0].temp.max)>= 16){
                    advice = 'レイヤードスタイルが楽しめる時期です。日中と朝晩で気温差が激しいので羽織ものを持ってお出かけしましょう。'
                } else if( Math.floor(this.weatherInfo[0].temp.max)>= 12){
                    advice = 'じわじわと寒さを感じる気温です。本格的なコートにはまだ早いけれど、ライトアウターやニットやパーカーなどが活躍します！'
                } else if( Math.floor(this.weatherInfo[0].temp.max)>= 8){
                    advice = '冬本番です。冬服の上にアウターを羽織ってちょうどいいくらいの気温です。ただし、室内は暖房が効いていることが多いので脱ぎ着しやすいコーディネートがおすすめ！'
                } else {
                    advice = '凍えるほどの寒さです。しっかり厚着してマフラーや手袋、ニット帽などの小物も使って防寒対策しましょう！'
                }
            }
            return advice
        },
        icons(){
            let icon = ''
            if(this.weatherInfo[0]){
                if(this.weatherInfo[0].weather[0].description.includes("雨")){
                    icon = "rain.png" 
                } else if(this.weatherInfo[0].weather[0].description.includes("雲") || this.weatherInfo[0].weather[0].description.includes("曇")) {
                    icon = "kumori.png" 
                } else if(this.weatherInfo[0].weather[0].description.includes("晴")){
                    icon = "sun.png"
                } else if(this.weatherInfo[0].weather[0].description.includes("雪")){
                    icon = "yuki.png" 
                }
            }
            return icon
        },
        ...mapState(['clothList']),
        ...mapGetters(['all','spring','summer','autumn','winter'])
    },
    created() {
        console.log(this.clothList);
        console.log(this.all);
        console.log(this.spring);
        console.log(this.summer);
        console.log(this.autumn);
        console.log(this.winter);

        // 画面遷移した時点で現在地を取得
        console.log(this.clothList)
        if (process.client) {
            // ユーザーが利用しているブラウザがGeolocation APIをサポートしているか判定
            if (!navigator.geolocation) {
                alert('現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。')
                return
            }
            
            navigator.geolocation.getCurrentPosition(this.success, this.error)
        }
        
    },
    methods:{
        ...mapActions(['fetchItems']),
        success (position) {
            this.latitude = position.coords.latitude
            this.longitude = position.coords.longitude
            this.$axios.$get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&lang=ja&units=metric&appid=${process.env.API_KEY}`)
            .then(function(response){
                this.weatherInfo.push(response.daily[0])
            }.bind(this))
            .catch(error => {
                console.log(error)
            })
            console.log(this.weatherInfo)
        },
        error (error) {
            console.log(error)
            switch (error.code) {
                case 1:
                alert('位置情報の利用が許可されていません')
                break
            case 2:
                alert('現在位置が取得できませんでした')
                break
            case 3: 
                alert('タイムアウトになりました')
                break
            default:
                alert('現在位置が取得できませんでした')
                break
            }
        },
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
    .items{
        text-align: right;
        font-size: 12px;
    }

    .container {
        font-family: "Hiragino Maru Gothic Pro";
    }
    .container3 {
        display: flex;
        flex-wrap: wrap;
        // text-align: center;
    }
    .red {
        color: red;
        font-weight: bold;
    }
    .blue {
        color: blue;
        font-weight: bold;
    }
    .string{
        font-size: 4px;
    }
    .today {
        font-weight: bold;
    }
    .advice{
        background-color: #ADD8E6;
        margin-top: 5px;
        border-radius: 5px;
        padding-left: 10px;
        padding-top:4px;
        width: 95%;
        height: 2rem
    }
    .container2{
        border:grey 2px dashed;
        border-radius: 5px;
        padding: 3px 5px;
        width: 70%;
    }
    .imgs {
        width: 300px;
        height: 300px;
        padding: 5%;
        // border-radius: 5px;
        // box-shadow: 0 2px 5px #ccc;
    }
    .summer {
        @include box(#13e4c8);
        @extend .seasontitle;
    }
    .spring {
        @include box(#eea0dd);
        @extend .seasontitle;
    }
    .autumn {
        @include box(#e49b13);
        @extend .seasontitle;
    }
    .winter {
        @include box(#72afe0);
        @extend .seasontitle;
    }
    .all {
        @include box(rgb(223, 220, 56));
        @extend .seasontitle;
    }

</style>

