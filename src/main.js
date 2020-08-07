import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'

axios.defaults.baseURL = ''

new Vue({
  el: '#app',
  render: (h) => h(App),
})
