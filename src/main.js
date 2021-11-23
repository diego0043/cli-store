import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import { firestorePlugin } from 'vuefire'


//Agregando iconos de bootstrap
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import router from './router'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.use(firestorePlugin)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
