import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

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
    // put original actions here
  },
  getters: {
    accessUser: (state) => {
      return state.users.find(user => user.id === state.accessUserId);
    }

    // put original getters here
  },
  modules: {}
});
