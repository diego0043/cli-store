<template>
  <div>
    <b-navbar class="fixed-top" toggleable="lg" type="light" variant="light">
      
      <router-link to="/">
        <b-navbar-brand class="d-none d-xl-block d-xxl-block mb-1">
        <b-icon  icon = "house-door" class="mr-3 d-none d-xl-block d-xxl-block iconPrincipal text-success"></b-icon>
      </b-navbar-brand>
      </router-link>
      <label class="mt-1 mr-2 labelPrincipal d-none d-xl-block d-xxl-block">Tienda CellPhone</label>
      <b-nav-form class="control-form ml-1">
        <b-icon  icon = "search" class="iconBuscar mb-1"></b-icon>
        <b-form-input
          size="sm"
          class="mr-sm-2 rounded-pill input-buscar mb-1"
          placeholder="Search"
        ></b-form-input>
        <b-button size="sm" class="my-2 my-sm-0 mr-2 mb-1 d-none d-lg-block d-xl-block d-xxl-block" type="submit" variant="outline-success">Search</b-button>
      </b-nav-form>
      
      

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        
          
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-navbar-nav>
            <router-link to="/" class="d-block">
              <b-button class="mr-1 ml-1 mb-1 text-center" variant="outline-success">
                <b-icon  icon = "house-door"></b-icon>
                Inicio
            </b-button>
            </router-link>
            <b-button class="mr-1 ml-1 mb-1 text-center" variant="outline-success">
                <b-icon  icon = "graph-up"></b-icon>
                Estadisticas
            </b-button>
                
                <router-link to="/addProduct">
                  <b-button class="mr-1 ml-1 mb-1 text-center" variant="outline-success">
                    <b-icon  icon = "plus-circle"></b-icon>
                    Nuevo Producto
                  </b-button>
                </router-link> 
            
            <b-button class="mr-1 ml-1 mb-1 text-center" variant="outline-success">
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
export default {};
</script>

<style scoped>
 .control-form{
     position: relative;
 }
 .iconBuscar{
     position: absolute;
     left: 10px;
 }

 .input-buscar{
     text-indent: 22px;
     width: 19rem ;
     margin-right: 10px;

 }

.iconPrincipal{
  font-size: 2rem;
  margin-top: auto;
  margin-bottom: auto;
}

.labelPrincipal{
  font-weight: bold;
}

</style>
