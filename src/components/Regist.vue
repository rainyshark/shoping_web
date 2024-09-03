<template>
  <div class="Register">
    <div class="InnerBox">
      <h1>欢迎注册</h1>
      <p>已有帐号? <router-link to="/login">登录</router-link></p>
      <div class="I_Layout">
        <label v-for="(ite, index) in msg" :key="index">
          <span>{{ ite.ti }}</span>
          <input ref="inp" :type="ite.ty" />
        </label>
        <label class="yan">
          <span>{{ ms.ti }}</span>
          <input :type="ms.ty" />
          <button>{{ ms.get }}</button>
        </label>
      </div>
      <div class="regi">注册</div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Regist",

  setup() {
    let myMsg = ref();
    let msg = ref([
      { ti: "用户名", ty: "text" },
      { ti: "手机号", ty: "text" },
      { ti: "密码", ty: "password" },
    ]);
    let ms = ref({ ti: "验证码", ty: "text", get: "获取验证码" });
    return { msg, ms };
  },
};
</script>

<style scoped>
.Register {
  width: 1200px;
  height: 486px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(../assets/airi.png);
  background-size: 100% 150%;
}
.InnerBox {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 380px;
  height: 380px;
  padding: 30px;
  background-color: #ffffffe0;
  border-radius: 20px;
}
.I_Layout {
  display: flex;
  flex-direction: column;
}
.I_Layout label {
  display: block;
  margin: 10px;
}
.I_Layout span {
  margin-right: 5px;
  display: inline-block;
  width: 50px;
  text-align: justify;
  text-align-last: justify;
}
.I_Layout input {
  padding: 5px;
}
.regi {
  width: 80%;
  margin: 35px 0;
  cursor: pointer;
  text-align: center;
  color: white;
  border-radius: 5px;
  line-height: 30px;
  background-color: red;
  height: 30px;
}
.yan input {
  width: 100px;
}
.yan button {
  margin-left: 5px;
  height: 27px;
  vertical-align: middles;
  background-color: #fff;
  border: 0.5px solid black;
}
</style>
