<template>
  <div>
    <div class="header">
      <div class="bar">0101</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      count: 5
    };
  },
  methods: {
    load() {
      this.count += 2;
    }
  }
};
</script>
<style lang="scss">
.header {
  border: 1px solid red;
  width: 300px;
  height: 300px;
  position: relative;
}

.bar {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
  width: 100px;
  height: 100px;
  background: green;
}
</style>
