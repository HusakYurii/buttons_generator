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
          reader.readAsDataURL(file);
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
        flex-direction: row;
        text-align: center;
        justify-content: space-around;
        margin-top: 1rem;
    }

    .file-input input {
        width: 13rem;
        color: transparent;
    }

    .file-input label,
    .file-input input {
        font-size: 2rem;
    }
</style>