<template>
  <div class="home">
    <div class="home1">ようこそ</div>
    <div class="home2">コーディネートをお届けします</div>
    <!-- <div class="btn"><nuxt-link to="/signUp"><button class="button">はじめての方</button></nuxt-link></div>
    <div><nuxt-link to="/login"><button class="button2">ログイン（登録済みの方）</button></nuxt-link></div> -->
    <div><button class="button" @click="gLogin">Googleアカウントお持ちの方はこちらから＞</button></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
// import firebase from 'firebase/compat/firestore';

export default {
  methods:{
      ...mapActions(["gLogin","gLogout","setLoginUser", "deleteLoginUser"])
    
  }
}
</script>

<style  lang="scss" scoped>
 $color-bg: rgb(100, 209, 230);
 @mixin btnStyle{
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1.5;
    position: relative;
    display: inline-block;
    padding: 1rem 4rem;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
    text-align: center;
    vertical-align: middle;
    text-decoration: none;
    letter-spacing: 0.1em;
    border-radius: 0.5rem;
 }
 .home{
   font-family: "Hiragino Maru Gothic Pro";
   text-align: center;
 }
 .home1{
   font-size: 60px;
   padding: 145px 0 20px 0 ;
 }
 .home2{
   font-size: 25px;
 }
.btn{
  margin: 100px 0 50px 0;
}
 .button{
  background-color: $color-bg;
  color: #fff;
  @include btnStyle();

  &:hover{
    color: $color-bg;
    background-color:#fff;
  }
 }
.button2{
  background-color: #fff;
  color: $color-bg;
  @include btnStyle();
    
  &:hover{
    color: #fff;
    background-color:$color-bg;
  }
}
//  .button3{
//   background: none;
// 	border: none;
// 	outline: none;
// 	-webkit-appearance: none;
// 	-moz-appearance: none;
// 	appearance: none;
// }

@media screen and (max-width: 450px) {
  .home1{
    font-size: 30px;
  }
  .home2{
    font-size: 24px;
  }
  .button{
    width: 200px;
    height: 75px;
    font-size: 0.8rem;
  }
  .button2{
    width: 250px;
    height: 75px;
    font-size: 0.8rem;
    word-wrap:break-word;
  }
}
</style>