<template>
  <div>
    <div class="container-fluid mt-2">
       <!-- Titulo-->
    <b-row>
      <h1 class="mt-3 h1 centrado">Agregemos unas imagenes</h1>
    </b-row>

    <!-- carousel y svg-->
    <b-row>
      <b-col cols="8">
        <b-row class="container-fluid">

          <!-- carousel-->
          <b-col class="mt-3 pt-3 mb-2 ml-4">
            <carousel v-bind:images="imgs" v-bind:url="img_urls"></carousel>
          </b-col>

          <!-- table-->
          <b-col>
            <b-row>
              <b-col class="mt-2 ml-4 pt-4 mb-2">
                <b-table selectable hover :items="items" class="mr-4">
                   </b-table>
              </b-col>
              <b-col v-if="contador === 4" class="ml-4">
                <h6 class="text-danger">''Maximo 4 imagenes por anuncio''</h6>
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
          @change="onFileChange"
        ></b-form-file>
      </b-col>
      <b-col cols="5" class="mb-2">
        <b-button
          :disabled="contador === 4"
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
      imgs: [],
      img_urls: [],
      img_url2: null
    };
  },

  methods: {

    agregarImagen() {

      if (this.file1 === null) {
        console.log('Esta vacio')
      }else{
        if (this.contador === 4) {
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
          this.imgs.push(this.file1)
          this.items.push(dataRow);
          this.img_urls.push(this.img_url2)
          console.log(this.img_urls)
          this.contador += 1;
          this.file1 = null;
          
        }
      }
    },

    eliminarImagen() {
      this.items.pop();
      this.imgs.pop()
      this.contador -= 1
    },

    onFileChange(e) {

      const file = e.target.files[0];
      this.img_url2 = URL.createObjectURL(file);
    }

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
