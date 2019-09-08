<template>
    <div v-on:input.stop="onInput" class="text-inputs">
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

<style>
    .text-inputs {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        width: 400px;
    }

    .text-inputs h5 {
        font-size: 2rem;
    }

    .text-inputs label,
    .text-inputs input {
        font-size: 1.5rem;
    }
</style>