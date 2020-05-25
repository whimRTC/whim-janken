<template>
  <div>
    <h2 class="subtitle">
      結果
    </h2>
    <div>
      <img
        v-if="show === 'rock'"
        src="@/assets/rock.png"
        width="150"
        height="150"
      />
      <img
        v-if="show === 'scissors'"
        src="@/assets/scissors.png"
        width="150"
        height="150"
      />
      <img
        v-if="show === 'paper'"
        src="@/assets/paper.png"
        width="150"
        height="150"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "Result",
  props: {
    displayUser: {
      type: Object,
      required: true
    }
  },
  computed: {
    show: function() {
      return this.$whim.state[this.displayUser.id];
    }
  }
};
</script>
<style></style>
