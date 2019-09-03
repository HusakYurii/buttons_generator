/* Object.freeze is used to prevent Vue of setting getters & setters for each property */
const state = {
  layout: Object.freeze({
    name: "Static State",
    graphics: { type: "checkbox", value: true },
    inputs: {
      width: { label: "width", type: "number", value: 235 },
      height: { label: "height", type: "number", value: 50 },
      radius: { label: "radius", type: "number", value: 20 },
      color: { label: "color", type: "color", value: "#FFFFFF" },
      alpha: { label: "alpha", type: "number", value: 1 },
      anchorX: { label: "anchor-x", type: "number", value: 0.5 },
      anchorY: { label: "anchor-y", type: "number", value: 0.5 }
    }
  }),
  outputs: { /* this props will be used for pixi button*/ }
};
const getters = {
  name: (state) => state.layout.name,
  graphics: (state) => state.layout.graphics,
  inputs: (state) => state.layout.inputs
};
const actions = {
  initOutputState: ({ commit }, payload) => commit("initState", payload),
  toggleOutputGraphics: ({ commit }, payload) => commit("graphics", payload),
  updateOutputs: ({ commit }, payload) => commit("outputs", payload)
};
const mutations = {
  initState: (state, payload) => state.outputs = payload,
  graphics: (state, payload) => state.outputs.graphics = payload,
  outputs: (state, { property, value }) => state.outputs[property] = value
};

export default {
  state,
  getters,
  actions,
  mutations
};