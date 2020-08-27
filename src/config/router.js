import Vue from 'vue'
import VueRouter from 'vue-router'

/** IMPORT DE PÁGINAS GERAIS **/
import SignUp from '../components/user/auth/SignUp.vue'
import Home from '../components/home/Home.vue'
import ResetPassword from '../components/user/auth/ResetPassword.vue'


/** IMPORT DE PÁGINAS ADMS **/
import Department from '../components/admin/department/Department.vue'
import NewCategory from '../components/admin/category/NewCategory.vue'

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
     },
     {
          name: 'resetPassword',
          path: '/reset-password',
          component: ResetPassword
     },
     {
          name: 'department',
          path: '/new-department',
          component: Department
     },

     {
          name: 'newCategory',
          path: '/new-category',
          component: NewCategory
     }
]

const router = new VueRouter({
     mode: 'history',
     routes
})

export default router