<template>
  <div>
    <button @click="cilckhand('home')">跳转home</button>
    <button @click="cilckhand('header')">跳转header</button>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  mounted() {},
  methods: {
    cilckhand(r) {
      this.axios.get("/about").then(() => {});
      switch (r) {
        case "home":
          this.$router.push({ name: "Home" });
          break;
        case "header":
          this.$router.push({ path: "/header" });
          break;
      }
    }
  }
};
</script>

<style></style>
