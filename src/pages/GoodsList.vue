<template>
  <TopBar></TopBar>
  <Contain></Contain>
  <Nav></Nav>
  <Goods></Goods>
  <MyFooter></MyFooter>
</template>

<script>
import TopBar from "../components/TopBar";
import Contain from "../components/Contain";
import Nav from "../components/Nav";
import Goods from "../components/Goods";
import MyFooter from "../components/MyFooter";

export default {
  name: "GoodsList",
  components: {
    TopBar,
    Contain,
    Nav,
    MyFooter,
    Goods,
  },
};
</script>

