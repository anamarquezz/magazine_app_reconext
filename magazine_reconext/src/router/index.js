import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'  
import Secciones from '../views/Secciones.vue'
import Revista from '../views/Revista.vue' 


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard
  },
  {
    path: '/secciones',
    name: 'Secciones',
    component: Secciones,
    meta:{transition:'overlay-up-down'}
  },
  {
    path: '/revista',
    name: 'Revista',
    component: Revista,
    meta: { transition: 'overlay-left-full' },
  }   

  
]

const router = new VueRouter({
  routes
})

export default router
