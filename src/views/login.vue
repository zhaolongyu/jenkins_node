<template>
  <div>
    <input type="text" v-model="data.name" />
    <br />
    <input type="text" v-model="data.password" />
    <br />
    <button @click="clickhand">登录</button>
    <!-- <button @click="registered">注册</button> -->
  </div>
</template>

<script>
// import { mapState, mapMutations } from "vuex";
import { createNamespacedHelpers } from "vuex";
const { mapMutations, mapState } = createNamespacedHelpers("modulesA");
export default {
  data() {
    return {
      data: {
        name: "",
        password: ""
      }
    };
  },
  computed: {
    ...mapState({
      a: state => {
        return state.stoken;
      },
      b: state => state.list
    })
  },
  mounted() {
    this.savelist();
  },
  methods: {
    ...mapMutations(["savelist"]),
    clickhand() {
      this.axios.post("/login", this.data).then(res => {
        localStorage.setItem("token", res.data.data);
        if (res.data.code === "200") {
          alert(res.data.msg);
          setTimeout(() => {
            this.$router.push({
              path: "/about"
            });
          }, 500);
        } else {
          alert(res.data.msg);
        }
      });
    },
    registered() {
      this.axios.post("/registered", this.data).then(() => {
        // alert(res.data.msg);
      });
    }
  }
};
</script>

<style></style>
