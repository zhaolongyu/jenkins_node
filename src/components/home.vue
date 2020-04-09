<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="标题：">
        <el-input style="width:50%" v-model="form.name"></el-input>
      </el-form-item>
    </el-form>
    <div id="editorElem"></div>
    <el-button @click="clickdeitor">保存</el-button>
    <hr />
    or
    <hr />
    <el-upload
      class="upload-demo"
      drag
      action="http://localhost:3001/update"
      multiple
      :file-list="fileList"
    >
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">
        只能上传.md文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>

<script>
import E from "wangeditor";
export default {
  data() {
    return {
      messageContent: "",
      form: {
        name: ""
      },
      fileList: []
    };
  },
  mounted() {
    var editor = new E("#editorElem");
    editor.customConfig.onchange = html => {
      this.messageContent = html;
    };
    editor.create();
  },
  methods: {
    clickdeitor() {
      let data = { messageContent: this.messageContent, from: this.form.name };
      this.axios.post("/pageStorage", data).then(() => {});
    }
  }
};
</script>

<style></style>
