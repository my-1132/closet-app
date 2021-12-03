<template>
    <div class="login">
        <form class="form" @submit.prevent>
            <div class="word1">ログイン</div>
            <label class="label">
                <div class="word2">メールアドレス</div>
                <div><input type="text" v-model="email" class="text" placeholder="sample@email.com"></div>
            </label>
            <label class="label">
                <div class="word2">パスワード</div>
                <div><input type="text" v-model="password" class="text" placeholder="✳︎✳︎✳︎✳︎"></div>
            </label>
            <div><button class="button" type="submit" @click="login">ログイン</button></div>
        </form>
    </div>
</template>

<script>
// import firebase from 'firebase/compat/app'
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { mapActions } from 'vuex';


export default {    
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        ...mapActions(['login'])
    }
}
</script>

<style lang="scss" scoped>
    $color-bg: rgb(100, 209, 230);

.word1{
    text-align: center;
    font-weight: 700;
    font-size: 28px;
    padding: 30px 0 15px 0;
}
.word2{
    padding-left: 58px;
}
.login{
    background-color: #FFFFFF;
    width: 400px;
    height: 400px;
    margin: 7em auto;
    border-radius: 1.5em;
    box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
    font-family:  "Hiragino Maru Gothic Pro";
}
.text{
    width: 76%;
    color: rgb(38, 50, 56);
    font-weight: 700;
    font-size: 14px;
    letter-spacing: 1px;
    background: rgba(136, 126, 126, 0.04);
    padding: 10px 20px;
    border: none;
    border-radius: 20px;
    outline: none;
    box-sizing: border-box;
    border: 2px solid rgba(0, 0, 0, 0.02);
    margin-bottom: 50px;
    margin-left: 46px;
    text-align: center;
    margin-bottom: 27px;

    &:focus{
        border: 2px solid rgba(0, 0, 0, 0.18) !important;
    }
}
.button{
    cursor: pointer;
    border-radius: 5em;
    color: #fff;
    background: $color-bg;
    border: 0;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 10px;
    padding-top: 10px;
    margin-left: 35%;
    font-size: 13px;
    box-shadow: 0;
    border: solid;

    &:hover{
        background-color: #fff;
        color: $color-bg;
        
    }
}

@media screen and (max-width: 450px){
     $color-bg: rgb(100, 209, 230);

    .word1{
        text-align: center;
        font-weight: 700;
        font-size: 24px;
        padding: 30px 0 15px 0;
    }
    .word2{
        padding-left: 58px;
        font-size: 15px;
    }
    .login{
        background-color: #FFFFFF;
        width: 325px;
        height: 325px;
        margin: 7em auto;
        border-radius: 1.5em;
        box-shadow: 0px 11px 35px 2px rgba(0, 0, 0, 0.14);
        font-family:  "Hiragino Maru Gothic Pro";
    }
    .text{
        width: 76%;
        color: rgb(38, 50, 56);
        font-weight: 700;
        font-size: 14px;
        letter-spacing: 1px;
        background: rgba(136, 126, 126, 0.04);
        padding: 10px 20px;
        border: none;
        border-radius: 20px;
        outline: none;
        box-sizing: border-box;
        border: 2px solid rgba(0, 0, 0, 0.02);
        margin-bottom: 50px;
        margin-left: 46px;
        text-align: center;
        margin-bottom: 27px;

        &:focus{
            border: 2px solid rgba(0, 0, 0, 0.18) !important;
        }
    }
    .button{
        cursor: pointer;
        border-radius: 5em;
        color: #fff;
        background: $color-bg;
        border: 0;
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 10px;
        padding-top: 10px;
        margin-left: 0 50% 0 50%;
        font-size: 13px;
        box-shadow: 0;
        border: solid;

        &:hover{
            background-color: #fff;
            color: $color-bg;
            
        }
    }


}
</style>