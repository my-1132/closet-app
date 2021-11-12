import Vuex from 'vuex'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            login_user: null,

        }),
        mutations: {
            setLoginUser(state, user) {
                state.login_user = user
            },
              deleteLoginUser(state) {
                state.login_user = null
            },  
          
        },
        actions: {
            // googleアカウントでのログイン
            login() {
                const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
                firebase.auth().signInWithRedirect(googleAuthProvider)
            },
            logout() {
                firebase.auth().signOut();
            },
            setLoginUser({ commit }, user) {
                commit("setLoginUser", user);
            },
              deleteLoginUser({ commit }) {
                commit("deleteLoginUser");
            },
            // 登録後のログイン
            login1(context, payload) {
                firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
                  .then(user => {
                      console.log('成功！')
                    }).catch((error) => {
                      alert(error)
                    })
              },
          
        },
        getters: {
            uid: state => state.login_user ? state.login_user.uid : null,

        }
    })
}

export default createStore