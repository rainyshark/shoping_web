<template>
  <div class="Contain">
    <router-link to="/">
      <div class="Logal"></div>
    </router-link>
    <div class="Search">
      <input type="text" />
      <button>{{ sea }}</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Contain",
  setup() {
    let sea = ref("搜索");
    return { sea };
  },
};
</script>

<style scoped>
.Contain {
  width: 1200px;
  height: 105px;
  display: flex;
  justify-content: space-between;
}
.Logal {
  width: 120px;
  height: 50%;
  margin: 25px 45px;
  background: url(../assets/Logo.png) no-repeat;
}
.Search {
  width: 575px;
  height: 100%;
  line-height: 105px;
}
.Search input {
  vertical-align: middle;
  width: 500px;
  height: 30px;
  border: 1px solid #e1251b;
  outline: none;
}
.Search button {
  vertical-align: middle;
  width: 68px;
  height: 32px;
  border: 1.5px solid #e1251b;
  background-color: #e1251b;
  font-size: 18px;
  color: white;
  line-height: 32px;
}
.Search button:hover {
  cursor: pointer;
}
</style>