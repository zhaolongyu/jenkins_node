<template>
  <div style="display:flex; margin:20px">
    <el-card
      class="box-card"
      style="flex:1"
    >
      <div
        slot="header"
        class="clearfix"
      >
        <span>{{ preview.from }}</span>
        <el-button
          style="float: right; padding: 3px 5px"
          type="text"
          @click="handcardreturn()"
        >返回</el-button>
      </div>
      <div id="markdown">
        <vue-markdown>
          {{ preview.messageContent }}
        </vue-markdown>
      </div>
    </el-card>
  </div>
</template>
<script lang='ts'>
import VueMarkdown from "vue-markdown";
import { Component, Vue, Prop } from "vue-property-decorator";
interface card {
  messageContent: String;
  from: String;
}

@Component({
  components: {
    VueMarkdown
  }
})
export default class preivews extends Vue {
  @Prop()
  preview:any


  handcardreturn(): void {
    this.$emit("handcardreturn");
  }
}
</script>
<style>
#show-content {
  padding: 25px;
}
</style>
