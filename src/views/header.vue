<template>
  <div>
    <div
      class="infinite-list"
      v-infinite-scroll="load"
      style="height:400px;overflow:auto"
    >
      <div v-for="i in count" :key="i" class="infinite-list-item">{{ i }}</div>
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
