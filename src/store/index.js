import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    room: {}, // room information
    users: [], // information of users in the room
    user: {}, // information of user who play in this window
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
    setUser(state, userId) {
      const user = state.users.find(user => user.id === userId);
      state.user = user;
    }
  },
  actions: {
    // put original actions here
  },
  getters: {
    // put original getters here
  },
  modules: {}
});
