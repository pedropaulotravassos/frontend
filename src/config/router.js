import Vue from 'vue'
import VueRouter from 'vue-router'

/** IMPORT DE PÁGINAS GERAIS **/
import SignUp from '../components/user/auth/SignUp.vue'
import Home from '../components/home/Home.vue'
import ResetPassword from '../components/user/auth/ResetPassword.vue'


/** IMPORT DE PÁGINAS ADMS **/
import AdminMenu from '../components/admin/AdminMenu.vue'
import Department from '../components/admin/department/Department.vue'
import Category from '../components/admin/category/Category.vue'
import NewProduct from '../components/admin/product/NewProd.vue'

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
          path: '/admin/department',
          component: Department
     },

     {
          name: 'category',
          path: '/admin/category',
          component: Category
     },
     {
          name: 'admin',
          path: '/admin',
          component: AdminMenu
     },
     {
          name: 'admin',
          path: '/admin/product',
          component: NewProduct
     }
]

const router = new VueRouter({
     mode: 'history',
     routes
})

export default router