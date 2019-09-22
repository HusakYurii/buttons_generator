<template>
    <div class="view-container">
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
        width: 600,
        height: 300,
        stage: null,
        button: null
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
          backgroundColor: 0xf5f6fa
        });

        ticker.add(/* TODO add ticker if so */);

        this.stage = stage.addChild(new Container());
        this.stage.position.set(this.width / 2, this.height / 2);
      },
      subscribeOnStore() {
        this.$store.subscribe(({ type }) => {
          (type === "addPictureToOutputs" ||
            type === "updateStylesOutput" ||
            type === "updateGraphicsOutputs") ? this.drawButton() : "Do nothing here";
        });
      },
      drawButton() {
        this.stage.removeChildren();
        this.button = Button.create(this.getConfig());
        this.stage.addChild(this.button);
      },
      getConfig() {
        const outputs = {
          button: this.graphicsOutputs(),
          text: this.textOutputs()
        };

        return Object.entries(outputs).reduce((acc, [key, value]) => {
          const { anchorX: x, anchorX: y, picture ,...rest } = value;
          acc[key] = {
            anchor: { x, y },
            picture,
            ...rest
          };
          return acc;
        }, {});
      }
    },
    mounted() {
      this.initView();
      this.subscribeOnStore();
      this.drawButton();
    }
  };
</script>

<style>
    .view-container {
        align-self: center;
    }
</style>