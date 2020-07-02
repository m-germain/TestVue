import Vue from "vue";
import App from "./App.vue";
import Buefy from 'buefy' ;
import 'buefy/dist/buefy.css';
import router from "./router";
import store from "./store";
import ApiService from './services/api.service';
import { TokenService } from './services/storage.service';

Vue.config.productionTip = false;

Vue.use(Buefy)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");


// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API)

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}