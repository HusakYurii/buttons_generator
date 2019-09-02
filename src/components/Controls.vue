<template>
    <div class="container-fluid">
        <div>
            <h5>Button sizes</h5>
            <div v-for="(param, name, ind) in params">
                <div class="row input-group-sm mb-1">
                    <label v-bind:for="name" class="m-0">{{param.label || name}}</label>
                    <input v-bind:id="name"
                           v-bind:value="param.value"
                           v-bind:type="param.type"
                           v-bind:key="ind"
                           v-on:input="onInput"
                           class="form-control p-1"
                           min="0">
                </div>
            </div>
            <h5>Button text</h5>
            <div v-for="(param, name, ind) in text">
                <div class="row input-group-sm mb-1">
                    <label v-bind:for="name" class="m-0">{{param.label || name}}</label>
                    <input v-bind:id="name"
                           v-bind:value="param.value"
                           v-bind:type="param.type"
                           v-bind:key="ind"
                           v-on:input="onInput"
                           class="form-control p-1"
                           min="0">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapGetters, mapActions } from "vuex";

  export default {
    name: "Controls",
    computed: {
      ...mapGetters(["params", "text"])
    },
    methods: {
      ...mapActions(["updateProperty"]),
      onInput({target: {id, value}}) {
        this.updateProperty({property: id, value: Number(value)});
      }
    }
  };
</script>

<style scoped></style>