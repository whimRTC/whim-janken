import Vue from "vue";
import App from "./App.vue";
import whimClientVue from "whim-client-vue";
import "whim-client-vue/dist/whim-client-vue.css";

Vue.config.productionTip = false;

// settings for debug
// let recaptchaScript = document.createElement("script");
// recaptchaScript.setAttribute("src", "http://localhost:8098");
// document.head.appendChild(recaptchaScript);

// 通常はこれだけでよい
// Vue.use(whimClientVue);

// wh.imの開発時に用いるの設定
let targetOrigin;

const params = new URLSearchParams(window.location.search);
if (params.get("env") === "dev") {
  targetOrigin = "http://localhost:3000";
} else if (params.get("env") === "stg") {
  targetOrigin = "https://stg.wh.im";
} else {
  targetOrigin = "https://wh.im";
}
Vue.use(whimClientVue, { targetOrigin });

new Vue({
  render: h => h(App)
}).$mount("#app");
