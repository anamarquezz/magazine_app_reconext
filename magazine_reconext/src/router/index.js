import Vue from 'vue'
import VueRouter from 'vue-router'
import Dashboard from '../views/Dashboard.vue'  
import Secciones from '../views/Secciones.vue'
import Revista from '../views/Revista.vue' 
import Lideres from '../views/Lideres.vue'
import Quenoseteolvide from '../views/Quenoseteolvide.vue'
import Programas from '../views/Programas.vue'
import flipbook from '../views/flipbook.vue';


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'flipbook',
    component: flipbook,
    meta:{transition:'flip-y'}
  }, /*
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: Dashboard,
    meta:{transition:'flip-y'}
  }, 
  {
    path: '/secciones',
    name: 'Secciones',
    component: Secciones,
    meta:{transition:'flip-y'}
  },
  {
    path: '/revista',
    name: 'Revista',
    component: Revista,
    meta: { transition: 'overlay-left-full' },
  },
  {
    path: '/lideres',
    name: 'Lideres',
    component: Lideres,
   meta: { transition: 'flip-y' },
  },
  
  {
    path: '/quenoseteolvide',
    name: 'Quenoseteolvide',
    component: Quenoseteolvide,
    meta: { transition: 'flip-y' },
  },
  {
    path: '/programas',
    name: 'Programas',
    component: Programas,
   meta: { transition: 'flip-y' },
  },*/

  
]

const router = new VueRouter({
  routes
});

export default router
