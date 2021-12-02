<template>
    <div class="container">
        <Header />
        <h2>コーディネート一覧</h2>
        <div class="container2">
            <span class="string">今日</span>
            <!-- <span class="location">@東京</span> -->
                <span class="today">{{ today }}</span>
                <div v-if="this.weatherInfo[0]">
                    <span class="string">最高</span>
                    <span class="red">{{Math.floor(weatherInfo[0].temp.max)}}&deg;C</span>&nbsp;&nbsp;
                    <span class="string">最低</span>
                    <span class="blue">{{Math.floor(weatherInfo[0].temp.min)}}&deg;C</span>
                    <span><img :src="require(`~/assets/${icons}`)" width="3%" height="3%"/>{{ weatherInfo[0].weather[0].description }}</span>
                </div>
            <!-- apiでのデータ取得に時間がかかる為、反映されるまでの表示 -->
                <div v-if="!this.weatherInfo[0]">
                    気象情報取得中…
                </div>
            <!-- データ取得後、気象情報を表示-->
                <div v-if="this.weatherInfo[0]">
                    <span>
                        <span>朝</span>{{ Math.floor(weatherInfo[0].temp.morn) }}&deg;C
                        <span>昼</span>{{ Math.floor(weatherInfo[0].temp.day) }}&deg;C
                        <span>夜</span>{{ Math.floor(weatherInfo[0].temp.night) }}&deg;C
                    </span>
                    <div class="advice">{{ fasionAdvice }}</div>
                </div>
        </div>
        <div class="container3">
            <span v-for="item in clothList.chosens" :key="item.id">
                    <span v-if="item.season === 'all' "> 
                        <div class="all">オール</div>
                            <span>{{ item. title }}</span>
                            <div><img class="imgs" :src="require(`~/assets/${item.url}`)" /></div>
                    </span>
                    <span v-if="item.season === 'spring' ">
                        <div class="spring">春</div>
                            <span>{{ item. title }}</span>
                            <div><img class="imgs" :src="require(`~/assets/${item.url}`)" /></div>
                    </span>
                    <span v-if="item.season === 'summer' ">
                        <div class="summer">夏</div> 
                            <span>{{ item. title }}</span>
                            <div><img class="imgs" :src="require(`~/assets/${item.url}`)" /></div> 
                    </span>
                    <span v-if="item.season === 'autumn' ">
                        <div class="autumn">秋</div>
                            <span>{{ item. title }}</span>
                            <div><img class="imgs" :src="require(`~/assets/${item.url}`)" /></div>
                    </span>
                    <span v-if="item.season === 'winter' ">
                        <div class="winter">冬</div>
                            <span>{{ item. title }}</span>
                            <div><img class="imgs" :src="require(`~/assets/${item.url}`)" /></div>
                    </span> 
            </span>
        </div>
        <div class="container4">
            <div>
                <span v-for="item in clothList.chosens" :key="item.id"></span>
    
            </div>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState,mapGetters} from 'vuex'
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
        ...mapGetters(['clothListBySeason'])
    },
    created() {
        console.log(this.clothListBySeason);
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
        position: relative;
        display: inline-block;
        margin: 1.5em 15px 1.5em 0;
        padding: 0 5px;
        width: 90px;
        height: 90px;
        line-height: 90px;
        text-align: center;
        color: #eee;
        font-size: 20px;
        font-weight: bold;
        border-radius: 50%;
        box-sizing: border-box;
    }


    .container {
        font-family: "Hiragino Maru Gothic Pro";
    }
    .container3 {
        display: flex;
        flex-wrap: wrap;
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

