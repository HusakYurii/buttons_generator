<template>
    <div v-on:input.stop="onInput">
        <h5>{{textSectionName}}</h5>
        <Input v-for="(param, name, ind) in textInputs"
               v-bind:data="{name, ...param}"
               v-bind:key="ind"/>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import { Input } from "./inputs";

  export default {
    name: "TextInputs",
    components: {
      Input
    },
    computed: {
      ...mapGetters([
        "textSectionName",
        "textInputs"
      ])
    },
    methods: {
      ...mapActions([
        "initTextOutputs",
        "updateStylesOutput"
      ]),
      onInput({ target: { id, value } }) {
        const fixedValue = isNaN(Number(value)) ? value : Number(value);
        this.updateStylesOutput({ property: id, value: fixedValue });
      }
    },
    beforeMount() {
      const output = { name: this.textSectionName };

      for (const key in this.textInputs) {
        output[key] = this.textInputs[key].value;
      }

      this.initTextOutputs(output);
    }
  };
</script>

<style scoped>

</style>