<template>
  <div style="width:100%;min-width:1200px">
    <div style="display:inline-block;width:50%;">
      <!-- textarea之间不要有空格 -->
      <textarea v-model="content"></textarea>
    </div>
    <div style="display:inline-block;width:50%;">
      <div id="show-content"></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: "",
      converter: null
    };
  },
  watch: {
    content: "contentChanged"
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      var showdown = require("showdown");
      var converter = new showdown.Converter();
      this.converter = converter;
    },
    contentChanged() {
      var html = this.converter.makeHtml(this.content);
      document.getElementById("show-content").innerHTML = html;
    }
  }
};
</script>
<style>
#show-content {
  padding: 25px;
}
</style>
