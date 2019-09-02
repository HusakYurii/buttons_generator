<template>
    <div class="row input-group-sm mb-1">
        <label v-bind:for="data.name" class="m-0">{{data.label || data.name}}</label>
        <input v-bind:id="data.name"
               v-bind:value="data.value"
               v-bind:type="data.type"
               v-bind:key="data.key"
               v-on:input="onInput"
               class="form-control p-1"
               min="0">
    </div>
</template>

<script>
  export default {
    name: "TextInput",
    params: ["data"],
    methods: {
      onInput({ target: { id, value } }) {

      }
    }
  };
</script>

<style scoped>

</style>