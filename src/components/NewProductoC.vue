<template>
  <div class="p-3 contenedor">
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
          <b-col>
            <b-row>
              <b-col class="mt-2 ml-4 pt-4 mb-2">
                <b-table hover :items="items" class="mr-4"> </b-table>
              </b-col>
              <b-col v-if="contador === 3" class="ml-4">
                <h6 class="text-danger">''Maximo 3 imagenes por anuncio''</h6>
              </b-col>
            </b-row>
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
          accept="image/*"
          v-model="file1"
          :state="Boolean(file1)"
          placeholder="Ninguna imagen seleccionada"
          drop-placeholder="Suelta la imagen..."
        ></b-form-file>
      </b-col>
      <b-col cols="5" class="mb-2">
        <b-button
          :disabled="contador === 3"
          @click="agregarImagen()"
          variant="outline-success"
          class="mr-3"
        >
          <b-icon icon="cloud-upload"></b-icon>
          Subir imagen
        </b-button>

        <b-button
          @click="eliminarImagen()"
          variant="outline-danger"
          class="mr-5"
        >
          <b-icon icon="trash-fill"></b-icon>
          Eliminar imagen
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
      items: [],
      slide: 0,
      sliding: null,
      file1: null,
      contador: 0,
    };
  },

  methods: {
    agregarImagen() {

      if (this.file1 === null) {
        console.log('Esta vacio')
      }else{
        if (this.contador === 3) {
          console.log("Numero maximo de imagenes alcanzado");
        } else {
          let tipo = /[.]/.exec(this.file1.name)
            ? /[^.]+$/.exec(this.file1.name)[0]
            : undefined;
          let dataRow = {
            N: this.contador + 1,
            Tamaño: this.file1.size / 1000 + " KB",
            Tipo: tipo,
          };
          this.items.push(dataRow);
          this.contador += 1;
          this.file1 = null;
        }
      }
    },

    eliminarImagen() {
      this.items.pop();
      this.contador -= 1
    },
  },
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

.contedor{
  position:absolute;
  top:0;
  left:0;
  bottom:0;
  right:0;
  height:100% !important;
  width:100%;
}
</style>
