<template>
  <div class="container-fluid contenedor">
    <!-- contenedor de los formularios, agregar imagenes etc -->
    <b-row>
      <!-- vista previa anuncio -->
      <b-col cols="2" class="vista-previa mr-auto shadow">
        <b-row>
          <b-col class="text-input mb-4 mt-3 text-labels"
            ><p class="h6">{{ mensaje_vista_previa }}</p></b-col
          >
        </b-row>

        <b-row class="mt-5 ml-2" v-if="stateVistaPrevia === false">
          <b-img
            src="../assets/undraw_home_screen_4n7s.svg"
            width="200"
            height="200"
          >
          </b-img>
        </b-row>

        <b-row v-if="stateVistaPrevia != false">
          <b-col>
            <b-card
              :title="titulo_card"
              :img-src="src_card"
              img-alt="Image"
              img-top
              tag="article"
              style="max-width: 20rem"
              class="mb-2 text-labels card-style fs-6"
            >
              <b-card-text class="text-card">
                {{ precio_card }}
              </b-card-text>

              <b-button href="#" variant="light" class="btn-ver"
                >Mas información</b-button
              >
            </b-card>
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col cols="12">
            <b-button
              variant="primary"
              class="mr-2 btn-sel"
              v-on:click="subirAnuncio"
              >Publicar</b-button
            >
            <b-button variant="secondary btn-style">Cancelar</b-button>
          </b-col>

          <b-col class="mt-2" v-if="state_subida === true">
            <b-progress :value="25" variant="success"></b-progress>
          </b-col>
        </b-row>
      </b-col>

      <!-- contenido -->

      <b-col class="overflow-auto main mt-4" cols="10" v-if="stateImg != false">
        <div class="contenedor-principal" v-if="stateImg != false">
          <!-- Titulo-->

          <b-row>
            <h2 class="mt-3 h1 centrado">Agregemos unas imagenes</h2>
          </b-row>

          <b-row>
            <b-col>
              <img
                src="../assets/undraw_designer_re_5v95.svg"
                v-if="contador === 0"
                width="300"
                height="300"
                alt=""
              />
            </b-col>
          </b-row>

          <!-- carousel y tabla-->
          <b-row class="mb-5">
            <!-- carousel-->
            <b-col class="ml-4 mt-3 mb-2 img-cont">
              <carousel v-bind:images="imgs" v-bind:url="img_urls"></carousel>
              <h6 class="text-labels mt-3 mr-5 fw-bold" v-if="contador != 0">
                {{ contador }}/4
              </h6>
            </b-col>

            <!-- table-->
            <b-col class="mb-2 mt-3 mr-4">
              <b-table selectable hover :items="items" class="mr-4"> </b-table>
            </b-col>
          </b-row>

          <!-- controles subir imagen -->
          <b-row class="mt-3">
            <b-col class="mb-2">
              <b-form-file
                :disabled="contador === 4"
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
                variant="light"
                class="mr-3 btn-sel"
              >
                Subir imagen
              </b-button>

              <b-button
                @click="eliminarImagen()"
                variant="outline-danger"
                class="mr-5 btn-no-sel"
              >
                Eliminar imagen
              </b-button>
            </b-col>
          </b-row>
        </div>

        <!-- formulario persona-->
        <div v-if="contador != 0" class="container-fluid mt-5">
          <form-new-product
            @getDatosPersona="datosPersona"
            class="centrado"
          ></form-new-product>
        </div>

        <!-- formulario telefono-->
        <div class="container-fluid mt-4">
          <form-especificaciones
            @getDatosTel="datosTelefono"
            v-if="stateForm1 === true"
          ></form-especificaciones>
        </div>
      </b-col>

      <b-col v-if="stateSpinner != false" class="cargando">
        <b-spinner class="ml-spin mr-2" :variant="success"></b-spinner>
        <label for="" class="text-cargando text-card">Publicando anuncio</label>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Carousel from "./Carousel.vue";
import FormNewProduct from "../components/FormNewProducto.vue";
import FormEspecificaciones from "../components/FormEspecificaciones.vue";
import { db } from "../db";
import { storage } from "../db";

const ref = storage.ref();

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
      datos_persona: null,
      datos_telefono: null,
      valores: "",

      //mostrar forms y vista previa
      stateForm1: false,
      stateVistaPrevia: false,
      stateSpinner: false,
      stateImg: true,
      state_subida: false,

      //modelos para vista previa img
      mensaje_vista_previa:
        "Llena los campos para poder obtener una vista previa de tu anuncio",
      src_card: null,
      titulo_card: "",
      precio_card: "",
      img1: null,
      upload_value: 0,
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
            Tamaño: parseFloat(this.file1.size / 1048576).toFixed(2) + " MB",
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

    datosPersona(datos, state) {
      if (state === true) {
        this.stateForm1 = true;
        this.datos_persona = datos;
      } else {
        //tiramos el tooltip diciendo que faltan datos
      }
    },

    datosTelefono(datos, state) {
      if (state === true) {
        this.datos_telefono = datos;
        this.mensaje_vista_previa = "Vista Previa";
        this.src_card = this.img_urls[0];
        this.titulo_card = this.datos_persona[0];
        this.precio_card = this.datos_telefono[7];
        this.stateVistaPrevia = true;
      } else {
        //tiramos el tooltip diciendo que faltan datos
      }
    },

    subirAnuncio() {
      this.subirImagenes(this.imgs);
    },

    subirImagenes(lista_imgs) {
      const docRef = db.collection("publicaciones").doc();

      const metaData = { contentType: "img/jpeg" };
      this.img1 = [];
      const number_of_images = 1 / lista_imgs.length;
      let contador = 0;

      lista_imgs.forEach((element) => {
        const storageRef = ref
          .child("Imagenes/" + docRef.id + "/" + element.name)
          .put(element, metaData);
        storageRef.on(
          `state_changed`,
          (snapshot) => {
            this.upload_value =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(this.upload_value);

            if (this.upload_value == 100) {
              contador += number_of_images;
              console.log(contador);
            }
          },
          (error) => {
            console.log(error.message);
          },
          () => {
            this.upload_value = 100;
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              this.img1.push(url);
              console.log(this.img1);

              if (contador == 1) {
                const lista = {
                  titulo: this.datos_persona[0],
                  vendedor: this.datos_persona[1],
                  telefono: this.datos_persona[2],
                  descripcion: this.datos_persona[3],
                  estado: this.datos_telefono[0],
                  marca: this.datos_telefono[1],
                  modelo: this.datos_telefono[2],
                  pantalla: this.datos_telefono[3],
                  sistema: this.datos_telefono[4],
                  rom: this.datos_telefono[5],
                  ram: this.datos_telefono[6],
                  precio: this.datos_telefono[7],
                  id: docRef.id,
                  portada: this.img1[0],
                };

                docRef.set(lista);
                console.log("subida completa");
              }
            });
          }
        );
      });
    },

    syncDelay(milliseconds) {
      var start = new Date().getTime();
      var end = 0;
      while (end - start < milliseconds) {
        end = new Date().getTime();
      }
    },

    mensajeTerminado() {
      let append = false;
      let toaster = "b-toaster-top-right no-auto-hide";
      const h = this.$createElement;

      const vNodesTitle = h(
        "div",
        { class: ["d-flex", "flex-grow-1", "align-items-baseline", "mr-2"] },
        [
          h("strong", { class: "mr-2" }, "¡Felicidades!"),
          h("small", { class: "ml-auto text-italics" }, "Hace unos segundos"),
        ]
      );

      this.$bvToast.toast(`Tu anuncio se subio exitosamente`, {
        title: [vNodesTitle],
        toaster: toaster,
        solid: true,
        autoHideDelay: 10000,
        appendToast: append,
      });
    },
  },
};
</script>

<style scoped>
:root {
  --gray: #6c757d;
  --gray-dark: #343a40;
  --dark: #343a40;
  --primario: #d4b499;
}

.centrado {
  margin-left: auto;
  margin-right: auto;
  font-size: 2.5rem;
  font-weight: bold;
  color: var(--gray);
}

.text-labels {
  color: var(--gray-dark);
  text-align: center;
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

.btn-sel {
  background: #b4846c;
  color: white;
  border: none;
}

.btn-sel:hover {
  background: #a8775f;
  color: white;
}

.btn-sel:focus {
  background: #a8775f;
  color: white;
  box-shadow: none;
}

.card-style {
  border: 1px solid #d4b499;
}

.btn-ver {
  background: white;
  color: #7d5a50;
  border: 1px solid #7d5a50;
}

.btn-ver:hover {
  background: #7d5a50;
  border: 1px solid #7d5a50;
  color: white;
}

.btn-ver:focus {
  background: #d4b499 !important;
  box-shadow: none !important;
}

.text-card {
  color: var(--gray);
  font-weight: normal;
}

.contenedor-principal {
  width: 100%;
  margin-bottom: 10%;
}

.cargando {
  margin-top: 20%;
  margin-left: 8%;
  position: relative;
}

.spin {
  position: absolute;
  top: 10px;
}

.text-cargando {
  position: absolute;
  bottom: 1px;
}
</style>
