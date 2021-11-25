<template>
  <div>
    <!-- Agregar todo lo restante aca -->
    <div class="container-fluid">
      <b-row>
        <b-col>
          <contenedor-cards></contenedor-cards>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import ContenedorCards from './ContenedorCards.vue'
export default {
  name: "ContainerPrincipal",
  components: {
    ContenedorCards
  },

  data() {
    return {
      publicaciones_filtradas: null
    }
  },

  methods: {

    datosFiltrados(lista_publicaciones){
      this.publicaciones_filtradas = lista_publicaciones 
      console.log('estoy aca')
      console.log(lista_publicaciones)  
    }

  },
};
</script>

<style></style>
