<template>
  <div>
   
    <!-- 生产 
    action="http://47.100.188.145:8090/update"
    -->
    <!--  
    action="http://localhost:3001/update"
    -->
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
      <div
        class="el-upload__tip"
        slot="tip"
      >
        只能上传.md文件，且不超过500kb
      </div>
    </el-upload>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch } from "vue-property-decorator";
@Component({})
export default class home extends Vue {
  private messageContent: string = "";
  private form: any = {
    name: ""
  };
  private fileList: any[] = [];

  mounted(): void {
  }
  clickdeitor() {
    interface hello {
      config: Object;
      data: any;
      header: Object;
    }
    let data = { messageContent: this.messageContent, from: this.form.name };
    if (data.from && data.messageContent) {
      (this as any).axios.post("/pageStorage", data).then((res: hello) => {
        if (res.data.code === "200") {
          (this as any).$message({
            message: "保存成功",
            type: "success",
            duration: this.$store.state.duration
          });
          this.$emit("handcardreturn");
        }
      });
    } else {
      (this as any).$message({
        message: "标题或内容不能为空",
        type: "warning",
        duration: this.$store.state.duration
      });
    }
  }
  success(): void {
    (this as any).$message({
      message: "保存成功",
      type: "success",
      duration: this.$store.state.duration
    });
    this.$emit("handcardreturn");
  }
}
</script>

<style></style>
