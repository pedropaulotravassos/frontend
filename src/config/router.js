import Vue from 'vue'
import VueRouter from 'vue-router'

/** IMPORT DE PÁGINAS **/
import SignUp from '../components/user/auth/SignUp.vue'
import Home from '../components/home/Home.vue'

Vue.use(VueRouter)

const routes = [
     {
          name: 'home',
          path: '/',
          component: Home
     },
     {
          name: 'signUp',
          path: '/signUp',
          component: SignUp
     }
]

const router = new VueRouter({
     mode: 'history',
     routes
})

export default router