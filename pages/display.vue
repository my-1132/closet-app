<template>
    <div class="container">
        <h2>コーディネート一覧</h2>
        <nuxt-link to="/choise">Choise</nuxt-link>
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
    </div>
</template>

<script>
    import { mapActions} from 'vuex'
export default {
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
            console.log(icon)
            return icon
        }
    },
    created() {
        // 画面遷移した時点で現在地を取得
        if (process.client) {
            // ユーザーが利用しているブラウザがGeolocation APIをサポートしているか判定
            if (!navigator.geolocation) {
                alert('現在地情報を取得できませんでした。お使いのブラウザでは現在地情報を利用できない可能性があります。エリアを入力してください。')
                return
            }
            // const options = {
            //     enableHighAccuracy: false,
            //     timeout: 5000,
            //     maximumAge: 0
            // }
            
            navigator.geolocation.getCurrentPosition(this.success, this.error)
        }
        // 仮 （userがログインした状態で呼び出す）
        this.fetchItems()
    },
    methods:{
        ...mapActions(['fetchItems']),
        success (position) {
            this.latitude = position.coords.latitude
            this.longitude = position.coords.longitude
            this.$axios.$get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&lang=ja&units=metric&appid=${process.env.API_KEY}`)
            .then(function(response){
                console.log(response.daily[0])
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

<style>
    .container {
        font-family: "Hiragino Maru Gothic Pro";
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
        width: 90%;
        height: 2rem
    }
    .container2{
        border:grey 2px dashed;
        border-radius: 5px;
        padding: 3px 5px;
        width: 70%;
    }
</style>

