<template>
  <div class="container-fluid contenedor">
    <!-- Titulo-->
    <b-row>
      <h1 class="mt-4 h1 centrado">Agregemos unas imagenes</h1>
    </b-row>

    <!-- carousel y svg-->
    <b-row>
      <b-col cols="8">

        <b-row class="container-fluid">
          <!-- carousel-->

          <b-col class="mt-3 pt-3 mb-2 ml-4">
            <carousel></carousel>
          </b-col>

          <!-- table-->
          <b-col class="mt-2 ml-4 pt-4 mb-2">
            <b-table hover :items="items" :fields="fields" class="mr-4">
              <template #cell(show_details)="row">
                <b-button size="sm" class="mr-2">
                  Eliminar
                </b-button>

                <!-- As `row.showDetails` is one-way, we call the toggleDetails function on @change -->
                <b-form-checkbox v-model="row.detailsShowing" @change="row.toggleDetails">
                  Details via check
                </b-form-checkbox>
              </template>
              
            
            </b-table>
          </b-col>
        </b-row>
      </b-col>

      <b-col cols="4" class="mt-2 mb-2 img-my">
        <b-img src="../assets/imageAdd.svg" width="400" class="img"> </b-img>
      </b-col>
    </b-row>

    <b-row>

      <b-col cols="5" class="mb-2">
        <b-form-file
          v-model="file1"
          :state="Boolean(file1)"
          placeholder="Selecciona una imagen..."
          drop-placeholder="Suelta la imagen..."
        ></b-form-file>
      </b-col>
      <b-col cols="2" class="mb-2">
        <b-button variant="outline-success">
          <b-icon icon="cloud-upload"></b-icon>
          Subir Foto
        </b-button>
      </b-col>

    </b-row>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
export default {
  name: "NewProducto",
  components: {
    Carousel,
  },
  data() {
    return {
      fields: ['N', 'Tamaño', 'Tipo', "Eliminar"],
      items: [
        { N: 1, Tamaño: "145kb", Tipo: "png" },
        { N: 2, Tamaño: "145kb", Tipo: "png" },
        { N: 3, Tamaño: "145kb", Tipo: "png" },
      ],
      slide: 0,
      sliding: null,
      file1: null,
    };
  },

  methods: {},
};
</script>

<style>
.completo {
  height: 100% !important;
  width: 100%;
}

.centrado {
  margin-left: auto;
  margin-right: auto;
  font-size: 3.5rem;
  font-weight: bold;
}
</style>
