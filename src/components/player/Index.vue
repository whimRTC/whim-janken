<template>
  <div class="container">
    <Result v-if="isAllSelected" :displayUser="displayUser" />
    <h2 v-else-if="isAccessUserSelected && isSelected" class="subtitle">
      選択済み
    </h2>
    <h2 v-else-if="isAccessUserSelected" class="subtitle">
      選択中
    </h2>
  </div>
</template>
<script>
export default {
  name: "Player",
  components: {
    Result: () => import("@/components/player/Result")
  },
  props: {
    displayUser: {
      type: Object,
      required: true
    }
  }, // 表示されているUserの情報
  computed: {
    users() {
      return this.$whim.users;
    },
    isMe() {
      return this.$whim.accessUser.id === this.displayUser.id;
    },
    isAccessUserSelected() {
      return !!this.$whim.state[this.$whim.accessUser.id];
    },
    isSelected() {
      return !!this.$whim.state[this.displayUser.id];
    },
    isAllSelected() {
      return (
        this.users.length > 0 &&
        this.users.every(user => this.$whim.state[user.id])
      );
    }
  }
};
</script>
<style lang="scss" scoped>
.container {
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}
</style>
