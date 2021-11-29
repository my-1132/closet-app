<template>
    <div class="container">
        <!-- <h2>クローゼットの作成</h2> -->
            <div class="card" v-for="(item, index) in cloth" :key="item.id">
                <!-- item.idとstatusが一致すれば表示する -->
                <div v-if="item.id === status">
                    <img class="imgs" :src="require(`~/assets/${item.url}`)" />
                    <h3>{{ item. title }}</h3>
                    <h4>これに似たアイテムを持っていますか？</h4>
                    <div class="flex">
                        <button class="yesbtn" @click="yes(item,index)">Yes</button>
                        <button class="nobtn" @click="no(item, index)">No</button>
                    </div>
                </div>
            <!-- </div> -->
            </div>
    </div>
</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        data(){
            return {
                cloth: [],
                // 持っている服を入れるbox
                yBox: [],
                // 持っていない服を入れるbox
                nBox: [],
                status: 1
            }
        },
        computed:{
            ...mapState(['closet'])
        },
        created(){
            this.cloth = this.closet.slice()
        },
        methods: {
            // ユーザーが持っているアイテムを入れる
            yes(item, index){
                this.cloth.splice(index, 1)
                this.yBox.push(item)
                // 表示切り替えの為の処理
                this.status = this.status + 1
                // firestoreに保存
                this.editCloset(this.yBox)
                if(this.cloth.length === 0){
                    this.$router.push('/news2')
                }
            },
            // ユーザーが持っていないアイテムを入れる
            no(item, index){
                this.cloth.splice(index, 1)
                this.nBox.push(item)
                this.status = this.status + 1
                if(this.cloth.length === 0){
                    this.$router.push('/news2')
                }
            },
            ...mapActions(['fetchItems', 'editCloset'])
        },
    }
</script>

<style lang="scss" scoped>
@mixin btn{
    border-radius: 100px;
    padding: 50px 50px 50px 50px;
    width: 125px;
    height: 125px;
    text-align: center;
    font-weight: 700;
    font-size: 25px;
    margin: 0 60px 0 48px;
}
@mixin img {
        width: 280px;
        height: 280px;
        padding: 5%;
    }
    .container {
        font-family: "Hiragino Maru Gothic Pro";
        background-color: #FFFFFF;
        width: 450px;
        height: 475px;
        margin: 7em auto;
        border-radius: 2.5em;
        box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
        text-align: center;
    }
    .imgs {
        @include img();
    }
    // .imgs:hover {
    //     transform: translateY(-5px);
    //     box-shadow: 0 7px 34px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
    //     transition: all .5s;
    //     cursor: pointer;
    // }
    .flex{
        display: flex;
    }
    .yesbtn {
        background-color: #ADD8E6;
        color: white;
        margin:0 40px 0 40px;
        @include btn();
        
        &:hover{
        background-color: rgb(121, 196, 220);
        cursor: pointer;
        }
    }
    .nobtn {
        background-color: #a8a6a6;
        color: white;
        @include btn();
        
        &:hover{
        background-color: rgb(145, 145, 145);
        cursor: pointer;
        }
    }
    
@media screen and (max-width: 450px) {
    @mixin btn{
    padding: 50px 50px 50px 50px;
    width: 80px;
    height: 80px;
    margin: 20px 40px 0 27px;
    font-size: 25px;
}
    .container {
        width: 325px;
        height: 475px;
    }
    .imgs {
        width: 275px;
        height: 275px;
    }
    .yesbtn {
        @include btn();
    }
    .nobtn {
        @include btn();
        
    }

}
</style>