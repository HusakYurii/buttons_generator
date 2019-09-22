<template>
    <div>
        <div v-on:input.stop="onInput" class="graphic-inputs">
            <h5>{{graphicsSectionName}}</h5>
            <Input v-for="(param, name, ind) in graphicsInputs"
                   v-bind:data="{name, ...param}"
                   v-bind:key="ind"/>
        </div>
        <FileInput v-on:fileLoaded ="addPicture"/>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";
  import { Input, FileInput } from "./inputs";

  export default {
    name: "GraphicInputs",
    components: {
      Input,
      FileInput
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
        "initGraphicsOutputs",
        "addPicture"
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
        width: 40rem;
    }

    .graphic-inputs h5 {
        font-size: 2rem;
        padding: 1rem;
    }

    .graphic-inputs label,
    .graphic-inputs input {
        font-size: 2rem;
        padding: 0.2rem 0.2rem;
    }

    .graphic-inputs label {
        border-bottom: .2rem solid #fff;
    }
    .graphic-inputs input {
        color: black;
        border-radius: .5rem;
    }

</style>