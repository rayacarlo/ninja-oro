import Vue from 'vue';
import VueRouter from 'vue-router';

// Importamos componente que tendrá su propia página
import NinjaOro from '../components/NinjaOro.vue';  

Vue.use(VueRouter);    // instalamos explícitamente el router

export default new VueRouter({
  routes: [
    {
      path: '/', 
      component: NinjaOro
    },
  ]
})