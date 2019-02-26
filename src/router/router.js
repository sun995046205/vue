import Vue from 'vue'
import Router from 'vue-router'
import index from "@/pages/index"
import meeting from "@/pages/meeting"
import server from "@/pages/server"
import find from "@/pages/find"
import mine from "@/pages/mine"
import register from "@/pages/register"
import login from "@/pages/login"


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/meeting',
      name: 'meeting',
      component: meeting
     },
    {
      path: '/server',
      name: 'server',
      component: server
    },
    {
      path: '/find',
      name: 'find',
      component: find
    },
    {
      path: '/mine',
      name: 'mine',
      component: mine
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
