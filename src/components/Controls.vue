<template>
    <div class="container-fluid">
        <GraphicInputs/>
        <TextInputs />
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

<style scoped></style>