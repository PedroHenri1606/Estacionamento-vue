import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '../views/movimentacao/movimentacao.list.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Menu',
    component: App
  },
  {
    path: '/movimentacao/listar',
    name: 'movimentacao.listar',
    component: () => import(/* webpackChunkName: "list" */ '../views/movimentacao/movimentacao.list.vue')
  }, 
  {
    path: '/movimentacao/cadastrar',
    name: 'movimentacao.form',
    component: () => import(/* webpackChunkName: "form" */ '../views/movimentacao/movimentacao.form.vue')
  }  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
