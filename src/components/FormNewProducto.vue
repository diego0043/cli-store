<template>
  <div>
    <b-row>
      <h2 class="centrado mb-4">Ahora necesitamos tu información personal</h2>
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
            ></b-form-input>
            </b-row>
          </b-col>
        </b-row>

        <b-row class="mb-5">
           <b-form-text class="text-labels mt-4"
              >Descripción</b-form-text
            >
            <b-form-textarea
              aria-describedby="input-live-help input-live-feedback"
              trim
              rows="6"
              class="inputs"
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
      form: {
        email: "",
        name: "",
        food: null,
        checked: [],
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
      ],
      show: true,
    };
  },
};
</script>

<style scoped>
.centrado {
  margin-right: auto;
  margin-left: auto;
  font-weight: bold;
  font-size: 3.2rem;
}

.text-labels {
  font-size: 1rem;
  margin: 0;
}

</style>
