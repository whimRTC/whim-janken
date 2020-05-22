import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import whimClientVue from "whim-client-vue";

Vue.use(Vuex);

const store = new Vuex.Store();

Vue.config.productionTip = false;
Vue.use(whimClientVue, { store });

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
