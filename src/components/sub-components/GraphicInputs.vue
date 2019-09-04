<template>
    <div v-on:input.prevent="onInput">
        <h5>{{name}}</h5>
        <div v-for="(param, name, ind) in inputs" v-bind:key="ind">
            <Input v-bind:data="{name, ...param}"/>
        </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import { Input } from "./inputs";

  export default {
    name: "GraphicInputs",
    components: {
      Input
    },
    computed: {
      ...mapGetters([
        "name",
        "inputs",
        "graphics"
      ])
    },
    methods: {
      ...mapActions([
        "toggleOutputGraphics",
        "updateOutputs",
        "initOutputState"
      ]),
      onInput({ target: { id, value } }) {
        const fixedValue = isNaN(Number(value)) ? value : Number(value);
        this.updateOutputs({ property: id, value: fixedValue });
      }
    },
    beforeMount() {
      const allInputs = { graphics: this.graphics, ...this.inputs };
      const output = { name: this.name };

      for (const key in allInputs) {
        output[key] = allInputs[key].value;
      }

      this.initOutputState(output);
    }
  };
</script>

<style scoped>

</style>