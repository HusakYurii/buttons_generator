import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    button: {
      name: "Default",
      isGraphics: true,
      params: {
        width: { type: "number", value: 235 },
        height: { type: "number", value: 50 },
        radius: { type: "number", value: 20 },
        color: { type: "color", value: "#FFFFFF" },
        alpha: { type: "number", value: 1 },
        anchorX: { label: "anchor-x", type: "number", value: 0.5 },
        anchorY: { label: "anchor-y", type: "number", value: 0.5 }
      },
      text: {
        string: { type: "text", "value": "Hellow World" },
        anchorX: { label: "anchor-x", type: "number", value: 0.5 },
        anchorY: { label: "anchor-y", type: "number", value: 0.5 },
        fill: {label: "text-color",type:"color", value:"#FB251A"},
        fontStyle: {label: "font-style", type:"select", value: ["italic"]},
        fontSize: { label: "font-size", type: "number", value: 30 }
      }
    }
  },
  getters: {
    button(state) {
      return state.button;
    },
    params(state) {
      return state.button.params;
    },
    text(state) {
      return state.button.text;
    }
  },
  actions: {
    updateProperty({ commit }, payload) {
      commit("updateProperty", payload);
    }
  },
  mutations: {
    updateProperty(state, { property, value }) {
      state.button.params[property].value = value;
    }
  }
});