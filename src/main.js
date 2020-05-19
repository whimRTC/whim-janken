import Vue from "vue";
import App from "./App.vue";
import store from "./store";

Vue.config.productionTip = false;

// init communication

// wh.im本体との通信を開始
window.parent.postMessage("connect", document.referrer);

// wh.imから room / users情報が送られてきたら登録
window.addEventListener(
  "message",
  event => {
    if (event.data.room) {
      store.commit("setRoom", event.data.room);
    }
    if (event.data.accessUserId) {
      store.commit("setAccessUserId", event.data.accessUserId);
    }
    if (event.data.users) {
      store.commit("setUsers", event.data.users);
    }
    if (event.data.appState) {
      console.log("hoge");
      console.log(event.data.appState);
      store.commit("setAppState", event.data.appState);
    }
  },
  false
);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
