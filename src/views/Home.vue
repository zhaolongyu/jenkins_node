<template>
  <div id="ddd" :class="[isActive ? bracn : green]">
    <!-- <qrcode :url="qrcodeUrl" :iconurl="iconurl"> </qrcode> -->
    <button @click="clickhandl">切换</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import qrcode from "vue_qrcodes";

export default {
  components: {
    // qrcode
  },
  props: {
    test: {
      type: String,
      required: false,
      default: () => {
        return "sync";
      }
    }
  },
  data() {
    return {
      isActive: false,
      bracn: "bracn",
      green: "green",
      qrcodeUrl: "jjjj",
      iconurl:
        "https://static.daojia.com/assets/project/tosimple-pic/LOGO_1576564983633.png"
    };
  },
  methods: {
    $_myGreatMixin_update: function() {},
    clickhandl() {
      this.$router.push({
        path: "/about"
      });
    }
  },
  mounted() {}
};
</script>
