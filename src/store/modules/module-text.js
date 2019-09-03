/* Object.freeze is used to prevent Vue of setting getters & setters for each property */
const state = {
  layout: Object.freeze({
    name: "Button Text",
    string: { type: "text", "value": "Hellow World" },
    styles: {
      fontStyle: { label: "font-style", type: "select", value: ["italic"] },
      fontSize: { label: "font-size", type: "number", value: 30 },
      fill: { label: "text-color", type: "color", value: "#FB251A" },
      anchorX: { label: "anchor-x", type: "number", value: 0.5 },
      anchorY: { label: "anchor-y", type: "number", value: 0.5 }
    }
  }),
  outputs: { /* this props will be used for pixi button*/ }
};
const getters = {
  string: (state) => state.layout.string,
  styles: (state) => state.layout.styles
};
const actions = {
  initOutputsStrings: ({ commit }, payload) => commit("initStrings", payload),
  updateOutputString: ({ commit }, payload) => commit("string", payload),
  updateOutputStyles: ({ commit }, payload) => commit("styles", payload)
};
const mutations = {
  initStrings: (state, payload) => state.outputs = payload,
  string: (state, payload) => state.outputs.string = payload,
  styles: (state, { property, value }) => state.outputs[property] = value
};

export default {
  state,
  getters,
  actions,
  mutations
};