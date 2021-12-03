<template>
    <div class="container">
        <Header />
        <div class="title"><img :src="require(`~/assets/genzaiichi.png`)" width="30px" height="30px"/>現在地付近の気象情報</div>
        <div class="container2">
            <span class="string">今日</span>
                <span class="today">{{ today }}</span>
                <span v-if="this.weatherInfo[0]">
                    <span class="red">{{Math.floor(weatherInfo[0].temp.max)}}&deg;C</span>&nbsp;&nbsp;|&nbsp;
                <span class="blue">{{Math.floor(weatherInfo[0].temp.min)}}&deg;C</span>
                <span><img :src="require(`~/assets/${icons}`)" width="20px" height="15px"/>{{ weatherInfo[0].weather[0].description }}</span>
                </span>
            <!-- apiでのデータ取得に時間がかかる為、反映されるまでの表示 -->
                <div v-if="!this.weatherInfo[0]">
                    気象情報取得中…
                </div>
            <!-- データ取得後、気象情報を表示-->
                <div class="yohou" v-if="this.weatherInfo[0]">
                    <div>
                        <span class="string">朝</span><span>{{ Math.floor(weatherInfo[0].temp.morn) }}&deg;C</span>&nbsp;
                        <span class="string">昼</span><span>{{ Math.floor(weatherInfo[0].temp.day) }}&deg;C</span>&nbsp;
                        <span class="string">夜</span><span>{{ Math.floor(weatherInfo[0].temp.night) }}&deg;C</span>
                    </div>
                    <div class="advice">
                        <p>{{ fasionAdvice }}</p>
                    </div>
                </div>
        </div>
        <div class="title2">今日のおすすめコーディネート</div>
        <carousel 
            :per-page="1"  
            :navigation-enabled="true"
            navigation-prev-label="〈"
            navigation-next-label="〉"
            :speed="1000"
            class="coordinate">
            <slide>
                <div class="pic">
                    <div class="outer">
                        {{tops.title}}
                        <img class="tops" :src="require(`~/assets/${tops.url}`)" />
                        {{outer.title}}
                        <img class="outers" :src="require(`~/assets/${outer.url}`)"  />
                    </div>
                    {{bottoms.title}}
                    <img class="bottom" :src="require(`~/assets/${bottoms.url}`)"  />
                    {{shoes.title}}
                    <img class="shoes" :src="require(`~/assets/${shoes.url}`)"/>
                </div>
            </slide>
            <slide>
                <div class="pic2">
                    {{tops2.title}}
                    <img class="tops" :src="require(`~/assets/${tops2.url}`)" />
                    {{bottoms2.title}}
                    <img class="bottom" :src="require(`~/assets/${bottoms2.url}`)" />
                    {{shoes2.title}}
                    <img class="shoes" :src="require(`~/assets/${shoes2.url}`)" />
                </div>
            </slide>
            <slide>
                <div class="pic3">
                    {{tops3.title}}
                    <img class="tops" :src="require(`~/assets/${tops3.url}`)" />
                    {{bottoms3.title}}
                    <img class="bottom" :src="require(`~/assets/${bottoms3.url}`)" />
                    {{shoes3.title}}
                    <img class="shoes" :src="require(`~/assets/${shoes3.url}`)" />
                </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import { mapActions,mapGetters} from 'vuex'
    import {Carousel, Slide }from 'vue-carousel';
    import Header from "../components/Header.vue"

export default {
    components:{
        Header,
        Carousel,
        Slide
    },
    data: () => {
        return {
            latitude: 0,
            longitude: 0,
            weatherInfo: [],
            clothList: []
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
                    advice = 'じわじわと寒さを感じる気温です。ライトアウターやニットやパーカーなどが活躍します！'
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
        bottoms(){
            const bt = []
            this.clothList.forEach(el => {
                if(el.tag === 'bottom'){
                    bt.push(el)
                }
            })
            const btNum = Math.floor(Math.random() * bt.length)
            return bt[btNum]
        },
        bottoms2(){
            const bt = []
            this.clothList.forEach(el => {
                if(el.tag === 'bottom'){
                    bt.push(el)
                }
            })
            const btNum = Math.floor(Math.random() * bt.length)
            return bt[btNum]
        },
        bottoms3(){
            const bt = []
            this.clothList.forEach(el => {
                if(el.tag === 'bottom'){
                    bt.push(el)
                }
            })
            const btNum = Math.floor(Math.random() * bt.length)
            return bt[btNum]
        },
        tops(){
            const top = []
            this.clothList.forEach(el => {
                if(el.tag === 'tops'){
                    top.push(el)
                }
            })
            const topNum = Math.floor(Math.random() * top.length)
            return top[topNum]
        },
        tops2(){
            const top = []
            this.clothList.forEach(el => {
                if(el.tag === 'tops'){
                    top.push(el)
                }
            })
            const topNum = Math.floor(Math.random() * top.length)
            return top[topNum]
        },
        tops3(){
            const top = []
            this.clothList.forEach(el => {
                if(el.tag === 'tops'){
                    top.push(el)
                }
            })
            const topNum = Math.floor(Math.random() * top.length)
            return top[topNum]
        },
        shoes(){
            const shoes = []
            this.clothList.forEach(el => {
                if(el.tag === 'shoes'){
                    shoes.push(el)
                }
            })
            const shoeNum = Math.floor(Math.random() * shoes.length)
            return shoes[shoeNum]
        },
        shoes2(){
            const shoes = []
            this.clothList.forEach(el => {
                if(el.tag === 'shoes'){
                    shoes.push(el)
                }
            })
            const shoeNum = Math.floor(Math.random() * shoes.length)
            return shoes[shoeNum]
        },
        shoes3(){
            const shoes = []
            this.clothList.forEach(el => {
                if(el.tag === 'shoes'){
                    shoes.push(el)
                }
            })
            const shoeNum = Math.floor(Math.random() * shoes.length)
            return shoes[shoeNum]
        },
        outer(){
            const outer = []
            this.clothList.forEach(el => {
                if(el.tag === 'outer'){
                    outer.push(el)
                }
            })
            let outNum = 0
            if(outer.length !== 0){
                outNum = Math.floor(Math.random() * outer.length)
            } else {
                return 
            }
            return outer[outNum]
        },
        ...mapGetters(['winter', 'all'])
    },
    created() {
        // 画面遷移した時点で現在地を取得   
        this.winter.forEach(el => {
            this.clothList.push(el)
        })
        this.all.forEach(el => {
            this.clothList.push(el)
        })
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
    @mixin styles {
        display: flex;
        flex-direction: column;
        padding-top: 10px;
        margin-top: 20px;
    }
    @mixin images {
        width: 300px;
        height: 300px;
    }
    // レスポンシブ
    @mixin fimages {
        width: 50px;
        height: 50px;
    }
    .pic{
        @include styles();
        align-items: center;
        border: 3px solid grey;
        border-radius: 15px;
    }
    .pic2 {
        @include styles();
        align-items: center;
        border: 1px solid;

    }
    .pic3 {
        @include styles();
        align-items: center;
        border: 1px solid;
    }
    .coordinate{
        display: flex;
        font-size: 15px;
    }
    .outer {
        display: flex;
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
    .advice {
        background-color: #ADD8E6;
        position: relative;
        display: inline-block;
        margin: 1.5em 0;
        padding: 7px 10px;
        min-width: 120px;
        max-width: 100%;
        color: #555;
        border-radius: 15px;
    }

    .advice:before {
        content: "";
        position: absolute;
        top: -25px;
        left: 4%;
        margin-left: -15px;
        border: 15px solid transparent;
        border-bottom: 15px solid #ADD8E6;
    }
    .advice p {
        margin: 0;
        padding: 0;
    }

    .container2{
        border-radius: 5px;
        padding: 3px 5px;
        width: 70%;
        margin-left: 100px;
    }
    .imgs {
        width: 300px;
        height: 300px;
        padding: 5%;
    }
    // 画像
    .tops {
        @include images()
    }
    .outers {
        @include images()
    }
    .bottom {
        @include images()
    }
    .shoes {
        padding-left: 50px;
        width: 150px;
        height: 150px;
    }
    .title {
        font-size: 20px;
        padding-bottom: 10px;
        padding-left: 20px;
    }
    .title2{
        font-size: 20px;
        text-align: center;
    }

    // レスポンシブ
    @media screen and (max-width: 450px){
        .container2{
            width: 70%;
            margin-left: 40px;
            border: 2px dashed grey;
            border-radius: 15px;
            padding-left: 10px;
        }
    
        .advice {
            background-color: #ADD8E6;
            position: relative;
            display: inline-block;
            margin: 1.5em 0;
            padding: 7px 10px;
            min-width: 120px;
            max-width: 100%;
            color: #555;
            border-radius: 15px;
        }
        .advice:before {
            content: "";
            position: absolute;
            top: -25px;
            left: 4%;
            margin-left: 10px;
            border: 15px solid transparent;
            border-bottom: 15px solid #ADD8E6;
        }
        .advice p {
            margin: 0;
            padding: 0;
        }
        .tops {
            @include fimages();
            padding-left: 5px;
        } 
        .outers {
            @include fimages()
        }
        .bottom {
            @include fimages();
        }
        .shoes {
            padding-left: 20px;
            width: 30px;
            height: 30px;
        }
        .pic{
            @include styles();
            padding-left: 20px;
        }
        .coordinate{
            display: flex;
            font-size: 1px;
        }
        .pic2 {
            @include styles();
            padding-left: 10px
        }
        .pic3 {
            @include styles();
        }
        
    }

</style>

