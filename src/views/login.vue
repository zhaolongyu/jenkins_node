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
        console.log(state);
        return state.stoken;
      },
      b: state => state.list
    })
  },
  mounted() {
    console.log(this, this.b);
    // console.log(this.$store.commit("modulesA/savelist"));
    // console.log(this.$store.dispatch("add"));
    this.savelist();
  },
  methods: {
    ...mapMutations(["savelist"]),
    clickhand() {
      this.axios.post("/api/login", this.data).then(res => {
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
      this.axios.post("/api/registered", this.data).then(() => {
        // alert(res.data.msg);
        // console.log("sssssssssssss");
      });
    }
  }
};
</script>

<style></style>
