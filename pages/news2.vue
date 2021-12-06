<template>
    <div class="news2">
        <div class="home">クローゼットが完成しました</div>
        <div class="home1">それでは確認に行ってましょう</div>
        <div><img src="~/assets/closet03.png" class="pic"></div>
        <div>
          <div>          
            <nuxt-link to="/display">
              <button class="button">クローゼットを確認する&nbsp;&nbsp;&nbsp;></button>
            </nuxt-link>
          </div>
        </div>  
    </div>
</template>

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
    margin: 15px;
  @include btnStyle();

  &:hover{
    background-color: #228bc8;
    color: #fff;

  }
 }

@media screen and (max-width: 450px) {
  @mixin homeStyle{
  font-size: 20px;
  font-weight: 700;
}
 @mixin btnStyle{
//   justify-content: center;
//   align-items: center;
//   background: #fff;
//   border: 1px solid #228bc8;
//   box-sizing: border-box;
  width: 75%;
//   height: 50px;
//   padding: 0 6%;
//   color: #228bc8;
//   font-size: 16px;
//   text-decoration: none;
//   position: relative;
//   transition-duration: 0.2s;
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
  margin: 100px 0 0 0 ;
    @include btnStyle();

 }
.button:hover{
  color: $color-bg;
  background-color:#fff;
}
}

</style>