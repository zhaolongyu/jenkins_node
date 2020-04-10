<template>
  <div class="hello" v-loading="loading">
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
          <div slot="header" class="clearfix">
            <span>{{ coll.from }}</span>
            <el-button
              style="float: right; padding: 3px 5px"
              type="text"
              @click="handcard(coll)"
              >预览</el-button
            >
            <el-button
              style="float: right; padding: 3px 0"
              type="text"
              @click="handDelete(coll)"
              :disabled="disabled"
              >删除</el-button
            >
          </div>
          <!-- <div
        style="height:100px"
        @click="handcard(coll)"
        v-html="coll.messageContent"
      >
        {{ converter.makeHtml(coll.messageContent) }}
      </div> -->
          <vue-markdown>{{ coll.messageContent }}</vue-markdown>
        </el-card>
      </el-timeline-item>
    </el-timeline>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";
export default {
  name: "HelloWorld",
  components: {
    VueMarkdown
  },
  data() {
    return {
      columns: [],
      loading: false,
      reverse: true // 排序
    };
  },
  computed: {
    disabled() {
      return localStorage.getItem("disabled") !== "admin";
    }
  },
  methods: {
    handDelete(val) {
      this.loading = true;
      this.axios.post("/delete", { from: val.from }).then(res => {
        if (res.data.code === "200") {
          this.$message({
            message: "保存成功",
            type: "success",
            duration: this.$store.state.duration
          });
          setTimeout(() => {
            this.page();
          }, 500);
        }
      });
    },
    handcard(val) {
      localStorage.setItem("disabled", "admin");
      console.log(11111111111111);
      this.$emit("handcard", val);
    },
    page() {
      this.columns = [];
      // eslint-disable-next-line no-unused-vars
      let param = { skip: 0, page: 3 };
      this.axios.get("/page", { params: {} }).then(res => {
        this.columns = res.data.data;
        this.loading = false;
      });
    }
  },

  mounted() {
    this.page();
  }
};
</script>
<style>
.hello .el-card {
  background: #f5f5f5;
}
</style>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
/* h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
} */
.headerAge {
  margin-bottom: 6px;
  overflow: hidden;
  height: 15em;
}
</style>
