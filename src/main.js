import Vue from 'vue'
import App from './App.vue'
import draw from './lib/index.js'
Vue.use(draw);
new Vue({
  el: '#app',
  render: h => h(App)
})
