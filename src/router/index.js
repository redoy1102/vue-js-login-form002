import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from "@/components/SignIn";
import Register from "@/components/Register";
import AllUsers from "@/components/AllUsers";
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'SignIn',
    component: SignIn
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/users',
    name: 'AllUsers',
    component: AllUsers
  }
]

const router = new VueRouter({
  routes
})

export default router
