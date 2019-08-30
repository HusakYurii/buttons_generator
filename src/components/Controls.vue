<template>
    <div class="container-fluid">
        <div>
            <h5>Background sizes</h5>
            <div v-for="(param, name) in params">
                <div class="row input-group-sm mb-1">
                    <label v-bind:for="name" class="m-0">{{name}}</label>
                    <input v-bind:id="name"
                           v-bind:value="param"
                           v-bind:type="(name === 'color' ? 'color' : 'number')"
                           v-on:input="updateParam"
                           class="form-control p-1"
                           step="1"
                           min="0">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    name: "Controls",
    computed: {
      ...mapGetters(["button",  "params"])
    },
    methods: {
      updateParam(e){
        //TODO connect mutations of vuex with this component
      }
    }
  };
</script>

<style scoped></style>