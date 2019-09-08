<template>
    <div class="controls-container">
        <GraphicInputs/>
        <TextInputs/>
    </div>
</template>

<script>
  import { GraphicInputs, TextInputs } from "./sub-components";

  export default {
    name: "Controls",
    components: {
      GraphicInputs,
      TextInputs
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