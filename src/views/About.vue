<template>
  <div>
    <el-row style="display: flex;justify-content: center">
      <div style="">
        <div class="el-radio-group-button">
          <h1>inlist</h1>
        </div>
        <el-menu
          background-color="#545c64"
          default-active="1-1"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span class="fontSizehome" slot="title">首页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                @click="handclick('1-1')"
                index="1-1"
                class="fontSizehome"
                >日志</el-menu-item
              >
              <el-menu-item
                @click="handclick('1-2')"
                index="1-2"
                class="fontSizehome"
                >编辑</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2" @click="handclick('2')">
            <i class="el-icon-menu"></i>
            <span class="fontSizehome" slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" @click="handclick('3')">
            <i class="el-icon-document"></i>
            <span class="fontSizehome" slot="title"> 导航三</span>
          </el-menu-item>
          <el-menu-item index="4" @click="handclick('4')">
            <i class="el-icon-setting"></i>
            <span class="fontSizehome" slot="title">导航四</span>
          </el-menu-item>
          <!-- <el-radio-group
            v-model="isCollapse"
            style="margin:20px 30px 20px 0px;"
          >
            <el-radio-button size="mini" :label="false">展开</el-radio-button>
            <el-radio-button size="mini" :label="true">收起</el-radio-button>
          </el-radio-group> -->
        </el-menu>
      </div>
      <div style="margin:0 20px;width:60%;">
        <div v-if="iskeepalive === '1-1'">
          <Header @handcard="handcard"></Header>
        </div>
        <div v-if="iskeepalive === '1-2'">
          <Home @handcardreturn="handcardreturn"> </Home>
        </div>
        <div v-if="iskeepalive === 'preview'">
          <Preview :preview="param" @handcardreturn="handcardreturn"></Preview>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script>
import Header from "components/HelloWorld.vue";
import Home from "components/home.vue";
import Preview from "components/preview.vue";
export default {
  components: {
    Header,
    Home,
    Preview
  },
  data() {
    return {
      isCollapse: false,
      iskeepalive: "1-1",
      param: ""
    };
  },
  methods: {
    handclick(val) {
      this.iskeepalive = val;
    },
    handcard(val) {
      this.iskeepalive = "preview";
      this.param = val;
    },
    handcardreturn() {
      this.iskeepalive = "1-1";
    }
  }
};
</script>

<style lang="scss" scoped>
.fontSizehome {
  font-size: 16px;
  color: #e6dede;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-radio-group-button {
  width: 100%;
  background: gray;
  line-height: 200px;
  height: 200px;
  text-align: center;
}
</style>
