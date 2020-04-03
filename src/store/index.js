import Vue from "vue";
import Vuex from "vuex";

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
    saveSessionId({ commit }) {
      commit("savelist");
    }
  }
};

export default new Vuex.Store({
  namespaced: true,
  state: {
    token: false,
    test: 2222
  },
  mutations: {
    tokenBooleanFalse() {
      this.state.token = false;
    },
    tokenBooleanTrue() {
      this.state.token = true;
    }
  },
  actions: {
    add: async ({ commit }) => {
      commit("tokenBooleanFalse");
    }
  },
  modules: {
    modulesA
  }
});
