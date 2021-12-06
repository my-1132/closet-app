<template>
  <div class="news1">
    <div class="home">アイテムの写真を選んで</div>
    <div class="home1">あなたのクローゼットを作りましょう</div>
    <div class="pic1"><img src="~/assets/closet02.png" class="pic"></div>
    <div class="btnPosi">
      <div class="btn"><nuxt-link to="/choise"><button class="button">アイテムの写真を選ぶ&nbsp;&nbsp;&nbsp;></button></nuxt-link>
      <nuxt-link to="/coordinate"><button class="button">コーディネートを確認する&nbsp;&nbsp;&nbsp;></button></nuxt-link></div>
    </div>
  </div>
</template>

<script>
  

export default {
}
</script>

<style lang="scss" scoped>
 $color-bg: rgb(100, 209, 230);
@mixin homeStyle{
  font-size: 30px;
}
 @mixin btnStyle{
  justify-content: center;
  align-items: center;
  background: #fff;
  border: 1px solid #228bc8;
  box-sizing: border-box;
  width: 50%;
  height: 50px;
  padding: 0 6%;
  color: #228bc8;
  font-size: 16px;
  text-decoration: none;
  position: relative;
  transition-duration: 0.2s;
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
  margin: 15px;
  @include btnStyle();

  &:hover{
    background: #228bc8;
    color: #fff;

  }
 }

@media screen and (max-width: 450px){
  $color-bg: rgb(100, 209, 230);
  @mixin homeStyle{
  font-size: 20px;
  font-weight: 700;
}
 @mixin btnStyle{
  width: 75%;
 }


  .news1{
    font-family: "Hiragino Maru Gothic Pro";
    text-align: center;
    // font-size: 30px;
    
  }
  .pic{
    width: 340px;
    height: 225px;
  }
  .home{
    @include homeStyle();
    margin-top: 100px;
  }
  .home1{
    @include homeStyle();
  }
  .button{
    @include btnStyle();
  }
      .button:hover{
      background-color: #228bc8;
      color: #fff;
    }

  .btnPosi{
    margin-top: 50px;
  }
}
</style>
