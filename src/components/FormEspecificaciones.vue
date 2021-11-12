<template>
  <div>
    <b-row>
      <h2 class="centrado">Describe las caracteristicas de tu telefono</h2>
    </b-row>
    <b-row>
      <b-col class="mt-4">
        <b-row>
          <b-form-text class="text-labels mr-5 text-input">Estado</b-form-text>

          <b-form-radio-group
            v-model="selected"
            :options="options"
            class="mb-3 radio"
            style="color: #B4846C;"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-radio-group>
        </b-row>

        <b-row class="mt-2">
          <b-form-text class="text-labels text-input">Marca</b-form-text>
          <b-form-input
            aria-describedby="input-live-help input-live-feedback"
            trim
            class="input-formulario"
          ></b-form-input>
        </b-row>

        <b-row class="mt-3">
          <b-form-text class="text-labels text-input">Modelo</b-form-text>
          <b-form-input
            aria-describedby="input-live-help input-live-feedback"
            trim
            class="input-formulario"
          ></b-form-input>
        </b-row>

        <b-row class="mt-3">
          <b-form-text class="text-labels text-input">Pantalla (pulgadas)</b-form-text>
          <b-form-input
            aria-describedby="input-live-help input-live-feedback"
            trim
            class="input-formulario"
          ></b-form-input>
        </b-row>

        <b-row class="mt-3">
          <b-form-text class="text-labels text-input">Sistema</b-form-text>
          <b-form-select v-model="selected2" :options="options2" class="mb-3 list-formulario">
            <!-- This slot appears above the options from 'options' prop -->
            <template #first>
              <b-form-select-option :value="null" disabled
                >-- Por favor seleccione una opción--</b-form-select-option
              >
            </template>
          </b-form-select>
        </b-row>

        <b-row class="mb-2">
          <b-col>
            <b-row class="mr-2">
              <b-form-text class="text-labels text-inputs">Memoria interna</b-form-text>
              <b-form-input
                aria-describedby="input-live-help input-live-feedback"
                trim
                class="input-formulario"
              ></b-form-input>
            </b-row>
          </b-col>

          <b-col>
            <b-row class="mr-2">
              <b-form-text class="text-labels text-inputs">Memoria ram</b-form-text>
              <b-form-input
                aria-describedby="input-live-help input-live-feedback"
                trim
                class="input-formulario"
              ></b-form-input>
            </b-row>
          </b-col>

          <b-col>
            <b-row class="contenedor-input-precio">
              <b-form-text class="text-labels text-input">Precio</b-form-text>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-coin icon"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 9.511c.076.954.83 1.697 2.182 1.785V12h.6v-.709c1.4-.098 2.218-.846 2.218-1.932 0-.987-.626-1.496-1.745-1.76l-.473-.112V5.57c.6.068.982.396 1.074.85h1.052c-.076-.919-.864-1.638-2.126-1.716V4h-.6v.719c-1.195.117-2.01.836-2.01 1.853 0 .9.606 1.472 1.613 1.707l.397.098v2.034c-.615-.093-1.022-.43-1.114-.9H5.5zm2.177-2.166c-.59-.137-.91-.416-.91-.836 0-.47.345-.822.915-.925v1.76h-.005zm.692 1.193c.717.166 1.048.435 1.048.91 0 .542-.412.914-1.135.982V8.518l.087.02z"
                />
                <path
                  d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                />
                <path
                  d="M8 13.5a5.5 5.5 0 1 1 0-11 5.5 5.5 0 0 1 0 11zm0 .5A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"
                />
              </svg>
              <b-form-input
                aria-describedby="input-live-help input-live-feedback"
                class="input-precio input-formulario"
                trim
              ></b-form-input>
            </b-row>
          </b-col>
        </b-row>
      </b-col>

      <b-col>
        <b-img src="../assets/undraw_details_8k13.svg" width="400" height="460">
        </b-img>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  name: "FormEspecificaciones",
  props:{
      datos: Array 
      // Areglar la comunicacion de los componentes hijos con los padres
  },
  
  data() {
    return {
      options: [
        { item: "A", name: "Nuevo" },
        { item: "B", name: "Usado" },
      ],
      selected2: null,
      selected: null,
      options2: [
        { value: "A", text: "Android" },
        { value: "B", text: "Ios" },
        { value: "C", text: "Windows" },
      ],
    };
  },
};
</script>

<style scoped>
.centrado {
  margin-right: auto;
  margin-left: auto;
  font-weight: bold;
  font-size: 2.5rem;
  color: #B4846C;
}

.text-labels {
  font-size: 1rem;
  margin: 0;
}

.input-precio {
  text-indent: 25px !important;
}

.contedenor-input-precio {
  position: relative;
}

.icon {
  position: absolute;
  top: 60%;
  left: 10px;
}

.text-labels {
  font-size: 1rem;
  margin: 0;
  color: #B4846C !important;
  font-weight: bold;
}

.input-formulario{
  border: none ;
  border-bottom: 1px solid #B4846C ;
  text-indent: 10px;
  color: #B4846C;
}

.input-formulario:hover{
  border: none;
  border-bottom: 1px solid #B4846C;
}

.input-formulario:focus{
  border: none;
  border-bottom: 1px solid #B4846C;
  box-shadow: none;
}

.list-formulario{
  border: 1px solid #B4846C ;
  text-indent: 10px;
  color: #B4846C;
}

.list-formulario:hover{
  border: 1px solid #B4846C;
}

.list-formulario:focus{
  border: 1px solid #B4846C;
  box-shadow: none;
}

.radio:checked{
  background-color: #B4846C;
  border: 1px solid #B4846C;
}

</style>
