<template>
  <div class="hello">
    <el-card class="box-card" v-for="(coll, index) of columns" :key="index">
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
      columns: []
    };
  },
  methods: {
    handDelete(val) {
      this.axios.post("/delete", { from: val.from }).then(res => {
        if (res.data.code === "200") {
          this.page();
        }
      });
    },
    handcard(val) {
      this.$emit("handcard", val);
    },
    page() {
      this.axios.get("/page", { params: { skip: 0, page: 10 } }).then(res => {
        this.columns = res.data.data;
      });
    }
  },

  mounted() {
    this.page();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
</style>
