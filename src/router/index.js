import Vue from 'vue';
import VueRouter from 'vue-router';
import ProfileView from '../views/ProfileView';
import homePageView from '../views/homePageView';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'homePage',
    component: homePageView
  },
  {
      path: '/Profile',
      name: 'Profile',
      component: ProfileView
  },
]

const router = new VueRouter({
  routes
})

export default router
