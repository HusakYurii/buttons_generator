/* Object.freeze is used to prevent Vue of setting getters & setters for each property */
const state = {
  layout: Object.freeze({
    name: "Button Text",
    inputs: {
      isText: { label: "is text", type: "checkbox", value: true },
      string: { label: "text", type: "text", value: "Hellow World" },
      fontStyle: { label: "font-style", type: "select", value: "italic" },
      fontSize: { label: "font-size", type: "number", value: 30 },
      fill: { label: "text-color", type: "color", value: "#FB251A" },
      anchorX: { label: "anchor-x", type: "number", value: 0.5 },
      anchorY: { label: "anchor-y", type: "number", value: 0.5 }
    }
  }),
  outputs: { /* this props will be used for pixi button*/ }
};
const getters = {
  textSectionName: (state) => state.layout.name,
  textInputs: (state) => state.layout.inputs,
  textOutputs: (state) => state.outputs
};
const actions = {
  initTextOutputs: ({ commit }, payload) => commit("initTextOutputs", payload),
  updateStylesOutput: ({ commit }, payload) => commit("updateStylesOutput", payload)
};
const mutations = {
  initTextOutputs: (state, payload) => state.outputs = payload,
  updateStylesOutput: (state, { property, value }) => state.outputs[property] = value
};

export default {
  state,
  getters,
  actions,
  mutations
};