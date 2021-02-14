import Vue from 'vue'
import App from './App.vue'
import helpers from '@/helpers'

// Bulma

require('@/assets/main.scss');
require('vue2-animate/dist/vue2-animate.min.css');

// Debugger
// require('@/assets/debug.css');

Vue.config.productionTip = false
Vue.use(helpers)
export const bus = new Vue();

new Vue({
  render: h => h(App),
}).$mount('#app')
