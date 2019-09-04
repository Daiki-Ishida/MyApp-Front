<template>
  <div id="app">
    <!-- <img src="./assets/logo.png" /> -->
    <div class="main">
      <router-view />
    </div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.main {
  max-width: 1140px;
  margin: 0 auto;
}
</style>
