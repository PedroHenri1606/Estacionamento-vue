import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import App from '../views/movimentacao/movimentacao-list.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Menu',
    component: App
  },
  {
    path: '/movimentacao/listar',
    name: 'movimentacao-listar',
    component: () => import(/* webpackChunkName: "list" */ '../views/movimentacao/movimentacao-list.vue')
  }, 
  {
    path: '/movimentacao/cadastrar',
    name: 'movimentacao-form',
    component: () => import(/* webpackChunkName: "form" */ '../views/movimentacao/movimentacao-form.vue')
  },  
  {
    path: '/condutor/listar',
    name: 'condutor-list',
    component: () => import(/* webpackChunkName: "list" */ '../views/condutor/condutor-list.vue')
  },  
  {
    path: '/condutor/cadastrar',
    name: 'condutor-form',
    component: () => import(/* webpackChunkName: "form" */ '../views/condutor/condutor-form.vue')
  },  
  {
    path: '/veiculo/listar',
    name: 'veiculo-list',
    component: () => import(/* webpackChunkName: "list" */ '../views/veiculo/veiculo-list.vue')
  },  
  {
    path: '/veiculo/cadastrar',
    name: 'veiculo-form',
    component: () => import(/* webpackChunkName: "form" */ '../views/veiculo/veiculo-form.vue')
  },  
  {
    path: '/marca/listar',
    name: 'marca-list',
    component: () => import(/* webpackChunkName: "list" */ '../views/marca/marca-list.vue')
  },  
  {
    path: '/marca/cadastrar',
    name: 'marca-form',
    component: () => import(/* webpackChunkName: "form" */ '../views/marca/marca-form.vue')
  },
  {
    path: '/configuracao/cadastrar',
    name: 'configuracao-form',
    component: () => import(/* webpackChunkName: "form" */ '../views/configuracao/configuracao-form.vue')
  }      
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
