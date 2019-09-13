<template>
    <div class="controls-container">
        <GraphicInputs/>
        <TextInputs/>
        <button id="downloadConfig" v-on:click.prevent="downloadConfig">DOWNLOAD CONFIG</button>
    </div>
</template>

<script>
  import { GraphicInputs, TextInputs } from "./sub-components";
  import {mapGetters} from "vuex";

  export default {
    name: "Controls",
    components: {
      GraphicInputs,
      TextInputs
    },
    methods: {
      ...mapGetters(["graphicsOutputs", "textOutputs"]),
      downloadConfig(){
        const outputs = {
          button: this.graphicsOutputs(),
          text: this.textOutputs()
        };

        const config =  Object.entries(outputs).reduce((acc, [key, value]) => {
          const { anchorX: x, anchorX: y, picture ,...rest } = value;
          acc[key] = {
            anchor: { x, y },
            picture,
            ...rest
          };
          return acc;
        }, {});
        this.download(config);
      },
      download(config){
        const content = JSON.stringify(config, null, "\t");
        const type = "data:application/json;charset=utf-8";
        const file = new Blob([content], {type});
        const fileName = "button.json";

        const aTag = document.createElement("a");
        aTag.href = URL.createObjectURL(file);
        aTag.download = fileName;
        aTag.click();
      }
    }
  };
</script>

<style>
    .controls-container {
        align-self: center;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
</style>