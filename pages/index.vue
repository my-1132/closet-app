<template>
  <div class="home">
    <div class="home1">ようこそ</div>
    <!-- <div><img src="../assets/closet01.png"></div> -->
    <div class="home2">コーディネートをお届けします</div>
    <!-- <div class="btn"><nuxt-link to="/signUp"><button class="button">はじめての方</button></nuxt-link></div>
    <div><nuxt-link to="/login"><button class="button2">ログイン（登録済みの方）</button></nuxt-link></div> -->
    <div>
      <button class="button" @click="gLogin">
        ログイン
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import firebase from 'firebase/compat/app'
  import 'firebase/compat/auth';
  import 'firebase/compat/firestore';

export default {
  created(){
    firebase.auth().onAuthStateChanged(user =>{
      if(user) {
        this.setLoginUser(user);
        this.fetchItems()
        this.fetchCloset()
        this.$router.push('/news1')
      } else {
          this.deleteLoginUser()
        }
    })
  },
  methods:{
    ...mapActions(['fetchItems', 'setLoginUser', 'deleteLoginUser', 'fetchCloset',"gLogin","setLoginUser"])
  }
}
</script>

<style  lang="scss" scoped>
 $color-bg: rgb(100, 209, 230);
 @mixin btnStyle{
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #228bc8;
  box-sizing: border-box;
  width: 50%;
  height: 50px;
  padding: 0 6% 0 12%;
  color: #228bc8;
  font-size: 16px;
  text-decoration: none;
  position: relative;
  transition-duration: 0.2s;
 }
 .home{
    font-family: "Hiragino Maru Gothic Pro";
    text-align: center;
    background-image: url(../assets/closet01.png);
    background-position: center;
  background-size: cover;
  width: 100%;
  height: 100vh;
 }
 .home1{
   font-size: 60px;
   padding: 145px 0 20px 0 ;
   color: #fff;
 }
 .home2{
    color: #fff;
   font-size: 25px;
 }
.btn{
  margin: 100px 0 50px 0;
}
 .button{
  background-color: $color-bg;
  color: #fff;
  @include btnStyle();
  margin: 235px 0 ;
  text-align: center;

  &:hover{
    background: #228bc8;
    color: #fff;
  }
  &::before{
    content: "";
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 7px 0 7px 8px;
    border-color: transparent transparent transparent #228bc8;
    position: absolute;
    top: 50%;
    left: 6%;
    margin-top: -7px;
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

@media screen and (max-width: 450px) {
  .home1{
    font-size: 43px;
  }
  .home2{
    font-size: 21px;
  }
  .button{
    width:200px;
    height: 55px;
    font-size: 15px;
    margin: 238px 0 ;
  }
}
</style>