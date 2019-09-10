<template>
    <div class="file-input">
        <label>Buttons picture</label>
        <input type="file" accept="image/png, image/jpeg" v-on:input="loadFile"/>
    </div>
</template>

<script>
  export default {
    name: "FileInput",
    data() {
      return {};
    },
    methods: {
      async loadFile({ target }) {
        const [file] = target.files;
        const data = await this.getBase64(file);
        this.$emit("fileLoaded", data)
      },
      getBase64(file) {
        return new Promise((res, rej) => {
          const reader = new FileReader();
          reader.readAsArrayBuffer(file);
          reader.onload = () => res(reader.result);
          reader.onerror = (err) => rej(err);
        });
      }
    }
  };
</script>

<style scoped>
    .file-input {
        display: flex;
        flex-direction: column;
        text-align: center;
    }

    .file-input > input {
        margin: 0 auto;
        text-align: center;
    }
</style>