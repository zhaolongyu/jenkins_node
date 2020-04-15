<template>
  <div
    class="hello"
    v-loading="loading"
  >
    <div style="margin:30px">
      排序：
      <el-radio-group v-model="reverse">
        <el-radio :label="true">倒序</el-radio>
        <el-radio :label="false">正序</el-radio>
      </el-radio-group>
    </div>
    <el-timeline :reverse="reverse">
      <el-timeline-item
        v-for="(coll, index) of columns"
        :key="index"
        :timestamp="coll.time"
        placement="top"
      >
        <el-card class="box-card headerAge">
          <div
            slot="header"
            class="clearfix"
          >
            <span>{{ coll.from }}</span>
            <el-button
              style="float: right; padding: 3px 5px"
              type="text"
              @click="handcard(coll)"
            >预览</el-button>
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              @click="handDelete(coll)"
              :disabled="disabled()"
            >删除</el-button>
          </div>
          <vue-markdown>{{ coll.messageContent }}</vue-markdown>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script lang='ts'>
import VueMarkdown from "vue-markdown";
import { Component, Vue, Watch } from "vue-property-decorator";

interface card {
  from: String;
  messageContent: String;
}
interface hello {
  config: String;
  data: any;
  header: String;
}
function page(targ: any) {
  return function(targ: any) {
  };
}
@page(Vue.bind(this))
class pages{}

@Component({
  components: {
    VueMarkdown
  }
})
export default class HelloWorld extends Vue {
  private columns: String[] = [];
  public loading: Boolean = false;
  public reverse: Boolean = true;

  mounted(): void {
    this.page<string>("df");
  }
  disabled(): Boolean {
    return localStorage.getItem("disabled") !== "admin";
  }
  handDelete(val: any): void {
    console.log(val);
    this.loading = true;
    (this as any).axios
      .post("/delete", { from: val.from })
      .then((res: hello) => {
        if (res.data.code === "200") {
          (this as any).$message({
            message: "保存成功",
            type: "success",
            duration: this.$store.state.duration
          });
          setTimeout(() => {
            this.page<string>("df");
          }, 500);
        }
      });
  }
  handcard(val: card) {
    console.log(val);
    this.$emit("handcard", val);
  }
  list(){
    console.log(1111111111);
  }
  page<T>(val: T) {
    this.columns = [];
    // eslint-disable-next-line no-unused-vars
    let param = { skip: 0, page: 3 };
    (<any>this).axios.get("/page", { params: {} }).then((res: hello): void => {
      this.columns = res.data.data;
      this.loading = false;
    });
  }
}

</script>
<style>
.headerAge {
  margin-bottom: 6px;
  overflow: hidden;
  height: 15em;
}
</style>
