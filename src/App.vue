<template>
  <div id="app">
    <Navbar />
    <main
      role="main"
      class="bg-white"
    >
      <router-view/>
    </main>
  </div>
</template>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar,
  }
}
</script>

<style scoped lang="scss">
@import "assets/scss/main.scss";
html {
  font-size: 16px;
  height: 100%;
}

body {
  height: 100%;
  background: $body-bg;
  color: $body-color;
  font-family: "PingFang TC";
}


main {
  margin-top: 100px;
}
</style>
