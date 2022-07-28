import Vue from 'vue'
import App from './App.vue'
import router from './router'

import vuetify from './plugins/vuetify'

//Store
import { createPinia,PiniaVuePlugin } from 'pinia'
Vue.use(PiniaVuePlugin)
const pinia = createPinia()

import VueRouter from "vue-router";
Vue.use(VueRouter)


Vue.config.productionTip = false

new Vue({
  pinia,
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')


