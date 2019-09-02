<template>
    <div class="row input-group-sm mb-1">
        <label v-bind:for="data.name" class="m-0">{{data.label || data.name}}</label>
        <input v-bind:id="data.name"
               v-bind:value="data.value"
               v-bind:type="data.type"
               v-on:input="onInput"
               class="form-control p-1"
               min="0">
    </div>
</template>

<script>
  export default {
    name: "GeneralInput",
    props: ["data"],
    methods: {
      onInput({ target: { id, value } }) {
        const fixedValue = isNaN(Number(value)) ? value : Number(value);
        this.$emit("onInput", { property: id, value: fixedValue });
      }
    }
  };
</script>

<style scoped>
    /*
        This component can be used for General (with one value) inputs such as Number, color, text
    */
</style>