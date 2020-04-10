<template>
  <div style="display:flex; margin:20px">
    <el-card class="box-card" style="flex:1">
      <div slot="header" class="clearfix">
        <span>{{ preview.from }}</span>
        <el-button
          style="float: right; padding: 3px 5px"
          type="text"
          @click="handcardreturn()"
          >返回</el-button
        >
      </div>
      <div id="markdown">
        <vue-markdown>
          {{ preview.messageContent }}
        </vue-markdown>
      </div>
    </el-card>
  </div>
</template>
<script>
import VueMarkdown from "vue-markdown";
export default {
  components: {
    VueMarkdown
  },
  props: {
    preview: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      list: []
    };
  },
  mounted() {},
  methods: {
    handcardreturn() {
      this.$emit("handcardreturn");
    }
  }
};
</script>
<style>
#show-content {
  padding: 25px;
}
</style>
