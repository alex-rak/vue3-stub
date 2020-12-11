<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a
        href="https://cli.vuejs.org"
        target="_blank"
        rel="noopener">
        vue-cli documentation
      </a>.
    </p>
    <h3>Installed CLI Plugins</h3>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
})
export default class HelloWorld extends Vue {
}
</script>

<style lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  padding: 0;
  list-style-type: none;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.hello {
  position: relative;
  display: flex;
  border-radius: 10px;
}
</style>
