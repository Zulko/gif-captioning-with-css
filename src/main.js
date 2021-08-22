import Vue from "vue";
import App from "./App.vue";
import "@picocss/pico/css/pico.css";
import VueSocialSharing from "vue-social-sharing";

Vue.use(VueSocialSharing);

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
