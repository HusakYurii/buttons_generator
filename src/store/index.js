import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    button: {
      name: "Default",
      isGraphics: true,
      params: {
        width: 235,
        height: 50,
        radius: 20,
        color: 0xFFFFFF,
        alpha: 1
      },
      anchor: { x: 0.5, y: 0.5 },
      text: {
        string: "Hellow World",
        anchor: { x: 0.5, y: 0.5 },
        styles: {
          fill: [
            "#fb251a",
            "#1d0bf4",
            "black"
          ],
          fillGradientStops: [
            0,
            0.5,
            1
          ],
          fontStyle: "italic",
          fontVariant: "small-caps",
          fontSize: 30
        }
      }
    }
  },
  getters: {
    button(state){
      return state.button;
    }
  },
  actions: {},
  mutations: {}
});