<template>
  <div class="home">
    <navbar></navbar>
    <container-principal></container-principal>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from '../components/Navbar.vue'
import ContainerPrincipal from '../components/ContainerPrincipal.vue'

export default {
  name: 'Home',
  components: {
    Navbar,
    ContainerPrincipal
  }
}
</script>
