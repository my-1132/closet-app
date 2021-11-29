<template>
    <div class="news2">
        <div class="home">クローゼットが完成しました</div>
        <div class="home">それでは確認に行ってましょう</div>
        <div><img src="~/assets/closet2.png" class="pic"></div>
        <div class="btn"><button class="button"><nuxt-link to="/display">コーディネートを確認する</nuxt-link></button></div>
    </div>
</template>

<style lang="scss" scoped>
 $color-bg: rgb(100, 209, 230);

.news2{
  font-family: "Hiragino Maru Gothic Pro";
  text-align: center;
}
.home{
    font-size: 40px;
    margin: 50px 0 50px 0;
}
.pic{
  width: 50%;
  height: 50%;
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
</style>