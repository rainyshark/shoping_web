<template>
  <TopBar></TopBar>
  <Contain></Contain>
  <Shopcar></Shopcar>
  <MyFooter></MyFooter>
</template>

<script>
import MyFooter from "../components/MyFooter";
import Shopcar from "../components/Shopcar";
import Contain from "../components/Contain";
import TopBar from "../components/TopBar";
export default {
  name: "Shopingcar",
  components: {
    TopBar,
    Contain,
    Shopcar,
    MyFooter,
  },
};
</script>

<style>
</style>