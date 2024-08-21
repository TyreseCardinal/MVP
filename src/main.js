import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueCookies from 'vue-cookies';
import axios from 'axios';
import './styles/global.scss'; // Import global styles

Vue.config.productionTip = false;

Vue.use(VueCookies);
Vue.prototype.$http = axios.create({
  baseURL: 'http://your-api-url.com', // Replace with your API URL
  headers: {
    'Content-Type': 'application/json'
  }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
