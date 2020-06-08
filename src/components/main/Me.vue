<template>
  <div>
    <h2 class="subtitle">
      選択してください！
    </h2>
    <div>
      <img src="@/assets/rock.png" class="img" @click="select('rock')" />
      <img
        src="@/assets/scissors.png"
        class="img"
        @click="select('scissors')"
      />
      <img src="@/assets/paper.png" class="img" @click="select('paper')" />
    </div>
  </div>
</template>
<script>
export default {
  name: "Me",
  methods: {
    select(show) {
      this.$whim.assignState({ [this.$whim.accessUser.id]: show });
    }
  }
};
</script>
<style lang="scss" scoped>
.img {
  width: 150px;

  max-width: 30vw;
}
</style>
