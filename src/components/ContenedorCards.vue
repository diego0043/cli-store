<template>
  <div class="mt-3 p-2">
    <b-row
      class="filtros-secundarios mb-3 d-none d-lg-block d-xl-block d-xxl-block"
    >
      <!-- precios -->
      <b-col
        cols="6"
        class="d-none d-lg-inline-block d-xl-inline-block d-xxl-inline-block"
      >
        <b-row>
          <b-col>
            <b-row>
              <b-col class="filtro">
                <b-row>
                  <b-col cols="4">
                    <label for="" class="labels-text mt-1">Desde</label>
                  </b-col>
                  <b-col cols="6">
                    <b-form-input
                      id="input-horizontal"
                      size="sm"
                      class="input-rango-precio"
                    ></b-form-input>
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
                  </b-col>
                </b-row>
              </b-col>

              <b-col class="filtro">
                <b-row>
                  <b-col cols="4">
                    <label for="" class="labels-text mt-1">Hasta</label>
                  </b-col>
                  <b-col cols="6">
                    <b-form-input
                      id="input-horizontal"
                      size="sm"
                      class="input-rango-precio"
                    ></b-form-input>
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
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>

      <!-- ordenar por: -->
      <b-col
        cols="6"
        class="
          final-filtro1
          d-none d-lg-inline-block d-xl-inline-block d-xxl-inline-block
        "
      >
        <b-row>
          <b-col>
            <b-row>
              <b-col>
                <b-row>
                  <b-col>
                    <label for="" class="labels-text mt-1">Ordenar por:</label>
                  </b-col>
                </b-row>
              </b-col>

              <b-col>
                <b-row>
                  <b-col>
                    <b-button size="sm" block>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-filter-left"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
                        />
                      </svg>
                      Precio</b-button
                    >
                  </b-col>
                </b-row>
              </b-col>

              <b-col>
                <b-row>
                  <b-col>
                    <b-button size="sm" block>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-calendar-event"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M11 6.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z"
                        />
                        <path
                          d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"
                        />
                      </svg>
                      Fecha</b-button
                    >
                  </b-col>
                </b-row>
              </b-col>
            </b-row>
          </b-col>
        </b-row>
      </b-col>
    </b-row>

    <b-row>
      <b-col
        class=""
        xl="3"
        xxl="3"
        sm="6"
        cols="6"
        v-for="(pub, key) in publicaciones"
        :key="key"
      >
        <!-- cards -->
        <b-container class="card-style mb-2">
          <b-row>
            <b-col>
              <b-img :src="pub.portada" class="mt-2 img-size"> </b-img>
            </b-col>
          </b-row>

          <!-- titulo -->
          <b-row>
            <b-col>
              <label for="" class="mt-2 titulo-card">{{
                pub.titulo
              }}</label>
            </b-col>
          </b-row>

          <!-- precio-->
          <b-row>
            <b-col>
              <label for="" class="label-precio"
                >${{ pub.precio }}</label
              >
            </b-col>
          </b-row>

          <b-row>
            <b-col>
              <b-button
                size="sm"
                variant="light"
                class="ml-2 btn-style"
                @click="obtenerUrlImagenes(publicaciones)"
                >Comprar</b-button
              >
            </b-col>
            <b-col>
              <label for="" class="time-publicacion">Hace 5 min</label>
            </b-col>
          </b-row>
        </b-container>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { db } from "../db";

export default {
  name: "ContenedorCards",
  data() {
    return {
      publicaciones: [],
      array_publicaciones: [],
      ret: null,
    };
  },

  firestore: {
    publicaciones: db.collection("publicaciones"),
  },

  methods: {},
};
</script>

<style scoped>
:root {
  --gray: #6c757d;
  --gray-dark: #343a40;
  --dark: #343a40;
  --primary: #ffebc9;
}

.card-style {
  height: 14.5rem;
  background-color: #f6f6f6;
  transition: all 0.5s ease-in-out;
  transform: scale(1);
}

.card-style:hover {
  height: 14.5rem;
  background-color: #f6f6f6;
  transition: all 0.5s ease-in-out;
  transform: scale(1.04);
  -webkit-box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.25);
  box-shadow: 5px 5px 10px 1px rgba(0, 0, 0, 0.25);
}

.img-size {
  max-width: 140px;
  max-height: 140px;
}

.titulo-card {
  color: var(--gray);
  font-weight: bold;
}

.label-precio {
  color: #b4846c;
}

.btn-style {
  background: #b4846c;
  color: white;
  border: none;
}

.btn-style:hover {
  background: #a8775f;
  color: white;
}

.btn-style:focus {
  background: #a8775f;
  color: white;
  box-shadow: none;
}

.time-publicacion {
  font-size: 12px;
  color: var(--gray);
}

.filtros-secundarios {
  height: 2rem;
}

.labels-text {
  color: var(--gray);
}

.final-filtro1 {
  border: none;
  border-left: 2px solid #b4846c;
}

.filtro {
  position: relative;
}

.icon {
  position: absolute;
  top: 7px;
  left: 20px;
}

.input-rango-precio {
  text-indent: 15px;
}
</style>
