<template>
  <div id="app">
    <navbar></navbar>
    <container-principal></container-principal>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import ContainerPrincipal from './components/ContainerPrincipal.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    ContainerPrincipal,
      }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
