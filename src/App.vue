<template>
    <div id="app">
        <header>
            <h2>Buttons Config Editor for PIXI.js</h2>
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
        color: #fff;
    }

    #app {
        width: 100%;
        min-width: 96rem;
        height: 100vh;
        background-color: #2c2f3b;
    }

    header {
        text-align: center;
        margin-bottom: 1rem;
        width: 100%;
    }

    h2 {
        font-size: 3rem;
        padding: 1.5rem;
    }

    main {
        display: flex;
        flex-direction: column;
    }
</style>
