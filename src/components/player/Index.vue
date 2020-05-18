<template>
  <div>Player： {{ displayUser.name }}</div>
</template>
<script>
export default {
  name: "Player",
  props: ["displayUser"] // 表示されているUserの情報
};
</script>
<style lang="scss" scoped></style>
