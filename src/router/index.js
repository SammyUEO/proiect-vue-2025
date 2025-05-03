import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', name: 'Home', component: () => import('../views/Home.vue') },
  { path: '/dashboard', name: 'Dashboard', component: () => import('../views/Dashboard.vue') },
  { path: '/acoustic-guitars', name: 'AcousticGuitars', component: () => import('../components/AcousticGuitars.vue') },
  { path: '/bass-guitars', name: 'BassGuitars', component: () => import('../components/BassGuitars.vue') },
  { path: '/ukuleles', name: 'Ukuleles', component: () => import('../components/Ukuleles.vue') },
  { path: '/electric-guitars', name: 'ElectricGuitars', component: () => import('../components/ElectricGuitars.vue') },
  { path: '/sign-in', name: 'SignIn', component: () => import('../views/SignIn.vue') },
  { path: '/sign-up', name: 'SignUp', component: () => import('../views/SignUp.vue') },
  { path: '/reset-password', name: 'ResetPassword', component: () => import('../components/ResetPassword.vue') },
  { path: '/instruments', name: 'Instruments', component: () => import('../views/Instruments.vue') },
  { path: '/banner', name: 'Banner', component: () => import('../components/Banner.vue') },

];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
