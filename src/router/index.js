import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home/index'
import service from '@/components/service/service'
import about from '@/components/about/about'

Vue.use(Router)

export default new Router({
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  mode: 'history',
  routes: [
    { path: '/', name: 'home', component: home },
    { path: '/service', name: 'service', component: service },
    { path: '/about', name: 'about', component: about }
  ]
})
