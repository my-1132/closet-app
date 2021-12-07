<template>
    <div id="home">
        <!-- PC用ヘッダー -->
        <header>
            <div class="closet">C&nbsp;L&nbsp;O&nbsp;S&nbsp;E&nbsp;T</div>
            <!-- <nav class="pc-nav">
                <ul>
                    <li><nuxt-link to="/coordinate"><button class="btn">コーディネートの確認</button></nuxt-link></li>
                    <li><nuxt-link to="/display"><button class="btn">クローゼットを見る</button></nuxt-link></li>
                    <li><nuxt-link to="/"><button class="btn" @click="gLogout">ログアウト</button></nuxt-link></li>
                </ul>
            </nav> -->
            <!-- スマホ用ヘッダー -->
        <!-- <nav class="sp-nav">
            <ul>
                <li><nuxt-link to="/coordinate">コーディネートの確認</nuxt-link></li>
                <li><nuxt-link to="/display">クローゼットを見る</nuxt-link></li>
                <li><nuxt-link to="/"><button class="btn" @click="gLogout">ログアウト</button></nuxt-link></li>
                <li class="close"><span>閉じる</span></li>
            </ul>
        </nav> -->
        <div class="hamburger-menu">
        <input type="checkbox" id="menu-btn-check">
        <label for="menu-btn-check" class="menu-btn"><span></span></label>
        <!--ここからメニュー-->
        <div class="menu-content">
            <ul>
                <li>
                    <nuxt-link to="/coordinate"><button class="btn">コーディネートの確認</button></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/display"><button class="btn">クローゼットを見る</button></nuxt-link>
                </li>
                <li>
                    <nuxt-link to="/"><button class="btn" @click="gLogout">ログアウト</button></nuxt-link>
                </li>
            </ul>
        </div>
        <!--ここまでメニュー-->
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
<style lang="scss" scoped>
body{
    margin: -8px;
}
.btn{
    border: none;
    background: transparent;
    font-family: "Hiragino Maru Gothic Pro";
    cursor: pointer;
    font-size: 20px;
    color: #ffff;

    &:hover{
        color: #111;
    }
}
header {
    background-color: #ffff;
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
    color: #cccc;
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



//ハンバーガーメニュー
.menu-btn {
    position: fixed;
    top: 10px;
    right: 10px;
    display: flex;
    height: 60px;
    width: 60px;
    justify-content: center;
    align-items: center;
    z-index: 90;
    background-color: #cccccc;
}
.menu-btn span,
.menu-btn span:before,
.menu-btn span:after {
    content: '';
    display: block;
    height: 3px;
    width: 25px;
    border-radius: 3px;
    background-color: #ffffff;
    position: absolute;
}
.menu-btn span:before {
    bottom: 8px;
}
.menu-btn span:after {
    top: 8px;
}
#menu-btn-check:checked ~ .menu-btn span {
    background-color: rgba(255, 255, 255, 0);/*メニューオープン時は真ん中の線を透明にする*/
}
#menu-btn-check:checked ~ .menu-btn span::before {
    bottom: 0;
    transform: rotate(45deg);
}
#menu-btn-check:checked ~ .menu-btn span::after {
    top: 0;
    transform: rotate(-45deg);
}
#menu-btn-check {
    display: none;
}
.menu-content {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 100%;
    z-index: 80;
    background-color: #ccc;
    transition: all 0.5s;
}
.menu-content ul {
    padding: 70px 10px 0;
}
.menu-content ul li {
    border-bottom: solid 1px #ffffff;
    list-style: none;
}
.menu-content ul li a {
    display: block;
    width: 100%;
    font-size: 15px;
    box-sizing: border-box;
    color:#ffffff;
    text-decoration: none;
    padding: 9px 15px 10px 0;
    position: relative;
}
.menu-content ul li a::before {
    content: "";
    width: 7px;
    height: 7px;
    border-top: solid 2px #ffffff;
    border-right: solid 2px #ffffff;
    transform: rotate(45deg);
    position: absolute;
    right: 11px;
    top: 16px;
}
#menu-btn-check:checked ~ .menu-content {
    left: 0;/*メニューを画面内へ*/
}


@media screen and (max-width: 450px){
    .main-nav {
        display: none;
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