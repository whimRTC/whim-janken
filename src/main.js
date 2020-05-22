import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import whimClientVue from "whim-client-vue";

Vue.config.productionTip = false;
Vue.use(whimClientVue, { store });

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
