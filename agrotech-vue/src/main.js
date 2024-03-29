import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import * as svgicon from 'vue-svgicon';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
