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

      <!-- filtro para marcas -->
      <label for="marca" class="mb-1">Marca</label>

      <b-form-group   v-slot="{ ariaDescribedby }">
        <b-list-group-item v-for="(marca,key) in listaMarcas"  :key="key" class=" d-flex justify-content-between align-items-center ">
            <b-form-checkbox v-model="seleccion_marca" :value="marca" :aria-describedby="ariaDescribedby">
            <label for="" class="ml-3 texts">{{ marca }}</label>
            </b-form-checkbox>
            <b-badge class="items ml-3"  pill>4</b-badge>
        </b-list-group-item>
      </b-form-group>
       
      <label for="sistema" class="mb-1 mt-2">Sistema</label>
      <b-form-group   v-slot="{ ariaDescribedby }">
        <b-list-group-item v-for="(sistema,key) in listaSistemas"  :key="key" class=" d-flex justify-content-between align-items-center ">
            <b-form-checkbox v-model="seleccion_sistema" :value="sistema" :aria-describedby="ariaDescribedby">
            <label for="" class="ml-3 texts">{{ sistema }}</label>
            </b-form-checkbox>
            <b-badge class="items ml-3"  pill>4</b-badge>
        </b-list-group-item>
      </b-form-group>
      

      <label for="pantalla" class="mb-1 mt-2">Pantalla</label>
      <b-form-group   v-slot="{ ariaDescribedby }">
        <b-list-group-item v-for="(pantalla,key) in listaPantallas"  :key="key" class=" d-flex justify-content-between align-items-center ">
            <b-form-checkbox v-model="seleccion_pantalla" :value="pantalla" :aria-describedby="ariaDescribedby">
            <label for="" class="ml-3 texts">{{ pantalla }}</label>
            </b-form-checkbox>
            <b-badge class="items ml-3"  pill>4</b-badge>
        </b-list-group-item>
      </b-form-group>

      <b-row>
        <b-col>
          <b-button  @click="set_publicaciones_filtradas()" class="mb-1 mt-3 btn-style">
            Aplicar filtros
          </b-button>
        </b-col>
      </b-row>
      
    </b-container>
  </div>
</template>

<script>
import { db } from "../db";
export default {
  data() {
    return {
      listaMarcas: ["Samsung", "Nokia", "Huawei", "iPhone", "Xiaomi"],
      listaSistemas: ["Android", "Windows", "ios"],
      listaPantallas: ["6", "5.5", "5"],
      selected: null,
      options: [
        { value: "Nuevo", text: "Nuevo" },
        { value: "Usado", text: "Usado" },
        { value: "Ambos", text: "Ambos" },
      ],

      seleccion_marca: [],
      seleccion_sistema: [],
      seleccion_pantalla: [],

      publicaciones: [],
    };
  },

  firestore: {
    publicaciones: db.collection("publicaciones"),
  },

  methods: {
    set_publicaciones_filtradas() {
      const estado = this.selected
      const marca = this.seleccion_marca
      const sistema = this.seleccion_sistema
      const pantalla = this.seleccion_pantalla
      let publicaciones = this.publicaciones.slice()
      let data_filtrada = []

      //Comenzamos a filtrar por estado
      publicaciones.forEach(element => {

        //comprobamos que haya seleccionado un estado de telefono
        if(estado != 'Ambos'){

          //seleccionara solo nuevos o usados dependiendo del filtro que se selecciono
          if(element.estado === estado){

            //Verificamos si vamos a filtrar por marca o no
            if(marca.length != 0){

              //iteramos las marcas que selecciono el usuario hasta encontrar coincidencias
              marca.forEach( element_marca => {
              
              if(element.marca === element_marca){

                  //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
                  sistema.forEach( element_sistema => {

                      
                      if(element.sistema === element_sistema){
                        
                        //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                        pantalla.forEach( element_pantalla => {

                            //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                            if(element.pantalla === element_pantalla){

                              data_filtrada.push(element)

                            }else{
                              console.log('no se econtraron resultados para '+element_pantalla+' pulgadas')
                            }
                        })

                      }else{
                        console.log('no se econtraron resultados para sistema '+element_sistema)
                      }
                  })

              }else{
                console.log('no se encontraron resultados con la marca '+element.marca)
              }

              }) 

            }else{

              //verificamos si vamos a filtrar por sistema
              if(sistema.length != 0){
                //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
                  sistema.forEach( element_sistema => {

                      
                      if(element.sistema === element_sistema){
                        
                        //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                        pantalla.forEach( element_pantalla => {

                            //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                            if(element.pantalla === element_pantalla){

                              data_filtrada.push(element)

                            }else{
                              console.log('no se econtraron resultados para '+element_pantalla+' pulgadas')
                            }
                        })

                      }else{
                        console.log('no se econtraron resultados para sistema '+element_sistema)
                      }
                  })
              }else{
                //verificamos si vamos a filtrar por pantalla o no 
                if(pantalla.length != 0){
                  pantalla.forEach( element_pantalla => {

                      //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                      if(element.pantalla === element_pantalla){

                        data_filtrada.push(element)

                      }else{
                        console.log('no se econtraron resultados para '+element_pantalla+' pulgadas')
                      }
                  })
                }
              }
              
            }
                  
          }else{

            //filtrar solo por estado
            console.log('filarfr')
          }
        }else{

          //aca no importa si es nuevo o usado 
          if (estado === 'Ambos' || estado === null){

            marca.forEach( element_marca => {
              if(element.marca === element_marca){

                  //iteramos los sistemas que selecciono el usuario hasta encontrar coincidencias
                  sistema.forEach( element_sistema => {

                      
                      if(element.sistema === element_sistema){
                        
                        //iteramos tamaños de pantalla que selecciono el usuario hasta encontrar coincidencias
                        pantalla.forEach( element_pantalla => {

                            //si se encuentra una coincidencia se agrega el elemento al array de publicaciones filtradas
                            if(element.pantalla === element_pantalla){

                              data_filtrada.push(element)

                            }else{
                              console.log('no se econtraron resultados para '+element_pantalla+' pulgadas')
                            }
                        })

                      }else{
                        console.log('no se econtraron resultados para sistema '+element_sistema)
                      }
                  })

              }else{
                console.log('no se encontraron resultados con la marca '+element.marca)
              }

            })

          }
          
        }
      });

      this.publicaciones = []
      this.publicaciones = data_filtrada
      console.log(this.publicaciones)






      //estado = this.selected
    },
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

.items {
  background-color: #b4846c;
}

::-webkit-scrollbar {
  width: 5px;
  height: 40px;
}

::-webkit-scrollbar-track {
  background: #f6f6f6;
}

::-webkit-scrollbar-thumb {
  background: #d4b499;
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

.container-marcas{
  border: none;
  border-left: 1px solid #b4846c;
  border-right: 1px solid #b4846c;
}

.texts{
  font-size: 1rem;
  color: #6c757d;
}

</style>
