<template>
  <div>
    <navbar></navbar>
    <new-producto></new-producto>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import NewProducto from '../components/NewProducto.vue'
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
