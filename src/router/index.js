import Vue from 'vue'
import VueRouter from 'vue-router'
import SignIn from "@/components/SignIn";
import Register from "@/components/Register";
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
  }
]

const router = new VueRouter({
  routes
})

export default router
