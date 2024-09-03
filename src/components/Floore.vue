<template>
  <div class="Floors">
    <slot name="one"></slot>
    <slot name="two"></slot>
    <li class="F_Li" v-for="(it, index) in F_msg" :key="index">
      <em>|</em>
      {{ it }}
    </li>
  </div>
  <div class="F_Layout">
    <div class="F_L_Left">
      <div class="Left_top">
        <li v-for="(ite, index) in Left_li" :key="index">
          {{ ite }}
        </li>
      </div>
      <img src="http://sph.atguigu.cn/img/floor-1-1.png" alt="" />
    </div>
    <div class="F_L_Mid">
      <div class="L_Bar"></div>
      <div class="L_Top">
        <li></li>
        <li></li>
        <li></li>
      </div>
      <div class="R_Bar"></div>
    </div>
    <div class="F_L_Righ">
      <div class="Rigth_Inner" v-for="(item, index) in Right_img" :key="index">
        <img :src="item" />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Floore",
  setup() {
    let F_msg = ref([
      "热门",
      "大家电",
      "厨房电器",
      "应季电器",
      "空气/净水",
      "高端电器",
    ]);
    let Left_li = ref([
      "万补节能",
      "4K电视",
      "空气净化器",
      "IH电饭煲",
      "滚筒洗衣机",
      "电热水器",
    ]);
    let Right_img = ref([
      "http://sph.atguigu.cn/img/floor-1-2.png",
      "http://sph.atguigu.cn/img/floor-1-4.png",
      "http://sph.atguigu.cn/img/floor-1-5.png",
      "http://sph.atguigu.cn/img/floor-1-3.png",
      "http://sph.atguigu.cn/img/floor-1-6.png",
    ]);
    return { F_msg, Left_li, Right_img };
  },
};
</script>

<style scoped>
.Floors {
  height: 33px;
  margin-top: 15px;
  border-bottom: 1px solid #c81623;
}

.F_Li {
  float: right;
  list-style: none;
  font-size: 13px;
  line-height: 20px;
}
.F_Li em {
  margin: 0 10px;
  font-style: normal;
}
.F_Li:last-child em {
  display: none;
}
.F_Layout {
  display: flex;
  height: 360px;
  border-right: 1px solid #585757;
}
.F_L_Left {
  width: 210px;
  height: 100%;
  border-left: 1px solid #585757;
  border-bottom: 1px solid #585757;
  text-align: center;
}
.Left_top {
  display: grid;
  grid-template-columns: repeat(2, 105px);
  grid-template-rows: repeat(3, 26px);
  height: 80px;
  padding: 15px 0;
}
.Left_top li {
  margin: 0 10px;
  list-style: none;
  text-align: center;
  line-height: 26px;
  border-bottom: 1px solid rgb(133, 128, 128);
}
.F_L_Mid {
  position: relative;
  width: 314px;
  height: 100%;
  border: 1px solid #585757;
  background-image: url(http://sph.atguigu.cn/img/floor-1-b03.png);
}
.L_Bar,
.R_Bar {
  width: 20px;
  height: 40px;
  top: 160px;
  position: absolute;
  background-color: #585757;
}
.L_Bar {
  left: 2px;
}
.L_Top {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  margin-top: 2px;
  width: 100px;
  height: 25px;
  border-radius: 10px;
  background-color: #ddd;
}
.L_Top li {
  float: left;
  list-style: none;
  width: 14px;
  height: 14px;
  border-radius: 100%;
  background-color: #fff;
}
.R_Bar {
  right: 2px;
}
.F_L_Righ {
  display: grid;
  grid-template-columns: repeat(3, 225px);
  grid-template-rows: repeat(2, 181px);
}
.F_L_Righ .Rigth_Inner {
  border-bottom: 1px solid rgb(180, 177, 177);
}
.F_L_Righ .Rigth_Inner:nth-child(2) {
  border: 1px solid rgb(180, 177, 177);
  border-top: none;
  grid-row-start: 1;
  grid-row-end: 3;
  grid-column-start: 2;
  grid-column-end: 3;
}
</style>