import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  mounted () {
    const storage = localStorage.getItem('simple-cart/store');
    if(storage) {
      this.$store.commit('cart/INIT', JSON.parse(storage).products)
    }   
  },
  render: h => h(App)
}).$mount('#app');
