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
                <div><input type="text" v-model="pass"></div>
            </label>
            <div><router-link to="/news1"><button class="button" type="button" @click="login1">ログイン</button></router-link></div>
        </form>
    </div>
</template>

<script>
// import firebase from 'firebase/compat/app'

export default {    
    data(){
        return{
            email:'',
            pass:''
        }
    },
    methods:{
        login1(email,pass){
            this.$store.dispatch('login1', {email: this.email, pass: this.pass})    
        }
    },
}
</script>