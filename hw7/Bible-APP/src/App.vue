<template>
  <div id="app">
    <h1>Bible APP</h1>
    <RandomScripture />
    <VerseLookup />
  </div>
</template>

<script>
import RandomScripture from "./components/RandomScripture.vue";
import VerseLookup from "./components/VerseLookup.vue";

export default {
  name: "App",
  components: {
    RandomScripture,
    VerseLookup,
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 50px;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
}

h1 {
  margin-bottom: 20px;
}
</style>
