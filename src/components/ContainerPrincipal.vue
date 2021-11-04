<template>
  <div>
    <!-- Agregar todo lo restante aca -->
    <div class="container-fluid">
      <b-row>
        <b-col cols="3">
          <left-menu></left-menu>
        </b-col>
        <b-col>
          <contenedor-cards></contenedor-cards>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import LeftMenu from "./LeftMenu.vue";
import ContenedorCards from './ContenedorCards.vue'
export default {
  name: "ContainerPrincipal",
  components: {
    LeftMenu,
    ContenedorCards
  },
};
</script>

<style></style>
