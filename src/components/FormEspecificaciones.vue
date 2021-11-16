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
            style="color: #343a40"
            value-field="item"
            text-field="name"
            disabled-field="notEnabled"
          ></b-form-radio-group>
        </b-row>

        <b-row class="mt-2">
          <b-form-text class="text-labels text-input">Marca</b-form-text>
          <b-form-input
            v-model="marca"
            aria-describedby="input-live-help input-live-feedback"
            trim
            class="input-formulario"
          ></b-form-input>
        </b-row>

        <b-row class="mt-3">
          <b-form-text class="text-labels text-input">Modelo</b-form-text>
          <b-form-input
            v-model="modelo"
            aria-describedby="input-live-help input-live-feedback"
            trim
            class="input-formulario"
          ></b-form-input>
        </b-row>

        <b-row class="mt-3">
          <b-form-text class="text-labels text-input"
            >Pantalla (pulgadas)</b-form-text
          >
          <b-form-input
            v-model="pantalla"
            aria-describedby="input-live-help input-live-feedback"
            trim
            class="input-formulario"
          ></b-form-input>
        </b-row>

        <b-row class="mt-3">
          <b-form-text class="text-labels text-input">Sistema</b-form-text>
          <b-form-select
            v-model="selected2"
            :options="options2"
            class="mb-3 list-formulario"
          >
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
              <b-form-text class="text-labels text-inputs"
                >Memoria interna</b-form-text
              >
              <b-form-input
                v-model="memoria_int"
                aria-describedby="input-live-help input-live-feedback"
                trim
                class="input-formulario"
              ></b-form-input>
            </b-row>
          </b-col>

          <b-col>
            <b-row class="mr-2">
              <b-form-text class="text-labels text-inputs"
                >Memoria ram</b-form-text
              >
              <b-form-input
                v-model="memoria_ram"
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
                class="bi bi-currency-dollar icon"
                viewBox="0 0 16 16"
              >
                <path
                  d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"
                />
              </svg>
              <b-form-input
                v-model="precio"
                aria-describedby="input-live-help input-live-feedback"
                class="input-precio input-formulario"
                trim
              ></b-form-input>
            </b-row>
          </b-col>
        </b-row>
      </b-col>

      <b-col>
        <b-img src="../assets/undraw_details_8k13.svg" width="400" height="400">
        </b-img>

        <b-row class="mb-1">
          <b-button @click="setEspecificaciones" class="ml-auto" variant="light"
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
  name: "FormEspecificaciones",
  props: {
    datos: Array,
    // Areglar la comunicacion de los componentes hijos con los padres
  },

  data() {
    return {
      options: [
        { item: "A", name: "Nuevo" },
        { item: "B", name: "Usado" },
      ],
      selected: "",
      marca: "",
      modelo: "",
      pantalla: "",
      selected2: "",
      options2: [
        { value: "A", text: "Android" },
        { value: "B", text: "Ios" },
        { value: "C", text: "Windows" },
      ],
      memoria_int: "",
      memoria_ram: "",
      precio: "",
    };
  },

  methods: {
    setEspecificaciones() {
      if (
        this.selected === "" ||
        this.marca === "" ||
        this.modelo === "" ||
        this.pantalla === "" ||
        this.selected2 === "" ||
        this.memoria_int === "" ||
        this.memoria_ram === "" ||
        this.precio === ""
      ) {
        this.$emit("getDatosTel", [], false);
      } else {
        let datos = [
          this.selected,
          this.marca,
          this.modelo,
          this.pantalla,
          this.selected2,
          this.memoria_int,
          this.memoria_ram,
          this.precio,
        ];
        this.$emit("getDatosTel", datos, true);
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
}

.input-precio {
  text-indent: 25px !important;
}

.contedenor-input-precio {
  position: relative;
}

.icon {
  position: absolute;
  top: 55%;
  left: 10px;
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

.list-formulario {
  border: 1px solid var(--gray);
  text-indent: 10px;
  font-weight: bold;
  color: var(--gray);
}

.list-formulario:hover {
  border: 1px solid #b4846c;
}

.list-formulario:focus {
  border: 1px solid #b4846c;
  box-shadow: none;
}

.radio {
  color: var(--gray);
}

.radio:checked {
  color: var(--gray);
  background-color: var(--gray);
  border: 1px solid var(--dark);
}
</style>
