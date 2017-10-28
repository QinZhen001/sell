// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import router from './router'
import App from './App.vue'

import 'common/stylus/index.styl'

Vue.config.productionTip = false

Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
