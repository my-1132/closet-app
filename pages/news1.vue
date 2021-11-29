<template>
  <div class="new1">
    <div class="home1">アイテムの写真を選んで</div>
    <div class="home2">あなたのクローゼットを作りましょう</div>
    <div class="btn"><nuxt-link to="/choise"><button class="button">アイテムの写真を選ぶ</button></nuxt-link></div>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
export default {
  created(){
    this.fetchItems()
  },
  methods:{
    ...mapActions(['fetchItems'])
  }
  
}
</script>
<style lang="scss" scoped>
  .new1 {
    text-align: center;
    font-family: "Hiragino Maru Gothic Pro";
  }
  .button {
        background-color: #ADD8E6;
        color: white;
        border-radius: 30px;
        padding: 10px;
        width: 40%;
        height: 100%;
        box-shadow: 0 2px 5px #ccc;

  }

</style>
