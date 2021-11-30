<template>
    <div class="news2">
        <div class="home">クローゼットが完成しました</div>
        <div class="home1">それでは確認に行ってましょう</div>
        <div><img src="~/assets/closet2.png" class="pic"></div>
        <div class="btn"><nuxt-link to="/display"><button class="button">コーディネートを確認する</button></nuxt-link></div>
    </div>
</template>

<style lang="scss" scoped>
 $color-bg: rgb(100, 209, 230);
@mixin homeStyle{
  font-size: 35px;
}

.news2{
  font-family: "Hiragino Maru Gothic Pro";
  text-align: center;
}
.home{
  @include homeStyle();
  margin: 50px 0 50px 0;
}
.home1{
  @include homeStyle();
}
.pic{
  width: 550px;
  height: 350px;
  margin-top: 70px
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

@media screen and (max-width: 450px) {
  @mixin homeStyle{
  font-size: 20px;
  font-weight: 700;
}

  .news2{
  font-family: "Hiragino Maru Gothic Pro";
  text-align: center;

}
.home{
  @include homeStyle();
  margin-top: 100px
}
.home1{
  @include homeStyle();
}
.pic{
  width: 340px;
  height: 225px;
  margin-top: 70px
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
  margin: 100px 0 0 0;
 }
.button:hover{
  color: $color-bg;
  background-color:#fff;
}
}

</style>