<template>
  <div>
    <el-row style="display: flex;">
      <div>
        <el-radio-group v-model="isCollapse" style="margin-bottom: 20px;">
          <el-radio-button size="mini" :label="false">展开</el-radio-button>
          <el-radio-button size="mini" :label="true">收起</el-radio-button>
        </el-radio-group>
        <el-menu
          default-active="1-1"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span slot="title">首页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item @click="handclick('1-1')" index="1-1"
                >推荐</el-menu-item
              >
              <el-menu-item @click="handclick('1-2')" index="1-2"
                >最新</el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2" @click="handclick('2')">
            <i class="el-icon-menu"></i>
            <span slot="title">导航二</span>
          </el-menu-item>
          <el-menu-item index="3" @click="handclick('3')">
            <i class="el-icon-document"></i>
            <span slot="title"> 导航三</span>
          </el-menu-item>
          <el-menu-item index="4" @click="handclick('4')">
            <i class="el-icon-setting"></i>
            <span slot="title">导航四</span>
          </el-menu-item>
        </el-menu>
      </div>
      <div style="margin:0 20px;width:60%;">
        <div v-if="iskeepalive === '1-1'">
          <Header @handcard="handcard"></Header>
        </div>
        <div v-if="iskeepalive === '1-2'">
          <Home></Home>
        </div>
        <div v-if="iskeepalive === 'preview'">
          <Preview :preview="param"></Preview>
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
    }
  }
};
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
