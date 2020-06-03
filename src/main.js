import Vue from "vue";
import App from "./App.vue";
import whimClientVue from "whim-client-vue";
import "whim-client-vue/dist/whim-client-vue.css";

Vue.config.productionTip = false;

// 通常はこれだけでよい
// Vue.use(whimClientVue);

// wh.imの開発
let targetOrigin;
if (window.location.search === "?env=dev") {
  targetOrigin = "https://localhost:3000";
} else if (window.location.search === "?env=stg") {
  targetOrigin = "https://stg.wh.im";
} else {
  targetOrigin = "https://wh.im";
}
Vue.use(whimClientVue, { targetOrigin });

new Vue({
  render: h => h(App)
}).$mount("#app");
