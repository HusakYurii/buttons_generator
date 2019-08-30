<template>
    <div class="container-fluid">
        <div>
            <h5>Background sizes</h5>
            <div class="pane visible">
                <div class="row">
                    <label for="width">Width</label>
                    <input type="number" id="width" step="1" min="0" class="form-control">
                </div>
                <div class="row">
                    <label for="height">Height</label>
                    <input type="number" id="height" step="1" min="0" class="form-control">
                </div>
                <div class="row">
                    <label for="radius">Radius</label>
                    <input type="number" id="radius" step="1" min="0" class="form-control">
                </div>
                <div class="row">
                    <label for="color">Color</label>
                    <input type="color" id="color" class="form-control">
                </div>
                <div class="row">
                    <label for="alpha">Alpha</label>
                    <input type="number" id="alpha" min="0" max="1" class="form-control">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    //TODO 1) add the rest of the input fields
    //TODO 2) Connect all fields to storage so they can be generated dynamically
  export default {
    name: "Controls"
  };
</script>

<style scoped></style>