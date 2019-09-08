<template>
    <div class="container-fluid">
        <canvas>
            <p>Oops! Seems that your browser does not support canvas tag</p>
        </canvas>
    </div>
</template>

<script>
  import { mapGetters } from "vuex";
  import { Application, Container } from "pixi.js";
  import { Button } from "../pixiLibs/Button";

  export default {
    name: "CanvasView",
    data() {
      return {
        width: 800,
        height: 600,
        stage: null
      };
    },
    methods: {
      ...mapGetters(["graphicsOutputs", "textOutputs"]),
      initView() {
        const { stage, ticker } = new Application({
          width: this.width,
          height: this.height,
          view: this.$el.querySelector("canvas"),
          antialias: true,
          backgroundColor: 0xC2C2C2
        });

        ticker.add(/* TODO add ticker if so */);

        this.stage = stage.addChild(new Container());
        this.stage.position.set(this.width / 2, this.height / 2);
        //this.addButton();
      },
      addButton() {
        const btn = Button.create();
        this.stage.addChild(btn);
      }
    },
    mounted() {
      this.initView();
    }
  };
</script>

<style scoped>
    /* Search for a right way to take all outputs from store at common event and redraw view */
</style>