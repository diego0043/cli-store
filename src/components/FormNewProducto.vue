<template>
  <div>
    <b-row>
      <h2 class="centrado mb-3">Ahora necesitamos tu información personal</h2>
    </b-row>

    <b-row>
      <!-- form personal -->

      <b-col>
        <b-img
          src="../assets/undraw_information_tab_ocka.svg"
          width="500"
          height="400"
        >
        </b-img>
      </b-col>

      <b-col>
        <b-row>
          <b-form-text class="text-labels mt-4">Titulo</b-form-text>
          <b-form-input
            v-model="titulo"
            aria-describedby="input-live-help input-live-feedback"
            trim
            class="input-formulario"
          ></b-form-input>
        </b-row>

        <b-row>
          <b-col class="mr-4">
            <b-row>
              <b-form-text class="text-labels mt-4">Nombre</b-form-text>
              <b-form-input
                v-model="nombre"
                aria-describedby="input-live-help input-live-feedback"
                trim
                class="input-formulario"
              ></b-form-input>
            </b-row>
          </b-col>

          <b-col>
            <b-row>
              <b-form-text class="text-labels mt-4">Contacto</b-form-text>
              <b-form-input
                v-model="contacto"
                aria-describedby="input-live-help input-live-feedback"
                trim
                class="input-formulario"
              ></b-form-input>
            </b-row>
          </b-col>
        </b-row>

        <b-row>
          <b-form-text class="text-labels mt-4">Descripción</b-form-text>
          <b-form-textarea
            v-model="descripcion"
            aria-describedby="input-live-help input-live-feedback"
            trim
            rows="5"
            class="inputs area-formulario"
          ></b-form-textarea>
        </b-row>

        <b-row class="">
          <b-button @click="datosPersona" class="mt-3 ml-auto" variant="light"
            >Siguiente<b-icon
              icon="arrow-right"
              aria-hidden="true"
              class="ml-2 mt-1"
            ></b-icon>
          </b-button>
        </b-row>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "FormNewProducto",

  data() {
    return {
      titulo: "",
      nombre: "",
      contacto: "",
      descripcion: "",
    };
  },
  methods: {

    datosPersona() {
      if(this.titulo === "" || this.nombre === "" || this.contacto === "" || this.descripcion === ""){
        this.$emit("setDatos", [], false);
      }else{
        let datos = [this.titulo, this.nombre,this.contacto, this.descripcion]
        this.$emit("getDatosPersona", datos, true);
      }
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
  margin-right: auto;
  margin-left: auto;
  font-weight: bold;
  font-size: 2.5rem;
  color: var(--gray);
}

.text-labels {
  font-size: 1rem;
  margin: 0;
  color: var(--gray) !important;
  font-weight: bold;
}

.input-formulario {
  border: none;
  border-bottom: 1px solid var(--gray);
  text-indent: 10px;
  color: var(--gray);
}

.input-formulario:hover {
  border: none;
  border-bottom: 1px solid #b4846c;
}

.input-formulario:focus {
  box-shadow: none;
}

.area-formulario {
  margin-top: 5px;
  border: 1px solid var(--gray);
  text-indent: 10px;
  color: var(--gray);
}

.area-formulario:hover {
  border: 1px solid #b4846c;
}

.area-formulario:focus {
  box-shadow: none;
}
</style>
