<template>
  <div>
    <b-container
      display: none
      class="
        mt-4
        overflow-auto
        menuIzquierdo
        d-none d-xl-block d-xxl-block
        ml-4
      "
    >
      

      <b-row class="mb-2 mt-2">
        <b-col class="mt-2">
          Estado del telefono
        </b-col>
      </b-row>

      <b-row class="mb-3">
        <b-col>
          <b-form-select v-model="selected" :options="options"></b-form-select>
        </b-col>
      </b-row>

      
      <label for="marca" class="mb-1">Marca</label>
      <b-list-group class="mb-2" id="marca">
        <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="(filtro,key) in listaMarcas" :key="key">
          <b-form-checkbox>
            {{filtro}}
          </b-form-checkbox>
          <b-badge class="items"  pill>1</b-badge>
        </b-list-group-item>
      </b-list-group>

      <label for="sistema" class="mb-1 mt-2">Sistema</label>
      <b-list-group class="mb-2" id="sistema">
        <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="(filtro,key) in listaSistemas" :key="key">
          <b-form-checkbox>
            {{filtro}}
          </b-form-checkbox>
          <b-badge class="items" pill>1</b-badge>
        </b-list-group-item>
      </b-list-group>

      <label for="pantalla" class="mb-1 mt-2">Pantalla</label>
      <b-list-group class="mb-2" id="pantalla">
        <b-list-group-item class="d-flex justify-content-between align-items-center" v-for="(filtro,key) in listaPantallas" :key="key">
          <b-form-checkbox>
            {{filtro}}
          </b-form-checkbox>
          <b-badge class="items" pill>1</b-badge>
        </b-list-group-item>
      </b-list-group>

      <b-row>
        <b-col>
          <b-button  class="mb-1 mt-3 btn-style">
            Aplicar filtros
          </b-button>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      listaMarcas: ['Samsung', 'Huawei', 'Nokia', 'iPhone', 'Xiami'],
      listaSistemas: ['Android', 'Windows', 'ios'],
      listaPantallas: ['6','5.5','5'],
      selected: null,
        options: [
          { value: 'a', text: 'Nuevo' },
          { value: 'b', text: 'Usado'},
          { value: 'c', text: 'Ambos',selected:true}
        ]

      
    }
  },
};
</script>

<style scoped>
.menuIzquierdo {
  height: 82vh;
  width: 250px;
  scroll-behavior: smooth;
  position: fixed;
}

.items{
  background-color: #b4846c;
}

::-webkit-scrollbar{
  width: 5px;
  height: 40PX;
}

::-webkit-scrollbar-track{
  background: #F6F6F6;
}

::-webkit-scrollbar-thumb{
  background: #D4B499;
  border-radius: 20px;
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
</style>
