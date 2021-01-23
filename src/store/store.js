import Vuex from "vuex";
import Vue from "vue";
import createPersistedState from "vuex-persistedstate";
import Global from "./modules/Global/Global";

Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.localStorage
    })
  ],
  modules: {
    Global
  }
});
