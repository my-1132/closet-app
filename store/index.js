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
            // ユーザーのクローゼット
            clothList: []
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
            },
            // statusが0のクローゼットはclothList{}に保存
            addCloth(state, { id, cartItem }) {
                cartItem.id = id
                state.clothList = cartItem
            },
            updateCloset(state, selectItem) {
                console.log(selectItem)
                console.log(state.clothList)
                state.clothList.chosens = selectItem
            }

        },
        actions: {
            // googleアカウントでのログイン
            gLogin() {
                const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
                firebase.auth().signInWithRedirect(googleAuthProvider)
                // .then(
                //     this.$router.push('/news1')
                // )
            },
            gLogout() {
                firebase.auth().signOut();
                console.log('ログアウトしました');
            },
            setLoginUser({ commit }, user) {
                commit("setLoginUser", user);
            },
            deleteLoginUser({ commit }) {
                commit("deleteLoginUser");
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
            },
            fetchCloset({ commit, getters }) {
                firebase.firestore().collection(`users/${getters.uid}/closet`)
                    .get().then(snapshot => {
                        // ログインが初めての場合、空のクローゼットを作成
                        if (snapshot.empty) {
                            this.dispatch('setCloset')
                        }
                        snapshot.forEach(doc => {
                            console.log(doc.data())
                            // クローゼットがある場合
                            commit("addCloth", { id: doc.id, cartItem: doc.data() })
                        })
                    })
            },
            // 空のクローゼットを作成
            setCloset({ getters, commit }) {
                firebase.firestore().collection(`users/${getters.uid}/closet`)
                    .add({
                        chosens: []
                    }).then(doc => {
                        console.log(doc)
                        commit('addCloth', ({
                            id: doc.id, cartItem: {
                                chosens: []
                            }
                        }))
                    })
            },
            // 自分のクローゼットにyesで選択した洋服のみを入れる
            editCloset({ getters, commit, state }, yBox) {
                // stateのclothListのコピーを作成
                const using = Object.assign({}, state.clothList)
                if (getters.uid) {
                    const newBox = yBox.slice()
                    using.chosens = state.clothList.chosens.slice()
                    using.chosens = newBox
                    firebase.firestore().collection(`users/${getters.uid}/closet`)
                        .doc(using.id).update({ chosens: using.chosens })
                    commit('updateCloset', using.chosens)
                }
            },
        },
        getters: {
            uid: state => state.login_user ? state.login_user.uid : null,
            clothListBySeason: state => state.clothList,
            // const all =  state.clothList.filter(cL => cL.season === "all")
            // const spring =  state.clothList.filter(cL => cL.season === "spring")
            // const summer =  state.clothList.filter(cL => cL.season === "summer")
            // const autumn =  state.clothList.filter(cL => cL.season === "autumn")
            // const winter =  state.clothList.filter(cL => cL.season === "winter")

            // return { all, spring, summer, autumn, winter, }

            // console.log(state.clothList);
            // if(state.clothList[0] && state.clothList === null){
            //     console.log('空です');
            // }else{
            //     console.log('値入ってます');
            // }
            // return{}
            getCloth: state => state.clothList,
            getClothById: state => id => state.clothList.chosens.filter(i => id === i.id),
        }
    })
}

export default createStore