import Vue from 'vue'
import App from './App.vue'
import store from './store'  //importing the index.js file

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
