<template>
    <div>
        <h5>{{name}}</h5>
        <div v-for="(param, name, ind) in inputs" v-bind:key="ind">
            <Input v-bind:data="{name, ...param}" v-on:onInput="onInput"/>
        </div>
    </div>
</template>

<script>
  import staticInputs from "vuex";
  import { Input } from "./inputs";

  export default {
    name: "GraphicInputs",
    components: {
      Input
    },
    computed: {
      ...staticInputs.mapGetters([
        "name",
        "inputs",
        "graphics"
      ])
    },
    methods: {
      ...staticInputs.mapActions([
        "toggleOutputGraphics",
        "updateOutputs",
        "initOutputState"
      ]),
      onInput(data) {
        this.updateOutputs(data);
      }
    },
    beforeMount(){
        const allInputs = { graphics: this.graphics, ...this.inputs};
        const output = {name: this.name};

        for(const key in allInputs) {
          output[key] = allInputs[key].value;
        }

        this.initOutputState(output);
    }
  };
</script>

<style scoped>

</style>