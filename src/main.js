import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import './plugins/element.js'

Vue.config.productionTip = false

var config = {
  apiKey: 'AIzaSyBUviaECa8U9LvR11QeBoqtdVJiUY1C8Xc',
  authDomain: 'kawaii-login-c7863.firebaseapp.com',
  databaseURL: 'https://kawaii-login-c7863.firebaseio.com',
  projectId: 'kawaii-login-c7863',
  storageBucket: 'kawaii-login-c7863.appspot.com',
  messagingSenderId: '556677250879'
}
firebase.initializeApp(config)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
