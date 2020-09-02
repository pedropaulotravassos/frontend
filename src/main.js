import Vue from 'vue'
import App from './App.vue'
import 'font-awesome/css/font-awesome.css'

/**IMPORTANDO CONFIGS**/
import './global'
import './config/msg'
import './config/v-mask'
import './config/vueDropzone'
import router from './config/router'
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
