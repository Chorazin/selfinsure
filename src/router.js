import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import firebase from 'firebase'

Vue.use(Router)

const router = new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },

    {
      path: '/add_card',
      name: 'add_card',
      meta: {
        requires_auth: true
      },
      component: () => import('./views/add_card.vue')
    },

    {
      path: '/edit_card/:card_slug',
      name: 'edit_card',
      meta: {
        requires_auth: true
      },
      component: () => import('./views/edit_card.vue')
    },

    {
      path: '/post_display',
      name: 'post_display',
      meta: {
        requires_auth: true
      },
      component: () => import('./views/post_display.vue')
    },

    {
      path: '/login_page',
      name: 'login_page',
      component: () => import('./views/login_page.vue')
    },

    {
      path: '/register_page',
      name: 'register_page',
      component: () => import('./views/register_page.vue')
    }
  ]
})

//set up route guards for pages that require authentication
router.beforeEach((to, from, next) => {
  //check to see if route requires auth
  if(to.matched.some(rec => rec.meta.requires_auth)) {
    //check auth state of users
    let user = firebase.auth().currentUser
    if(user) {
      //if we have a user signed in, move along to route
      next()
    } else {
      //no user signed in redirect to login_page
      next({
        name: 'login_page'
      })
    }
  } else {
    next()
  }
})


export default router
