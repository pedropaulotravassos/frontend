import Vue from 'vue'
import VueRouter from 'vue-router'

/** IMPORT DE PÁGINAS **/
import SignUp from '../components/user/auth/SignUp.vue'

Vue.use(VueRouter)

const routes = [
     {
          name: 'signUp',
          path: '/',
          component: SignUp
     }
]

const router = new VueRouter({
     mode: 'history',
     routes
})

export default router