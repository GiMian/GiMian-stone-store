import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch, faStoreAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Header from './components/header/header.vue';
import Footer from './components/footer/footer.vue';

// Add all icons to the library so you can use it in your page
library.add(faSearch, faStoreAlt);

Vue.config.productionTip = false;

Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.component('Header',Header);
Vue.component('Footer',Footer);
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
