<template>
    <div id="home">
        <header class="page-header wrapper">
            <div class="closet">C&nbsp;L&nbsp;O&nbsp;S&nbsp;E&nbsp;T</div>
            <nav>
                <ul class="main-nav">
                    <li><nuxt-link to="/coordinate"><button class="btn">コーディネートの確認</button></nuxt-link></li>
                    <li><nuxt-link to="/display"><button class="btn">クローゼットを見る</button></nuxt-link></li>
                    <li><nuxt-link to="/"><button class="btn" @click="gLogout">ログアウト</button></nuxt-link></li>
                </ul>
            </nav>
        </header>
    </div>
</template>
<script>
import {mapActions} from 'vuex';

export default {
    methods:{
        gLogout(){
            this.gLogout()
        },
        ...mapActions(["gLogout"])
    }
}
</script>
<style lang="scss">

    body {
        margin: 0;
    }

.btn{
    border: none;
    background: transparent;
    font-family: "Hiragino Maru Gothic Pro";
    cursor: pointer;
    font-size: 18px;
    color: #ffffff;

    &:hover{
        color: black;
    }
}
#home {
    background-color: #cccccc;
    width: 100%;
    height: 70px;
    margin-bottom: 10px;
    margin-top: 0;
}
.closet {
    width: 210px;
    margin-top: 10px;
    margin-left: 20px;
    font-size: 30px;
    font-family: "Hiragino Maru Gothic Pro";
    color: #ffffff;
}
.main-nav {
    display: flex;
    font-size: 1.25rem;
    margin-top: 34px;
    list-style: none;

    li {
        margin-left: 36px;
    }
    
}
.page-header {
    display: flex;
    justify-content: space-between;
}

</style>