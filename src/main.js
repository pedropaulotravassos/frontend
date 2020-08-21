import Vue from 'vue'
import App from './App.vue'
import 'font-awesome/css/font-awesome.css'

/**IMPORTANDO CONFIGS**/
import './global'
import './config/msg'
import './config/v-mask'
import './config/vuetify'
import router from './config/router'


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
