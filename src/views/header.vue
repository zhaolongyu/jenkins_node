<template>
  <div>
    <input type="file" />
    <button @click="cilckhand('header')">跳转about</button>
  </div>
</template>

<script>
export default {
  methods: {
    cilckhand() {
      this.$router.push({
        path: "/about"
      });
    }
  }
};
</script>

<style></style>
