<template>
  <div class="container">
    <a v-if="isAllSelected" class="btn" @click="reset">もう一度</a>
    <Me v-if="!isAccessUserSelected" class="me" />
  </div>
</template>

<script>
export default {
  name: "Main",
  components: {
    Me: () => import("@/components/main/Me")
  },
  computed: {
    users() {
      return this.$whim.users;
    },
    isAllSelected() {
      return (
        this.users.length > 0 &&
        this.users.every(user => this.$whim.state[user.id])
      );
    },
    isAccessUserSelected() {
      return !!this.$whim.state[this.$whim.accessUser.id];
    }
  },
  methods: {
    reset() {
      this.$whim.resetState();
    }
  }
};
</script>

<style lang="scss" scoped>
.btn {
  display: block;
  background-color: #ffc605;
  color: #fff;
  padding: 0.8em;
  text-decoration: none;
  border-radius: 4px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.12),
    0 3px 1px -2px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease-out;
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  width: 100px;
  text-align: center; /*一応BOX内の文字も中央寄せ*/

  &:hover {
    cursor: pointer;
    text-decoration: none;
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.12),
      0 3px 20px 0 rgba(0, 0, 0, 0.12), 0 5px 6px -2px rgba(0, 0, 0, 0.2);
  }
}

.me {
  position: absolute;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
  text-align: center;
  width: 500px;
}
</style>
