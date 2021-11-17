<template>
    <div class="signUp">
        <h1>会員登録</h1>
        <div>メールアドレス</div>
        <div><input type="text" v-model="email" class="text"></div>
        <div>パスワード</div>
        <div><input type="text" v-model="password" class="text"></div>
        <div><button class="button" @click="signUp" >会員登録</button></div>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export default {
    data(){
        return{
            email: '',
            password:''
        }
    },
    // computed:{
    //     user(){
    //         return this.$store.getters.uid
    //     }
    // },
    methods:{
        signUp(){
            console.log(firebase);
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
            .then(
                console.log('会員登録完了'),
                this.$router.push('/login')
            ).catch(function(error){
                alert(error)
                },
            )
        }
    }
}
</script>
<style lang="scss" >
$color-bg: rgb(100, 209, 230);
.signUp{
    display: grid;
    place-items: center;
}
h1 {
    font-size: 1.75rem;
}
// .text{
//     position: relative;
//   display: block;
//   width: 500px;
//   margin-top: 50px;
//   padding: 15px;
//   border: none;
//   border-radius: 5px;
//   font-size: 16px;
//   color: #a0a0a0;
//   outline: none;
// }
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