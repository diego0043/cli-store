<template>
  <div>
    <b-row>
      <h2 class="centrado mb-3">Ahora necesitamos tu información personal</h2>
    </b-row>
    
    <b-row>

      <!-- form personal -->

      <b-col>
        <b-img src="../assets/undraw_information_tab_ocka.svg" width="500" height="500">
        </b-img>
      </b-col>

      <b-col>
        <b-row>
          <b-form-text class="text-labels mt-4"
            >Titulo</b-form-text
          >
          <b-form-input
            aria-describedby="input-live-help input-live-feedback"
            trim
            class=" input-formulario"
          ></b-form-input>
        </b-row>

        <b-row>
          <b-col class="mr-4">
            <b-row>
              <b-form-text class="text-labels mt-4"
              >Nombre</b-form-text
            >
            <b-form-input
              aria-describedby="input-live-help input-live-feedback"
              trim
              class="input-formulario"
            ></b-form-input>
            </b-row>
          </b-col>

          <b-col>
            <b-row>
              <b-form-text class="text-labels mt-4"
              >Contacto</b-form-text
            >
            <b-form-input

              aria-describedby="input-live-help input-live-feedback"
              trim
              class="input-formulario"
            ></b-form-input>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="mb-5">
           <b-form-text class="text-labels mt-4"
              >Descripción</b-form-text
            >
            <b-form-textarea 
            @click="handleClick"
              aria-describedby="input-live-help input-live-feedback"
              trim
              rows="5"
              class="inputs area-formulario"
            ></b-form-textarea>
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
      ejemplo: ['oaka','nsjsn'],
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      show: true,
    };
  },
  methods: {
    handleClick() {
      this.$emit("setDatos", this.ejemplo);
    }
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

.area-formulario{
  margin-top: 5px;
  border: 1px solid #B4846C ;
  text-indent: 10px;
  color: #B4846C;
}

.area-formulario:hover{
  border: 1px solid #B4846C;
}

.area-formulario:focus{
  border: 1px solid #B4846C;
  box-shadow: none;
}

</style>
