import Vue from 'vue'
import VueRouter from 'vue-router'

import HelloWorld from "./components/HelloWorld";
import Users from '@/views/Users'
import SignUp from '@/views/SignUp'
import SignIn from '@/views/SignIn'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      component: HelloWorld
    },
    {
      path: '/users',
      name: Users,
      component: Users
    },
    {
      path: '/sign-up',
      name: SignUp,
      component: SignUp
    },
    {
      path: '/sign-in',
      name: SignIn,
      component: SignIn
    }
  ]
})

export default router