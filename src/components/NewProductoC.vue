<template>
  <div class="container-fluid contenedor">
    <!-- contenedor de los formularios, agregar imagenes etc -->
    <b-row v-if="state_contenedor != false">
      <!-- contenido -->

      <b-col class="main mt-4" cols="12">
        <div class="contenedor-principal" v-if="stateImg != false">
          <!-- Titulo-->

          <b-row>
            <h2 class="mt-2 h1 centrado">Agregemos unas imagenes</h2>
          </b-row>

          <b-row class="">
            <b-col>
              <img
                src="../assets/undraw_designer_re_5v95.svg"
                v-if="contador === 0"
                width="300"
                height="300"
                alt=""
                class="mb-4"
              />
            </b-col>
          </b-row>

          <!-- carousel y tabla-->
          <b-row class="mb-2" v-if="contador != 0">
            <!-- carousel-->
            <b-col cols="12" sm="6" lg="6" xl="6" xxl="6" class="mt-3 mb-2">
              <b-row>
                <b-col>
                  <carousel
                    v-bind:images="imgs"
                    v-bind:url="img_urls"
                  ></carousel>
                </b-col>
              </b-row>
              <b-row>
                <b-col>
                  <h6 class="text-labels mt-3 fw-bold">{{ contador }}/4</h6>
                </b-col>
              </b-row>
            </b-col>

            <!-- table-->
            <b-col cols="12" sm="6" lg="6" xl="6" xxl="6" class="mb-2 mt-3">
              <b-table selectable hover :items="items" class="mr-4"> </b-table>
            </b-col>
          </b-row>

          <!-- controles subir imagen -->

          <b-row class="mt-3">
            <b-col class="mb-3" cols="12" lg="6" xl="6" xxl="6">
              <b-form-file
                :disabled="contador === 4"
                accept="image/*"
                v-model="file1"
                :state="Boolean(file1)"
                placeholder="Añadir imagenes"
                drop-placeholder="Suelta la imagen..."
                @change="onFileChange"
              ></b-form-file>
            </b-col>

            <b-col class="mb-2">
              <b-row>
                <b-col cols="12" sm="6" xl="6" lg="6" xxl="6" class="mb-3">
                  <b-button
                    block
                    :disabled="contador === 4"
                    @click="agregarImagen()"
                    variant="light"
                    class="mr-3 btn-sel"
                  >
                    Subir imagen
                  </b-button>
                </b-col>

                <b-col cols="12" sm="6" xl="6" lg="6" xxl="6" class="mb-3">
                  <b-button
                    block
                    @click="eliminarImagen()"
                    variant="outline-danger"
                    class="mr-5 btn-no-sel"
                  >
                    Eliminar imagen
                  </b-button>
                </b-col>
              </b-row>
            </b-col>
          </b-row>
        </div>

        <!-- formulario persona-->
        <div v-if="contador != 0" class="container-fluid mt-5" >
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

        <div v-if="stateVistaPrevia != false">
          <b-row class="mb-3">
            <b-col>
              <b-button
                v-b-modal.modal-1
                @click="subirAnuncio()"
                class="mr-2 mb-3 btn-sel"
              >
                Publicar
              </b-button>
              <b-button class="mb-3" variant="outline-secondary">
                Cancelar
              </b-button>
            </b-col>
          </b-row>

          <b-modal id="modal-1" hide-footer :title="this.datos_persona[0]">
            <b-row>
                <b-spinner v-if="state_subida != false" variant="success" label="Spinning"></b-spinner>
              <b-col>
                <label for="">{{ this.mensaje_vista_previa }}</label>
              </b-col>
              
            </b-row>
            <b-row>
              <b-col v-if="state_subida != false">
                <b-progress
                  :value="upload_value_bar"
                  :max="100"
                  class="mb-3"
                  variant="success"
                  :animated="true"
                ></b-progress>
              </b-col>
            </b-row>
          </b-modal>
        </div>
      </b-col>
    </b-row>

    <b-row v-if="state_contenedor === false">
      <b-col>
        <b-img
          src="../assets/undraw_well_done_i2wr.svg"
          width="400"
          height="500"
        ></b-img>
      </b-col>
      <b-col cols="7">
        <label for="" class="centrado mt-5"
          >Tu anuncio ya se encuentra activo, ve a la pagina principal para
          poder verlo</label
        >
        <router-link
          to="/"
          class="d-none d-sm-none d-md-none d-lg-block d-xl-block"
        >
          <b-button variant="light" class="btn-sel">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-house"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
              />
              <path
                fill-rule="evenodd"
                d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
              />
            </svg>
            Ir a inicio
          </b-button>
        </router-link>
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
      state_contenedor: true,

      //modelos para vista previa img
      mensaje_vista_previa: "Creando anuncio...",
      src_card: null,
      titulo_card: "",
      precio_card: "",
      img1: null,
      upload_value: 0,
      upload_value_bar: 0,
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
        this.src_card = this.img_urls[0];
        this.titulo_card = this.datos_persona[0];
        this.precio_card = this.datos_telefono[7];
        this.stateVistaPrevia = true;
      } else {
        //tiramos el tooltip diciendo que faltan datos
      }
    },

    subirAnuncio(lista_imgs = this.imgs) {
      this.state_subida = true;

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

            if (this.upload_value == 100) {
              contador += number_of_images;
              this.upload_value_bar += contador * 100;
            }
          },
          (error) => {
            console.log(error.message);
          },
          () => {
            this.upload_value = 100;
            storageRef.snapshot.ref.getDownloadURL().then((url) => {
              this.img1.push(url);

              if (contador == 1) {
                this.upload_value_bar = this.upload_value_bar - 10;
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
                this.state_subida = false;

                this.mensaje_vista_previa =
                  "¡Felicidades! " +
                  this.datos_persona[1] +
                  " tu anuncio ya esta activo";

                this.state_contenedor = false;
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
  width: 100%;
  scroll-behavior: smooth;
  left: 0%;
}

.inputfile + label {
  max-width: 80%;
  font-size: 1.25rem;
  font-weight: 700;
  text-overflow: ellipsis;
  white-space: nowrap;
  cursor: pointer;
  display: inline-block;
  overflow: hidden;
  padding: 0.625rem 1.25rem;
}

.inputfile + label svg {
  vertical-align: middle;
  fill: currentColor;
  margin-top: -0.25em;
  margin-right: 0.25em;
}

.iborrainputfile {
  font-size: 16px;
  font-weight: normal;
  font-family: "Lato";
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
  left: 0;
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
</style>
