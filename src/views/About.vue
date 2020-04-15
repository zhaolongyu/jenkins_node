<template>
  <div>
    <el-row style="display: flex;justify-content: center">
      <div style="">
        <div class="el-radio-group-button">
          <h1 id="about">inlist</h1>
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
              <span
                class="fontSizehome"
                slot="title"
              >首页</span>
            </template>
            <el-menu-item-group>
              <el-menu-item
                @click="handclick('1-1')"
                index="1-1"
                class="fontSizehome"
              >日志</el-menu-item>
              <el-menu-item
                @click="handclick('1-2')"
                index="1-2"
                class="fontSizehome"
              >编辑</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item
            index="2"
            @click="handclick('2')"
          >
            <i class="el-icon-menu"></i>
            <span
              class="fontSizehome"
              slot="title"
            >导航二</span>
          </el-menu-item>
          <el-menu-item
            index="3"
            @click="handclick('3')"
          >
            <i class="el-icon-document"></i>
            <span
              class="fontSizehome"
              slot="title"
            > 导航三</span>
          </el-menu-item>
          <el-menu-item
            index="4"
            @click="handclick('4')"
          >
            <i class="el-icon-setting"></i>
            <span
              class="fontSizehome"
              slot="title"
            >导航四</span>
          </el-menu-item>
          <!-- <el-radio-group
            v-model="isCollapse"
            style="margin:20px 30px 20px 0px;"
          >
            <el-radio-button size="mini" :label="false">展开</el-radio-button>
            <el-radio-button size="mini" :label="true">收起</el-radio-button>
          </el-radio-group> -->
        </el-menu>
        <div class="LogoutHeader">
          <div class="LogoutMiddle">
            <div
              @click="clickLogout"
              style="margin-bottom:20px;"
            >
              <i class="el-icon-warning-outline"></i>
              登出
            </div>
            <div
              @click="clickTop"
              :class="LogoutMiddleTop1"
            >
              <a href="#about"><i class="el-icon-top"></i> 向上</a>
            </div>
          </div>
        </div>
      </div>
      <div style="margin:0 20px;width:60%;">
        <div v-if="iskeepalive === '1-1'">
          <Header @handcard="handcard"></Header>
        </div>
        <div v-if="iskeepalive === '1-2'">
          <Home @handcardreturn="handcardreturn"> </Home>
        </div>
        <div v-if="iskeepalive === 'previews'">
          <Preview
            :preview="param"
            @handcardreturn="handcardreturn"
          ></Preview>
        </div>
      </div>
    </el-row>
  </div>
</template>

<script lang='ts'>
import Header from "components/HelloWorld.vue";
import Home from "components/home.vue";
import Preview from "components/preview.vue";
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
interface card {
  from: String;
  messageContent: String;
}
interface LogoutMiddleTop {
  LogoutMiddleTop: Boolean;
}

@Component({
  components: {
    Header,
    Home,
    Preview
  }
})
export default class About extends Vue {
  private isCollapse: boolean = false;
  private iskeepalive: string = "1-1";
  private param:card = {from:"",messageContent:''};
  private LogoutMiddleTop1:LogoutMiddleTop = {
    LogoutMiddleTop: true
  };
  mounted() {
    let ref = this;
    window.onscroll = function() {
      function get_scrollTop_of_body(): any {
        var scrollTop: number | string = "";
        if (typeof window.pageYOffset != "undefined") {
          scrollTop = window.pageYOffset;
        } else if (
          typeof document.compatMode != "undefined" &&
          document.compatMode != "BackCompat"
        ) {
          scrollTop = document.documentElement.scrollTop;
        } else if (typeof document.body != "undefined") {
          scrollTop = document.body.scrollTop;
        }
        return scrollTop;
      }
      var myScroll: number = parseInt(get_scrollTop_of_body());
      if (myScroll > 500) {
        ref.$set(ref.LogoutMiddleTop1, "LogoutMiddleTop", false);
      } else {
        ref.$set(ref.LogoutMiddleTop1, "LogoutMiddleTop", true);
      }
    };
  }
  handclick(val: string): void {
    this.iskeepalive = val;
  }
  handcard(val:card ): void {
    this.iskeepalive = "previews";
    this.param = val;
  }
  handcardreturn(): void {
    this.iskeepalive = "1-1";
  }
  clickLogout(): void {
    localStorage.removeItem("token");
    (<any>this).$router.push({
      path: "/"
    });
  }
  clickTop() {}
}
</script>
<style scoped>
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
.LogoutHeader {
  width: 200px;
  height: 133px;
  background: gray;
  position: fixed;
  bottom: 111px;
}
.LogoutMiddle {
  font-size: 20px;
  font-weight: 700;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.LogoutMiddleTop {
  display: none;
}
</style>
