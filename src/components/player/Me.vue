<template>
  <div>
    <h2 class="subtitle">
      選択してください！
    </h2>
    <div>
      <img
        src="@/assets/rock.png"
        width="150"
        height="150"
        @click="select('rock')"
      />
      <img
        src="@/assets/scissors.png"
        width="150"
        height="150"
        @click="select('scissors')"
      />
      <img
        src="@/assets/paper.png"
        width="150"
        height="150"
        @click="select('paper')"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "me",
  methods: {
    select(show) {
      this.$whim.assignState({
        [this.$whim.accessUser.id]: show
      });
    }
  }
};
</script>
<style></style>
