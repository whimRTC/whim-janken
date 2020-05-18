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
    console.log("get event: " + event);
    if (event.data.room) {
      console.log("room: " + event.data.room);
      this.$store.commit("setRoom", event.data.room);
    } else if (event.data.users) {
      console.log("user: " + event.data.users);
      this.$store.commit("setUsers", event.data.users);
      this.$store.dispatch("setUserId", this.$route.query.userId);
      if (this.$route.query.displayUserId) {
        this.$store.dispatch(
          "setDisplayUserId",
          this.$route.query.displayUserId
        );
      }
    }
  },
  false
);

new Vue({
  store,
  render: h => h(App)
}).$mount("#app");
