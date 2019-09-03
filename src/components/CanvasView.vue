<template>
    <div class="container-fluid">
        <canvas>
            <p>Oops! Seems that your browser does not support canvas tag</p>
        </canvas>
    </div>
</template>

<script>
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
      addButton(conf = {}) {
        const btn = Button.create(conf);
        this.stage.addChild(btn);
      },
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
      }
    },
    mounted() {
      this.initView();
    }
  };
</script>

<style scoped></style>