import Vue from 'vue'
import VueRouter from 'vue-router'

import Users from '@/views/Users'
import SignUp from '@/views/SignUp'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/users',
      name: Users,
      component: Users
    },
    {
      path: '/sign-up',
      name: SignUp,
      component: SignUp
    }
  ]
})

export default router