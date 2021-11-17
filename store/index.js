import Vuex from 'vuex'
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const createStore = () => {
    return new Vuex.Store({
        state: () => ({
            login_user: null,
            // 選択する洋服たちを入れる
            closet: [],

        }),
        mutations: {
            setLoginUser(state, user) {
                state.login_user = user
            },
            deleteLoginUser(state) {
                state.login_user = null
            },
            // 取得したfirebaseのアイテム達をstateに保存
            fetchItems(state, data) {
                state.closet.length = 0
                data.bottoms.forEach(item => {
                    state.closet.push(item)
                })
                data.outer.forEach(item => {
                    state.closet.push(item)
                })
                data.shoes.forEach(item => {
                    state.closet.push(item)
                })
                data.tops.forEach(item => {
                    state.closet.push(item)
                })
                console.log(state.closet)
            }

        },
        actions: {
            // googleアカウントでのログイン
            gLogin() {
                const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
                firebase.auth().signInWithRedirect(googleAuthProvider)
                
            },
            gLogout() {
                firebase.auth().signOut();
            },
            setLoginUser({ commit }, user) {
                commit("setLoginUser", user);
            },
            deleteLoginUser({ commit }) {
                commit("deleteLoginUser");
            },
            // 登録後のログイン
            login(context, payload) {
                firebase.auth().signInWithEmailAndPassword(payload.email, payload.pass)
                    .then(user => {
                        console.log('成功！')
                    }).catch((error) => {
                        alert(error)
                    })
            },
            // firebaseの洋服を取得する
            // ユーザーが新規登録した時点で呼び出す
            fetchItems({ commit }) {
                firebase.firestore().collection('Items')
                    .get().then(snapshot => {
                        snapshot.forEach(doc => {
                            commit("fetchItems", doc.data())
                        })
                    })
            }
        },
        getters: {
            uid: state => state.login_user ? state.login_user.uid : null,

        }
    })
}

export default createStore