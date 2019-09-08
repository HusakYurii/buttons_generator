<template>
    <div id="app" class="wrapper">
        <header>
            <h4>Buttons Config Editor for PIXI.js</h4>
        </header>
        <main>
            <CanvasView/>
            <Controls/>
        </main>
    </div>
</template>

<script>
  import { Controls, CanvasView } from "./components";

  export default {
    name: "app",
    components: {
      Controls,
      CanvasView
    }
  };
</script>

<style>
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-size: 10px;
        font-family: Arial, Helvetica, sans-serif;
    }

    .wrapper {
        width: 100%;
        min-width: 960px;
        height: 100vh;
    }

    header {
        text-align: center;
    }

    header > * {
        font-size: 3rem;
    }

    main {
        display: flex;
        flex-direction: column;
    }
</style>
