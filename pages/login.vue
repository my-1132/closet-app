<template>
    <div class="login">
        <form class="form" @submit.prevent>
            <div>ログイン</div>
            <label class="label">
                <div>メールアドレス</div>
                <div><input type="text" v-model="email"></div>
            </label>
            <label class="label">
                <div>パスワード</div>
                <div><input type="text" v-model="password"></div>
            </label>
            <div><button class="button" type="submit" @click="login">ログイン</button></div>
        </form>
    </div>
</template>

<script>
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';



export default {    
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
        login(){
            firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(
                console.log('成功！'),
                this.$router.push('/news1')
            ).catch((error) => {
                alert(error)
            });
        }
        // login(){
        // }
    }
}
</script>