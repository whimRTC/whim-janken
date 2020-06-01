import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import whimClientVue from "whim-client-vue";
import "whim-client-vue/dist/whim-client-vue.css";

Vue.use(Vuex);
const store = new Vuex.Store({});

Vue.config.productionTip = false;
// TODO environment
Vue.use(whimClientVue, { store, environment: "staging" });

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
