<template>
  <h1 class="G_Top">
    猜你喜欢
    <span
      ><a href="#">换一换</a>
      <i
        :style="{
          backgroundPositionX: position1 + 'px',
          backgroundPositionY: position2 + 'px',
        }"
      ></i>
    </span>
  </h1>
  <div class="Layout">
    <div class="L_Inner" v-for="(ite, index) in Guess_msg" :key="index">
      <img :src="ite.mypath" />
      <div class="L_Bot">
        <h4>{{ ite.mytitle }}</h4>
        <span>{{ ite.myprice }}</span>
      </div>
    </div>
    <div class="L_Inner" v-for="(ite, index) in Guess_msg" :key="index">
      <img :src="ite.mypath" />
      <div class="L_Bot" ref="Bot">
        <h4>{{ ite.mytitle }}</h4>
        <span>{{ ite.myprice }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "GuessLike",
  setup() {
    let position1 = ref(144);
    let position2 = ref(-107);
    let Guess_msg = ref([
      {
        mypath: "http://sph.atguigu.cn/img/like_01.png",
        mytitle: "阳光美包新款单肩包女包时尚子母包四件套女",
        myprice: "¥116.00",
      },
      {
        mypath: "http://sph.atguigu.cn/img/like_02.png",
        mytitle: "爱仕达 30CM炒锅不粘锅NWG8330E电磁炉炒",
        myprice: "¥236.00",
      },
      {
        mypath: "http://sph.atguigu.cn/img/like_03.png",
        mytitle: "捷波朗（jabra）BOOSI劲步",
        myprice: "¥566.00",
      },
    ]);
    return { position1, position2, Guess_msg };
  },
  mounted() {
    this.$refs.Bot[2].style.border = "none";
  },
};
</script>

<style scoped>
.G_Top {
  height: 48px;
  line-height: 48px;
  margin-top: 15px;
}
.G_Top span {
  float: right;
  font-weight: normal;
  font-size: 16px;
  height: 25px;
  line-height: 25px;
}
.G_Top span a {
  text-decoration: none;
  color: black;
}
.G_Top span a:hover {
  text-decoration: underline;
  color: skyblue;
}
.G_Top span i {
  display: inline-block;
  vertical-align: middle;
  width: 22px;
  height: 22px;
  background-image: url(../assets/icons.png);
}
.Layout {
  display: flex;
  justify-content: space-around;
  border: 1px solid #ddd;
  height: 240px;
}
.L_Inner {
  width: 143px;
  height: 100%;
}
.L_Bot {
  border-right: 1px solid #ddd;
}
.L_Inner h4 {
  margin-top: 10px;
  font-size: 12px;
  line-height: 20px;
  font-weight: normal;
}
.L_Inner span {
  display: inline-block;
  height: 30px;
  line-height: 30px;
  color: red;
}
</style>