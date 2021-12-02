<template>
  <div class="news1">
    <div class="home">アイテムの写真を選んで</div>
    <div class="home1">あなたのクローゼットを作りましょう</div>
    <div class="pic1"><img src="~/assets/closet1.png" class="pic"></div>
    <div class="btn"><nuxt-link to="/choise"><button class="button">アイテムの写真を選ぶ</button></nuxt-link>
    <nuxt-link to="/coordinate"><button class="button">クローゼットをみる</button></nuxt-link></div>
  </div>
</template>

<script>
  

export default {
}
</script>

<style lang="scss" scoped>
 $color-bg: rgb(100, 209, 230);
@mixin homeStyle{
  font-size: 35px;
}
.news1{
  font-family: "Hiragino Maru Gothic Pro";
  text-align: center;
}
.pic{
  width: 550px;
  height: 350px;
  margin-top: 70px
}
.home{
  @include homeStyle();  
  margin: 50px 0 50px 0;

}
.home1{
  @include homeStyle();
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
  @mixin homeStyle{
  font-size: 20px;
  font-weight: 700;
}

  .news1{
    font-family: "Hiragino Maru Gothic Pro";
    text-align: center;
    // font-size: 30px;
    
  }
  .pic{
    width: 340px;
    height: 225px;
    position: absolute;          /* 位置指定 */
    padding: 20px;               /* 余白指定 */
    top:  0;                     /* 位置指定 */
    bottom:  0;                  /* 位置指定 */
    left:  0;                    /* 位置指定 */
    right:  0;                   /* 位置指定 */
    margin:  auto;  
  }
  .home{
    @include homeStyle();
    margin-top: 100px
  }
  .home1{
    @include homeStyle();

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
    margin: 405px 0 0 0;

  }
  .button:hover{
    color: $color-bg;
    background-color:#fff;

  }
}
</style>
