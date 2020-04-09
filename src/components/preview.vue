<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>{{ preview.from }}</span>
      </div>
      <vue-markdown>
        {{ preview.messageContent }}
      </vue-markdown>
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
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style>
#show-content {
  padding: 25px;
}
</style>
