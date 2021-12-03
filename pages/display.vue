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
        ...mapGetters(['all','spring','summer','autumn','winter','tops','bottom','outer','shoes'])
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


</style>

