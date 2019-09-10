/* Object.freeze is used to prevent Vue of setting getters & setters for each property */
const state = {
  layout: Object.freeze({
    name: "Button Sizes",
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
  graphicsSectionName: (state) => state.layout.name,
  graphicsInputs: (state) => state.layout.inputs,
  graphicsOutputs: (state) => state.outputs
};
const actions = {
  initGraphicsOutputs: ({ commit }, payload) => commit("initGraphicsOutputs", payload),
  updateGraphicsOutputs: ({ commit }, payload) => commit("updateGraphicsOutputs", payload),
  addPicture: ({commit}, payload) => commit("addPictureToOutputs", payload)
};
const mutations = {
  initGraphicsOutputs: (state, payload) => state.outputs = payload,
  updateGraphicsOutputs: (state, { property, value }) => state.outputs[property] = value,
  addPictureToOutputs: (state, payload) => state.outputs.picture = payload
};

export default {
  state,
  getters,
  actions,
  mutations
};