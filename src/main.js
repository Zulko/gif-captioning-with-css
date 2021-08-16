import Vue from "vue";
import App from "./App.vue";
import "@picocss/pico/css/pico.css";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount("#app");
