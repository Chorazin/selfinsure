import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
import db from '@/firebase/init_db.js'

Vue.filter('snips', val => {
  if(!val || typeof(val) !== 'string') return ''
  val = val.slice(0, 200)
  val = `${val} ......`
  return val
})

Vue.config.productionTip = false

let app = ''

firebase.auth().onAuthStateChanged((user) => {
  if(!app) {
    app = new Vue({
      router,
      render: h => h(App)
    }).$mount('#app')
  }
})
