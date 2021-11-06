<template>
  <b-container>
    <navbar></navbar>
    <new-producto></new-producto>
  </b-container>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import NewProducto from '../components/NewProductoC.vue'
export default {
  name: 'NewProduct',
  
  components: {
    Navbar,
    NewProducto
  }

}
</script>

<style>

</style>
