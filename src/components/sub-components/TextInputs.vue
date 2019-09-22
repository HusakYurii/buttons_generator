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
      onInput({ target: { type, id, value, checked } }) {
        const payload = (type === "checkbox") ? checked : value;
        const fixedPayload = (type === "checkbox") ? payload :
                            isNaN(Number(payload)) ? payload : Number(payload);

        this.updateStylesOutput({ property: id, value: fixedPayload });
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
        text-align: center;
        width: 40rem;
    }

    .text-inputs h5 {
        font-size: 2rem;
        padding: 1rem;
    }

    .text-inputs label,
    .text-inputs input {
        font-size: 2rem;
        padding: 0.2rem 0.2rem;
    }

    .text-inputs label {
        border-bottom: .2rem solid #fff;
    }
    .text-inputs input[type="checkbox"] {
        width: 10rem;
        height: 2.5rem;
    }
    .text-inputs input {
        color: black;
        border-radius: .5rem;
    }
</style>