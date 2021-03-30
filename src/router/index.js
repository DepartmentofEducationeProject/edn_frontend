import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Home from '../views/Home.vue'
import Test_1 from "../views/Test_1";
import Test_2 from "../views/Test_2";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/test1',
        name: 'Test1',
        component: Test_1,
      },
      {
        path: '/test2',
        name: 'Test2',
        component: Test_2,
      }
    ]
  },

]

const router = new VueRouter({
  routes
})

export default router
