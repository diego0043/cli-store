<template>
  <b-container>
    <navbar class="mb-1"></navbar>
    <new-producto class="mt-5"></new-producto>
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
::-webkit-scrollbar{
  width: 10px;
}

::-webkit-scrollbar-track{
  background: #F6F6F6;
}

::-webkit-scrollbar-thumb{
  background: #D4B499;
  border-radius: 25px;
}
</style>
