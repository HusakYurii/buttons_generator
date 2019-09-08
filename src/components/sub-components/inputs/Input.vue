<template>
    <div class="general-input">
        <label v-bind:for="data.name">{{data.label}}</label>
        <input v-bind:id="data.name"
               v-bind:value="data.value"
               v-bind:type="data.type"
               v-bind:checked="data.value"
               min="0">
    </div>
</template>

<script>
  export default {
    name: "GeneralInput",
    props: ["data"]
  };
</script>

<style>
    .general-input {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
    }

    .general-input > label {
        width: 30%;
    }

    .general-input > input {
        width: 30%;
    }
</style>