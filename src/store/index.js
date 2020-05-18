import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// 情報の登録
const setAppState = appState => {
  window.parent.postMessage({ appState }, document.referrer);
};

export default new Vuex.Store({
  state: {
    room: {}, // room information
    users: [], // information of users in the room
    accessUserId: null, // information of user who play in this window
    appState: {}
  },
  mutations: {
    setRoom(state, room) {
      state.room = room;
      state.appState = room.appState;
    },
    setUsers(state, users) {
      console.log(users);
      state.users = users;
    },
    setAccessUserId(state, userId) {
      state.accessUserId = userId;
    }
  },
  actions: {
    updateAppState({ state }, obj) {
      let appState = state.room.appState || {};
      Object.keys(obj).forEach(key => {
        appState[key] = obj[key];
      });
      setAppState(appState);
    },
    resetAppState() {
      setAppState({});
    }
    // put original actions here
  },
  getters: {
    accessUser: state => {
      return state.users.find(user => user.id === state.accessUserId);
    }
    // put original getters here
  },
  modules: {}
});
