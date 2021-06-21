import Vue from 'vue'
import App from './App.vue'
// Se importan los conponentes y plugins que se van a usar como store, router, etc

// Utilizando el cli instalar vuetify
// vue add vuetify
import vuetify from './plugins/vuetify'
// Utilizando el cli instalar vue-router
import router from './router'

Vue.config.productionTip = false

// Se inyectan los componentes y plugins en el núcleo
new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
