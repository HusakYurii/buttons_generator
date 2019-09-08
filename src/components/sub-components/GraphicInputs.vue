<template>
    <div v-on:input.stop="onInput" class="graphic-inputs">
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
      onInput({ target: { type, id, value, checked } }) {
        const payload = (type === "checkbox") ? checked : value;
        const fixedPayload = (type === "checkbox") ? payload :
                             isNaN(Number(payload)) ? payload : Number(payload);

        this.updateGraphicsOutputs({ property: id, value: fixedPayload });
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

<style>
    .graphic-inputs {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        text-align: center;
        width: 400px;
    }

    .graphic-inputs h5 {
        font-size: 2rem;
    }

    .graphic-inputs label,
    .graphic-inputs input {
        font-size: 1.5rem;
    }
</style>