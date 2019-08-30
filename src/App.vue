<template>
    <div id="app" class="container">
        <div class="row justify-content-center">
            <div class="col-">
                <h4>PIXI.js Buttons Editor</h4>
            </div>
        </div>
        <div class="row">
            <div class="col">
                <Controls/>
            </div>
            <div class="col">
                <CanvasView/>
            </div>
        </div>
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
