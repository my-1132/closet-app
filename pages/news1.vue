<template>
  <div class="news1">
    <div class="home">アイテムの写真を選んで</div>
    <div class="home">あなたのクローゼットを作りましょう</div>
    <div><img src="~/assets/closet1.png" class="pic"></div>
    <div class="btn"><button class="button"><nuxt-link to="/choise">アイテムの写真を選ぶ</nuxt-link></button></div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
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
      } else {
          this.deleteLoginUser()
        }
    })
  },
  methods:{
    ...mapActions(['fetchItems', 'setLoginUser', 'deleteLoginUser', 'fetchCloset'])
  }
}
</script>

<style lang="scss" scoped>
 $color-bg: rgb(100, 209, 230);

.news1{
  font-family: "Hiragino Maru Gothic Pro";
  text-align: center;
}
.pic{
  width: 50%;
  height: 50%;
}
.home{
    font-size: 40px;
    margin: 50px 0 50px 0;
}
.button{
  background-color: $color-bg;
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
  color: #fff;
  border-radius: 0.5rem;
 }
.button:hover{
  color: $color-bg;
  background-color:#fff;
}

@media screen and (max-width: 450px){
  $color-bg: rgb(100, 209, 230);

  .news1{
    font-family: "Hiragino Maru Gothic Pro";
    text-align: center;
    font-size: 30px;
  }
  .pic{
    width: 300px;
    height: 50%;
  }
  .home{
      font-size: 24px;
      margin: 50px 10px 50px 10px;
  }
  .button{
    background-color: $color-bg;
    font-size: 0.8rem;
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
    color: #fff;
    border-radius: 0.5rem;
  }
  .button:hover{
    color: $color-bg;
    background-color:#fff;

  }
}
</style>
