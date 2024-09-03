<template>
  <Contain></Contain>
  <LoginCon></LoginCon>
  <MyFooter></MyFooter>
</template>

<script>
import Contain from "../components/Contain";
import LoginCon from "../components/LoginCon.vue";
import MyFooter from "../components/MyFooter";
export default {
  name: "Login",
  components: {
    Contain,
    MyFooter,
    LoginCon,
  },
};
</script>

<style>
</style>