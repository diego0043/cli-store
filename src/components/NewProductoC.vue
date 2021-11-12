<template>
  <div class="container-fluid contenedor">

    <!-- contenedor de los formularios, agregar imagenes etc -->
    <b-row>

      <b-col cols="2" class="vista-previa mr-auto shadow">
        <b-row>
          <b-col class="text-input mb-4 mt-3 text-labels"> Vista previa </b-col>
        </b-row>

        <b-row>
          <b-col>
            <b-card
              title="Card Title"
              img-src="https://picsum.photos/600/300/?image=25"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2 text-labels"
            >
              <b-card-text>
                Some quick example text to build on the card
              </b-card-text>

              <b-button href="#" class="btn-style">Go somewhere</b-button>
            </b-card>
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col>
            <b-button  variant="primary" class="mr-2 btn-style">Publicar</b-button>
            <b-button  variant="secondary btn-style">Cancelar</b-button>
          </b-col>
        </b-row>

        
      </b-col>

      <b-col class="overflow-auto main mt-4 shadow" cols="10">
        <div class="container-fluid">
          <!-- Titulo-->

          <b-row>
            <h2 class="mt-3 mb-4 h1 centrado">Agregemos unas imagenes</h2>
          </b-row>

          <b-row>
            <b-col>
              <img src="../assets/undraw_designer_re_5v95.svg" v-if="contador === 0" width="300" height="300" alt="">
            </b-col>
          </b-row>

          <!-- carousel y tabla-->
          <b-row>
            <!-- carousel-->
            <b-col class="ml-4 mt-3 mb-2 img-cont">
              <carousel v-bind:images="imgs" v-bind:url="img_urls"></carousel>
              <h6 class="text-danger mt-2 mr-5" v-if="contador === 4">
                ''Maximo 4 imagenes por anuncio''
              </h6>
            </b-col>

            <!-- table-->
            <b-col class="mb-2 mt-3 mr-4">
              <b-table selectable hover :items="items" class="mr-4"> </b-table>
            </b-col>
          </b-row>

          <!-- controles subir imagen -->
          <b-row class="mt-4">
            <b-col class="mb-2">
              <b-form-file
                v-if="contador != 4"
                accept="image/*"
                v-model="file1"
                :state="Boolean(file1)"
                placeholder="Ninguna imagen seleccionada"
                drop-placeholder="Suelta la imagen..."
                @change="onFileChange"
              ></b-form-file>
            </b-col>

            <b-col class="mb-2">
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

        <!-- formulario persona-->
        <div class="container-fluid mt-5">
          <form-new-product
            @setDatos="handleClick"
            class="centrado"
          ></form-new-product>
        </div>

        <!-- formulario telefono-->
        <div class="container-fluid mt-4">
          <form-especificaciones></form-especificaciones>
        </div>

        <div class="container-fluid mt-4">
          <b-row>
            <b-col>
              <b-img
                src="../assets/undraw_content_team_3epn.svg"
                width="500"
                height="600"
              ></b-img>
            </b-col>
          </b-row>
        </div>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import FormNewProduct from "../components/FormNewProducto.vue";
import FormEspecificaciones from "../components/FormEspecificaciones.vue";
export default {
  name: "NewProducto",
  components: {
    Carousel,
    FormNewProduct,
    FormEspecificaciones,
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
      img_url2: null,
      datos_persona: [],
      valores: "",
    };
  },

  methods: {
    mostrarText() {
      this.valores = this.datos_persona[0];
    },
    agregarImagen() {
      if (this.file1 === null) {
        console.log("Esta vacio");
      } else {
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
          this.imgs.push(this.file1);
          this.items.push(dataRow);
          this.img_urls.push(this.img_url2);
          this.contador += 1;
          this.file1 = null;
        }
      }
    },

    eliminarImagen() {
      if (this.contador === 0) {
        console.log("No hay archivos para eliminar");
      } else {
        this.items.pop();
        this.imgs.pop();
        this.img_urls.pop();
        this.contador -= 1;
      }
    },

    onFileChange(e) {
      const file = e.target.files[0];
      this.img_url2 = URL.createObjectURL(file);
      this.file1 = null;
    },

    handleClick(datos) {
      this.datos_persona.push(datos);
    },
  },
};
</script>

<style scoped>
.centrado {
  margin-left: auto;
  margin-right: auto;
  font-size: 2.5rem;
  font-weight: bold;
  color: #b4846c;
}

.text-labels{
  color: #b4846c;
  font-weight: bold;
}

.main {
  position: absolute;
  height: 85vh;
  scroll-behavior: smooth;
  left: 20%;
}

.vista-previa {
  position: absolute;
  top: 15%;
  left: 5%;
  height: 80vh;
  width: 100%;
  scroll-behavior: smooth;
  position: fixed;
}

.contenedor {
  position: relative;
}

.btn-style{
  background: transparent;
  color: #B4846C;
  border: 1px solid  #D4B499;
}



.btn-style:hover{
  background: #D4B499;
  border: 1px solid #D4B499;
  color: white;
}

.btn-style:focus{
  background: #D4B499 !important;
  box-shadow: none !important;
}
</style>
