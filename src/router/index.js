import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TodosView from '../views/TodosView.vue'
import StoreView from '@/views/StoreView.vue'
const routes = [
  {
    path:'/',
    component: HomeView 
  },
  {
    path:'/todos',
    component: TodosView 
  },


  {
    path:'/store',
    component: StoreView 
  },

];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router
