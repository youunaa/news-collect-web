import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSidebarMenu from 'vue-sidebar-menu'
import store from './store'
import VueMaterial from 'vue-material'

Vue.config.productionTip = false
Vue.use(VueSidebarMenu)
Vue.use(VueMaterial)
function init() {
  const savedToken = sessionStorage.getItem('accessToken')
  // if (savedToken) {
  //     return true;
      // return store.dispatch('loginByToken', savedToken)
  // } else {
  //     return Promise.resolve()
  // }
}

// init().then(() => {
  window.vm = new Vue({
      router,
      store,
      render: h => h(App)
  }).$mount('#app')
// })
