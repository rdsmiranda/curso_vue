// Este código se autogenera al instalar por primera vez vue-router. Se genera con la estructura de nuestra app.

import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Temperatura from '../views/Temperatura.vue'
import Personas from '../views/Personas.vue'
import PersonasEdit from '../views/PersonasEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/temperatura',
    name: 'temperatura',
    component: Temperatura
  },
  {
    path: '/personas',
    name: 'personas',
    component: Personas
  },
  {
    path: '/personas/edit',
    name: 'personas_edit',
    component: PersonasEdit
  },
  {
    path: '/personas/edit/:id',
    name: 'personas_editar',
    component: PersonasEdit
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
