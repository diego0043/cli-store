<template>
  <div>
    <b-navbar class="fixed-top" toggleable="lg" type="light" variant="white">
      <router-link to="/">
        <b-navbar-brand class="d-none d-xl-block d-xxl-block mb-1">
          <b-icon
            icon="house-door"
            class="mr-3 d-none d-xl-block d-xxl-block iconPrincipal"
          ></b-icon>
        </b-navbar-brand>
      </router-link>
      <label class="mt-2 mr-2 labelPrincipal d-none d-xl-block d-xxl-block"
        >Tienda CellPhone</label
      >

      <b-nav-form class="control-form ml-1">
        <b-icon icon="search" class="iconBuscar"></b-icon>
        <b-form-input
          v-model="busqueda"
          size="sm"
          class="mr-sm-2 rounded-pill input-buscar"
          placeholder="Busca en CellPhone"
        ></b-form-input>
        <button v-if="busqueda != ''" class="btn-elimina iconEliminar">
          <b-icon icon="x" class="mb-1"></b-icon>
        </button>
        <b-button
          size="sm"
          class="d-none d-lg-block d-xl-block d-xxl-block btn-style-search"
          type="submit"
          variant="light"
          >Buscar</b-button
        >
      </b-nav-form>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <router-link to="/" class="d-block">
              <b-button
                active
                class="mr-2 ml-1 mb-1 text-center btn-style"
                variant="light"
              >
                INICIO
              </b-button>
            </router-link>
            <b-button
              class="mr-2 ml-1 mb-1 text-center btn-style"
              variant="light"
            >
              ESTADISTICAS
            </b-button>

            <router-link to="/addProduct">
              <b-button
                class="mr-2 ml-1 mb-1 text-center btn-style"
                variant="light"
              >
                NUEVO PRODUCTO
              </b-button>
            </router-link>

            <b-button
              class="mr-2 ml-1 mb-1 mr-4 text-center btn-style"
              variant="light"
            >
              CARRITO
            </b-button>
          </b-navbar-nav>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      busqueda: "",
    };
  },
};
</script>

<style scoped>

:root {
  --gray: #6c757d;
  --gray-dark: #343a40;
  --dark: #343a40;
  --primary: #ffebc9;
  --secondary: ;
}

.control-form {
  position: relative;
}

.iconBuscar {
  position: absolute;
  top: 7px;
  left: 10px;
  color: var(--gray);
}

.input-buscar {
  text-indent: 25px;
  width: 19rem;
  margin-right: 10px;
  border: 1px solid var(--gray);
  color: var(--gray);
}

.input-buscar::placeholder {
  color: var(--gray);
}

.input-buscar:focus {
  box-shadow: none !important;
}

.iconEliminar {
  position: absolute;
  top: 5px;
  left: 71%;
  background: transparent;
  border: none;
  font-size: 1.2rem;
  color: var(--gray-dark);
}

.iconEliminar:hover {
  color: var(--dark);
}

.iconPrincipal {
  font-size: 2rem;
  margin-top: auto;
  margin-bottom: auto;
  color: var();
}

.labelPrincipal {
  font-weight: bold;
  font-size: 1.2rem;
  color: var(--gray);
}

.btn-style {
  background: white;
  color: var(--gray);
  border: none;
  border-bottom: 3px solid white;
}

.btn-style:hover {
  background: white;
  color: var(--gray-dark);
  border-bottom: 3px solid #d4b499;
}

.btn-style:focus {
  
  box-shadow: none;
}

.btn-style-search {
  background: white;
  color: var(--gray);
  border: 1px solid var(--gray);
  border-radius: 5px;
}

.btn-style-search:hover {
  background: gray;
  color: white;
  border: 1px solid var(--gray);
}

.btn-style-search:focus {
  box-shadow: none;
}


</style>
