<template>
  <div>
    <b-navbar class="fixed-top" toggleable="lg" type="light" variant="white">
      
      <router-link to="/">
        <b-navbar-brand class="d-none d-xl-block d-xxl-block mb-1">
        <b-icon  icon = "house-door" class="mr-3 d-none d-xl-block d-xxl-block iconPrincipal "></b-icon>
      </b-navbar-brand>
      </router-link>
      <label class="mt-1 mr-2 labelPrincipal d-none d-xl-block d-xxl-block">Tienda CellPhone</label>

      <b-nav-form class="control-form ml-1">
        <b-icon  icon = "search" class="iconBuscar mb-1"></b-icon>
        <b-form-input
          v-model="busqueda"
          size="sm"
          class="mr-sm-2 rounded-pill input-buscar"
          placeholder="Busca en CellPhone"
        ></b-form-input>
        <button v-if="busqueda != '' "  class="btn-elimina iconEliminar">
          <b-icon  icon = "x" class="mb-1"></b-icon>
        </button>
        <b-button size="sm" class=" d-none d-lg-block d-xl-block d-xxl-block btn-style" type="submit">Search</b-button>
      </b-nav-form>
      
      

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        
          
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <router-link to="/" class="d-block">
              <b-button class="mr-2 ml-1 mb-1 text-center btn-style">
                <b-icon  icon = "house-door"></b-icon>
                Inicio
            </b-button>
            </router-link>
            <b-button class="mr-2 ml-1 mb-1 text-center btn-style">
                <b-icon  icon = "graph-up"></b-icon>
                Estadisticas
            </b-button>
                
                <router-link to="/addProduct">
                  <b-button class="mr-2 ml-1 mb-1 text-center btn-style">
                    <b-icon  icon = "plus-circle"></b-icon>
                    Nuevo Producto
                  </b-button>
                </router-link> 
            
            <b-button class="mr-2 ml-1 mb-1 text-center btn-style">
                <b-icon  icon = "cart-dash"></b-icon>
                Carrito
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
      busqueda: ''
    }
  },
};
</script>

<style scoped>

 .control-form{
     position: relative;
 }

 .iconBuscar{
     position: absolute;
     top: 7px;
     left: 10px;
     color: #B4846C;
 }

 .input-buscar{
     text-indent: 25px;
     width: 19rem ;
     margin-right: 10px;
     border: 1px solid #D4B499;
     color: #B4846C
     

 }

 .input-buscar::placeholder{
   color: #D4B499;
 }

 .input-buscar:focus{
   box-shadow: none !important;
 }


 .iconEliminar{
   position: absolute;
   top: 5px;
   left: 71%;
   background: transparent;
   border: none;
   font-size: 1.2rem;
   color: #B4846C;
 }

 .iconEliminar:hover{
   color: #B4846C;
 }

.iconPrincipal{
  font-size: 2rem;
  margin-top: auto;
  margin-bottom: auto;
  color: #D4B499;
}

.labelPrincipal{
  font-weight: bold;
  color: #B4846C;
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
