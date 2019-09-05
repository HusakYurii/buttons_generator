<template>
    <div v-on:input.stop="onInput">
        <h5>{{graphicsSectionName}}</h5>
        <Input v-for="(param, name, ind) in graphicsInputs"
               v-bind:data="{name, ...param}"
               v-bind:key="ind"/>

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
        "graphicsSectionName",
        "graphicsInputs"
      ])
    },
    methods: {
      ...mapActions([
        "updateGraphicsOutputs",
        "initGraphicsOutputs"
      ]),
      onInput({ target: { id, value } }) {
        const fixedValue = isNaN(Number(value)) ? value : Number(value);
        this.updateGraphicsOutputs({ property: id, value: fixedValue });
      }
    },
    beforeMount() {
      const output = { name: this.graphicsSectionName };

      for (const key in this.graphicsInputs) {
        output[key] = this.graphicsInputs[key].value;
      }

      this.initGraphicsOutputs(output);
    }
  };
</script>

<style scoped>

</style>