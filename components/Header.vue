<template>
    <div id="home">
        <!-- PC用ヘッダー -->
        <header>
            <div class="closet">C&nbsp;L&nbsp;O&nbsp;S&nbsp;E&nbsp;T</div>
            <nav class="pc-nav">
                <ul>
                    <li><nuxt-link to="/coordinate"><button class="btn">コーディネートの確認</button></nuxt-link></li>
                    <li><nuxt-link to="/display"><button class="btn">クローゼットを見る</button></nuxt-link></li>
                    <li><nuxt-link to="/"><button class="btn" @click="gLogout">ログアウト</button></nuxt-link></li>
                </ul>
            </nav>
            <!-- スマホ用ヘッダー -->
        <nav class="sp-nav">
            <ul>
                <li><nuxt-link to="/coordinate">コーディネートの確認</nuxt-link></li>
                <li><nuxt-link to="/display">クローゼットを見る</nuxt-link></li>
                <li><nuxt-link to="/"><button class="btn" @click="gLogout">ログアウト</button></nuxt-link></li>
                <li class="close"><span>閉じる</span></li>
            </ul>
        </nav>
        <div id="hamburger">
            <span></span>
        </div>
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
    font-size: 20px;
    color: #fff;

    &:hover{
        color: #111;
    }
}
header {
    background-color: #cccccc;
    width: 100%;
    margin-bottom: 10px;
}
.closet {
    width: 210px;
    margin-top: 10px;
    margin-left: 20px;
    padding-top: 20px;
    font-size: 30px;
    font-family: "Hiragino Maru Gothic Pro";
    color: #ffffff;
}
.pc-nav ul {
    display: flex;
    font-size: 1.25rem;
    padding-top: 0;
    margin-top: 0;
    list-style: none;
    justify-content: right;
    // justify-content: space-between;
    // height: 100vh;

    li {
        margin-left: 36px;
        color: black;
    }
    
}
.sp-nav {
    display: none;
}


@media screen and (max-width: 450px){
    .main-nav {
        display: none;
    }
    #hamburger{
        position: relative;
        display: block;
        width: 30px;
        height: 25px;
        margin: 0 0 0 auto;

        &::before{
            content: '';
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 2px;
            background-color: #fff;
        }

        &::after {
            content: '';
            display: block;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 70%;
            height: 2px;
            background-color: #fff;
            }

        & > span {
            position: absolute;
            top: 50%;
            left: 0;
            display: block;
            width: 100%;
            height: 2px;
            background-color: #fff;
            transform: translateY(-50%);
        }
    }
    /*スマホメニュー*/
    .smart-header ul {
        padding: 0;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
    }
    .smart-header li {
        margin: 0;
        padding: 0;
    }
    .smart-header li span {
        font-size: 15px;
        color: #fff;
    }
    .smart-header li a, .smart-header li span {
        display: block;
        padding: 20px 0;
    }
    /*-閉じるアイコンー*/
    .smart-header .close {
        position: relative;
        padding-left: 20px;
    }
    .smart-header .close::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: 16px;
        height: 1px;
        background: #fff;
        transform: rotate( 45deg );
    }
    .smart-header .close::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        display: block;
        width: 16px;
        height: 1px;
        background: #fff;
        transform: rotate( -45deg );
    }
    .toggle {
        transform: translateY( 0 );
        opacity: 1;
    }
}

</style>