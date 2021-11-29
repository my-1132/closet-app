<template>
    <div class="container">
        <h2>クローゼットの作成</h2>
        <transition-group name="list" tag="div">
            <div class="card" v-for="(item, index) in cloth" :key="item.id">
                <!-- item.idとstatusが一致すれば表示する -->
                <div v-if="item.id === status">
                    <img class="imgs" :src="require(`~/assets/${item.url}`)" />
                    <h3>{{ item. title }}</h3>
                    <h4>これに似たアイテムを持っていますか？</h4>
                    <button class="yesbtn" @click="yes(item,index)">Yes</button>
                    <button class="nobtn" @click="no(item, index)">No</button>
                </div>
            <!-- </div> -->
        </transition-group>
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
                // 表示するリストから削除
                this.cloth.splice(index, 1)
                this.yBox.push(item)
                // 表示切り替えの為の処理
                this.status = this.status + 1
                console.log(this.yBox)
            },
            // ユーザーが持っていないアイテムを入れる
            no(item, index){
                this.cloth.splice(index, 1)
                this.nBox.push(item)
                this.status = this.status + 1
                console.log(this.nBox)
            },
            ...mapActions(['fetchItems'])
        },
    }
</script>

<style lang="scss" scoped>
@mixin btn{
    border-radius: 30px;
    padding: 50px;
    width: 10%;
    height: 60%;
    margin:0 40px 0 40px;
    text-align: center;
}
    .container {
        font-family: "Hiragino Maru Gothic Pro";
        background-color: #FFFFFF;
        width: 450px;
        height: 475px;
        margin: 7em auto;
        border-radius: 1.5em;
        box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
        text-align: center;
    }
    .imgs {
        width: 300px;
        height: 300px;
        padding: 5%;
        border-radius: 5px;
        box-shadow: 0 2px 5px #ccc;
    }
    .imgs:hover {
        transform: translateY(-5px);
        box-shadow: 0 7px 34px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
        transition: all .5s;
        cursor: pointer;
    }
    .yesbtn {
        background-color: #ADD8E6;
        color: white;
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
    
</style>