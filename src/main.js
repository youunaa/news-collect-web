import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueSidebarMenu from 'vue-sidebar-menu'
import store from './store'

Vue.config.productionTip = false
Vue.prototype.$syscode = syscode
Vue.use(VueSidebarMenu)
function init() {
  // const savedToken = Cookies.get('accessToken')
  const savedToken = sessionStorage.getItem('accessToken')
  if (savedToken) {
      return store.dispatch('loginByToken', savedToken)
  } else {
      return Promise.resolve()
  }
}

init().then(() => {
  window.vm = new Vue({
      router,
      store,
      render: h => h(App)
  }).$mount('#app')
})
