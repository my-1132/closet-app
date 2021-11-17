<template>
    <div class="container">
        <h2>クローゼットの作成</h2>
        <transition-group name="list">
            <div class="card" v-for="(item, index) in cloth" :key="item.id">
                <!-- item.idとstatusが一致すれば表示する -->
                <div v-if="item.id === status">
                    <img class="imgs" :src="require(`~/assets/${item.url}`)" />
                    <h3>{{ item. title }}</h3>
                    <h4>これに似たアイテムを持っていますか？</h4>
                    <button class="yesbtn" @click="yes(item,index)">Yes</button>
                    <button class="nobtn" @click="no(item, index)">No</button>
                </div>
            </div>
        </transition-group>
    </div>

</template>

<script>
    import { mapActions, mapState } from 'vuex'
    export default {
        data(){
            return {
                cloth: [],
                yBox: [],
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

<style>
    .container {
        font-family: "Hiragino Maru Gothic Pro";
    }
    /* .card {
        border: solid 1px gray
    } */
    .imgs {
        width: 300px;
        height: 300px;
    }
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s
    }
    .fade-enter, .fade-leave-active {
        opacity: 0
    }
    .yesbtn {
        background-color: #ADD8E6;
        color: white;
        border-radius: 30px;
        padding: 50px;
        width: 10%;
        height: 60%;
    }
    .yesbtn:hover{
        background-color: rgb(121, 196, 220);
        cursor: pointer;
    }
    .nobtn {
        background-color: #a8a6a6;
        color: white;
        border-radius: 30px;
        padding: 50px;
        width: 10%;
        height: 60%;
    }
    .nobtn:hover{
        background-color: rgb(145, 145, 145);
        cursor: pointer;
    }
    .card {
        text-align: center;
    }
</style>