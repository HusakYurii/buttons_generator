import Vuex from "vuex";
import Vue from "vue";

import textInputs from "./modules/module-text";
import staticInputs from "./modules/module-graphic-static";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    textInputs,
    staticInputs
  }
});