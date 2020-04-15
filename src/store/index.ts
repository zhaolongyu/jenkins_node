import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const modulesA = {
   namespaced: true,
  state: {
    list: 1
  },
  mutations: {
    savelist() {},
    savelist123123() {},
    dsfsd123() {}
  },
  actions: {
    saveSessionId( commit:any ):void {
      commit("savelist");
    }
  }
}
export default new Vuex.Store({
  state: {
    token: false,
    duration:1000
  },
  mutations: {
    disabledFalse() {},
    // disabledtrue() {
    //   this.state.disabled = true;
    // },
    tokenBooleanFalse() {
      (this as any).state.token = false;
    },
    tokenBooleanTrue() {
      (this as any).state.token = true;
    }
  },
  actions: {
    add: async ({ commit }) => {
      commit("tokenBooleanFalse");
    }
  },
  modules: {
    modulesA
  },
});
