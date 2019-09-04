<template>
    <div class="row input-group-sm mb-1">
        <label v-bind:for="data.name" class="m-0">{{data.label}}</label>
        <input v-bind:id="data.name"
               v-bind:value="data.value"
               v-bind:type="data.type"
               class="form-control p-1"
               min="0">
    </div>
</template>

<script>
  export default {
    name: "GeneralInput",
    props: ["data"]
  };
</script>

<style scoped>
    /*
        This component can be used for General (with one value) inputs such as Number, color, text
    */
</style>