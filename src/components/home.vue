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
    <!-- 生产 
    action="http://47.100.188.145:8090/update"
    -->
    <!--  
    action="http://localhost:3001/update"-->
    <el-upload
      class="upload-demo"
      drag
      action="http://47.100.188.145:8090/update"
      multiple
      :file-list="fileList"
      :on-success="success"
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
      if (data.from && data.messageContent) {
        this.axios.post("/pageStorage", data).then(res => {
          if (res.data.code === "200") {
            this.$message({
              message: "保存成功",
              type: "success",
              duration: this.$store.state.duration
            });
            this.$emit("handcardreturn");
          }
        });
      } else {
        this.$message({
          message: "标题或内容不能为空",
          type: "warning",
          duration: this.$store.state.duration
        });
      }
    },
    success() {
      this.$message({
        message: "保存成功",
        type: "success",
        duration: this.$store.state.duration
      });
      this.$emit("handcardreturn");
    }
  }
};
</script>

<style></style>
