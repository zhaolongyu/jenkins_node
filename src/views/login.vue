<template>
  <div>
    <input
      type="text"
      v-model="data.name"
    />
    <br />
    <input
      type="text"
      v-model="data.password"
    />
    <br />
    <button @click="clickhand">登录</button>
    <button @click="registered">注册</button>
  </div>
</template>

<script lang='ts'>
import { Component, Vue } from "vue-property-decorator";
interface logins {
  config: String | Number;
  data: any;
  header: String | Number;
}
@Component
export default class Login extends Vue {
  public data: Object = {
    name: "",
    password: ""
  };
  private name: string = "";
  //生命周期
  created(): void {
    console.log("created");
  }
  clickhand(): void {
    (<any>this).axios.post("/login", this.data).then((res: logins): void => {
      localStorage.setItem("token", res.data.data);
      if (res.data.code === "200") {
        if (res.data.list === "admin") {
          localStorage.setItem("disabled", "admin");
        } else {
          localStorage.removeItem("disabled");
        }
        alert(res.data.msg);
        setTimeout(() => {
          (<any>this).$router.push({
            path: "/about"
          });
        }, 500);
      } else {
        alert(res.data.msg);
      }
    });
  }
  registered(): void {
    (this as any).axios.post("/regis", this.data).then(() => {
      // alert(res.data.msg);
    });
  }
}
</script>
