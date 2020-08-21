import Vue from 'vue'
import VueRouter from 'vue-router'

/** IMPORT DE PÁGINAS GERAIS **/
import SignUp from '../components/user/auth/SignUp.vue'
import Home from '../components/home/Home.vue'
import ResetPassword from '../components/user/auth/ResetPassword.vue'

/** IMPORT DE PÁGINAS ADMS **/
import NewDepartment from '../components/admin/department/NewDepartment.vue'
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
          name: 'newDepartment',
          path: '/new-department',
          component: NewDepartment
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