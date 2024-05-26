// src/router/index.ts
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import HomeView from '@/App.vue'
import TodosView from '@/components/TodoList.vue'

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: HomeView },
  {
    path: '/todos',
    name: 'Todos',
    component: TodosView,
    meta: { requiresAuth: true }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
