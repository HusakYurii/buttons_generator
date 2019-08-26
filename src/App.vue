<template>
    <div id="app">
        <Controls/>
        <CanvasView/>
    </div>
</template>

<script>
  import Controls from "./components/Controls";
  import CanvasView from "./components/CanvasView";

  export default {
    name: "app",
    components: {
      Controls,
      CanvasView
    }
  };
</script>

<style>

</style>
