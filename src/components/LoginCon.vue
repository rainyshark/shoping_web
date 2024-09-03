<template>
  <div class="Login">
    <div class="LoginBox">
      <div class="InnerBox">
        <div class="I_Tag">
          <div class="I_L">
            <h3>{{ scanL }}</h3>
          </div>
          <div class="I_R">
            <h3>{{ userL }}</h3>
          </div>
        </div>
        <div class="LayOut">
          <div class="Enter_Form">
            <label v-for="(Box, index) in InBox" :key="index">
              <span
                :style="{
                  backgroundPositionX: position1[index] + 'px',
                  backgroundPositionY: position2[index] + 'px',
                }"
              ></span>
              <input :type="Box.type" />
            </label>
            <div class="I_Setting">
              <label> <input type="checkbox" />{{ autoL }}</label>
              <span
                ><a href="#">{{ forget }}</a></span
              >
            </div>
            <div class="I_B">
              <a href=""
                ><span>{{ L }}</span></a
              >
            </div>
          </div>
          <div class="Bott">
            <li v-for="(im, index) in Img" :key="index">
              <img :src="im" />
            </li>
            <div class="Boot_R">
              <router-link to="/register">{{ cl }}</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "LoginCon",
  setup() {
    let scanL = ref("扫码登陆");
    let userL = ref("用户登录");
    let InBox = ref([
      {
        ico: "",
        type: "text",
      },
      {
        ico: "",
        type: "password",
      },
    ]);
    let position1 = ref([-7, -69]);
    let position2 = ref([-199, -199]);
    let autoL = ref("自动登录");
    let forget = ref("忘记密码?");
    let L = ref("登录");
    let cl = ref("立即注册");
    let Img = ref([
      "http://sph-passport.atguigu.cn/img/qq.png",
      "http://sph-passport.atguigu.cn/img/sina.png",
      "http://sph-passport.atguigu.cn/img/ali.png",
      "http://sph-passport.atguigu.cn/img/weixin.png",
    ]);
    return {
      scanL,
      userL,
      InBox,
      position1,
      position2,
      autoL,
      forget,
      L,
      Img,
      cl,
    };
  },
};
</script>

<style scoped>
.Login {
  position: relative;
  width: 1200px;
  height: 486px;
  background-color: red;
  background: url(http://sph-passport.atguigu.cn/img/loginbg.png) no-repeat;
  background-size: 100% 100%;
}
.LoginBox {
  position: absolute;
  right: 20px;
  top: 21px;
  height: 400px;
  width: 400px;
  padding: 20px;
  border: 1px solid gray;
  background-color: #2625253b;
}
.InnerBox {
  border: 1px solid white;
  height: 400px;
  width: 400px;
}

.I_Tag {
  display: flex;
}
.I_L,
.I_R {
  width: 50%;
  height: 42px;
  cursor: pointer;
  border: 1px solid black;
}

.I_Tag h3 {
  margin: 9px 0;
  text-align: center;
}
.I_L {
  border-right: none;
  background-color: rgba(36, 35, 35, 0.231);
}
.I_R {
  color: red;
  background-color: #cbc1c16c;
  border-bottom: none;
}
.LayOut {
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 344px;
  height: 300px;
  padding: 28px;
  background-color: #cbc1c16c;
}
.Enter_Form {
  height: 180px;
  margin: 15px 0;
}
.Enter_Form label {
  display: block;
  border: 1px solid white;
  margin: 10px 0;
  height: 33px;
}
.Enter_Form label span {
  display: inline-block;
  cursor: pointer;
  background-image: url(../assets/icons.png);
  width: 45px;
  height: 100%;
  vertical-align: middle;
}
.Enter_Form label input {
  width: 82%;
  height: 21px;
  padding: 6px 8px;
  font-size: 18px;
  background-color: #dddddd54;
  border: none;
  outline: none;
  vertical-align: middle;
}
.I_Setting {
  height: 18px;
  margin-bottom: 25px;
}
.I_Setting label {
  display: inline-block;
  width: 100px;
  border: none;
  margin: 0;
  height: 18px;
}
.I_Setting label input {
  width: 15px;
}
.I_Setting input {
  vertical-align: center;
}
.I_Setting span {
  cursor: pointer;
}
.I_Setting span:last-child {
  float: right;
}
.I_Setting a {
  color: black;
  text-decoration: none;
}
.I_Setting a:hover {
  color: skyblue;
  text-decoration: underline;
}
.I_B {
  width: 100%;
  height: 37px;
  background-color: red;
  font-size: 20px;
  color: white;
  word-spacing: 4px;
}
.I_B a {
  display: inline-block;
  text-decoration: none;
  width: 100%;
  height: 100%;
  text-align: center;
  line-height: 37px;
  color: white;
}
.I_B span {
  display: inline-block;
  width: 20%;
  text-align: justify;
  text-align-last: justify;
}
.Bott {
  display: flex;
  align-items: center;
  width: 100%;
  height: 90px;
}
.Bott li {
  list-style: none;
  margin-right: 15px;
}
.Bott li img {
  border-radius: 35px;
  cursor: pointer;
}
.Boot_R {
  display: flex;
  justify-content: end;
  width: 140px;
}
.Boot_R a {
  color: black;
  text-decoration: none;
}
.Boot_R a:hover {
  color: skyblue;
  text-decoration: underline;
}
@media (min-height: 1900px) {
  .Enter_Form label input {
    width: 81.5%;
    height: 21px;
    padding: 6px 8px;
    font-size: 18px;
    border: none;
    outline: none;
    vertical-align: middle;
  }
}
</style>