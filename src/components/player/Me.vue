<template>
  <div>
    <h2 class="subtitle">
      選択してください
    </h2>
    <div>
      <img
        src="@/assets/rock.png"
        width="150"
        height="150"
        @click="select('rock')"
      />
      <img
        src="@/assets/scissor.png"
        width="150"
        height="150"
        @click="select('scissor')"
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
      this.$store.dispatch("appState", {
        [this.$store.state.accessUserId]: show
      });
    }
  }
};
</script>
<style></style>
