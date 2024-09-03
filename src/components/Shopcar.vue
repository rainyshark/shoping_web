<template>
  <div class="Shopingcar">
    <h3>{{ T_msg }}</h3>
    <div class="My_Lis">
      <div class="Top_Li">
        <label class="flex2"><input type="checkbox" />{{ L_O }}</label>
        <li class="flex2">{{ L_T }}</li>
        <li v-for="(item, index) in L_M" :key="index" class="flex1">
          {{ item }}
        </li>
      </div>
      <div class="Under_Li">
        <div class="Un_L">
          <label><input type="checkbox" />{{ L_O }}</label>
          <li v-for="(item, index) in L_B" :key="index">
            {{ item }}
          </li>
        </div>
        <div class="Un_R">
          <div class="Chosed">{{ L_R_C }}</div>
          <div class="Sum">
            <li class="Sun_p">{{ Sum_p }}<span>￥0</span></li>
            <li class="Promotion">{{ Promotion }}<span>￥0</span></li>
          </div>
          <button class="R_B">
            <a href="#">{{ op }}</a>
          </button>
        </div>
      </div>
    </div>
    <div class="Nav_Tag">
      <a href="#" v-for="(item, index) in My_Link" :key="index">{{ item }}</a>
    </div>
    <div class="Layout">
      <div class="L_Bar"></div>
      <li v-for="(item, index) in Lay_Li" :key="index">
        <div><img :src="item.mypath" alt="" /></div>
        <span>{{ item.mytitle }}</span>
        <p>{{ item.myprice }}</p>
        <button>
          <i></i>
          <span>
            {{ item.addin }}
          </span>
        </button>
      </li>
      <div class="R_Bar"></div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Shopcar",
  setup() {
    let T_msg = ref("全部商品");
    let L_O = ref("全部");
    let L_T = ref("商品");
    let L_M = ref(["单价(元)", "数量", "小计(元)", "操作"]);
    let L_B = ref(["删除选中商品", "移到我的收藏", "清除下柜商品"]);
    let L_R_C = ref("已选择0件商品");
    let Sum_p = ref("总价:");
    let Promotion = ref("促销:");
    let op = ref("结算");
    let My_Link = ref(["猜你喜欢", "特惠换购"]);
    let Lay_Li = ref([
      {
        mypath: "http://sph-cart.atguigu.cn/img/like1.png",
        mytitle: "Apple苹果iPhone 6s (A1699)",
        myprice: "$29.00",
        addin: "加入购物车",
      },
      {
        mypath: "http://sph-cart.atguigu.cn/img/like2.png",
        mytitle: "Apple苹果iPhone 6s (A1699)",
        myprice: "$29.00",
        addin: "加入购物车",
      },
      {
        mypath: "http://sph-cart.atguigu.cn/img/like3.png",
        mytitle: "Apple苹果iPhone 6s (A1699)",
        myprice: "$29.00",
        addin: "加入购物车",
      },
      {
        mypath: "http://sph-cart.atguigu.cn/img/like4.png",
        mytitle: "Apple苹果iPhone 6s (A1699)",
        myprice: "$29.00",
        addin: "加入购物车",
      },
    ]);
    return {
      T_msg,
      L_O,
      L_T,
      L_M,
      L_B,
      L_R_C,
      Sum_p,
      Promotion,
      op,
      My_Link,
      Lay_Li,
    };
  },
};
</script>

<style scoped>
.flex1 {
  flex: 1;
}
.flex2 {
  flex: 2;
}
.Shopingcar {
  width: 1200px;
  height: 500px;
  color: #434343;
}
.Top_Li {
  display: flex;
  background-color: #f5f5f5;
  border: 1px solid gray;
  height: 21px;
  padding: 10px;
}
.Top_Li label {
  display: block;
}
.Top_Li li {
  list-style: none;
}
.Top_Li li:last-child {
  margin-right: 20px;
  text-align: right;
}
.Under_Li {
  display: flex;
  justify-content: space-between;
  height: 55.2px;
  border: 1px solid gray;
  border-top: none;
}
.Un_L {
  display: flex;
  align-items: center;
}
.Un_L label {
  width: 60px;
  display: inline-block;
  padding: 10px;
  margin-right: 80px;
}
.Un_L li {
  list-style: none;
  float: left;
  padding: 10px;
}
.Un_R {
  display: flex;
  list-style: none;
}
.Chosed {
  line-height: 56px;
  margin-right: 65px;
}
.Sum {
  width: 220px;
}
.Sun_p span {
  color: red;
  font-size: 18px;
}
.R_B {
  width: 96px;
  background-color: red;
  border: none;
}
.R_B a {
  display: inline-block;
  text-decoration: none;
  color: white;
  font-size: 18px;
  line-height: 56px;
  width: 100%;
  height: 100%;
  border: none;
}
.R_B a:hover {
  text-decoration: underline;
}
.Nav_Tag {
  height: 41px;
  margin-bottom: 18px;
  background-color: #f1f1f1;
  border: 1px solid gray;
  border-top: none;
}
.Nav_Tag a {
  display: inline-block;
  text-decoration: none;
  height: 100%;
  width: 88px;
  height: 41px;
  text-align: center;
  line-height: 41px;
  color: white;
  background-color: red;
}

.Nav_Tag a:first-child:hover {
  background-color: #fff;
}
.Nav_Tag a:last-child {
  margin-left: 10px;
  background-color: transparent;
  color: #434343;
}
.Nav_Tag a:hover {
  color: skyblue;
}
.Layout {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 321px;
}
.L_Bar,
.R_Bar {
  position: absolute;
  width: 22px;
  height: 40px;
  top: 140.5px;
  background-color: #ddd;
}
.L_Bar {
  left: 0;
}
.R_Bar {
  right: 0;
}
.Layout li {
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  border: 1px dashed gray;
  margin: 2px;
  width: 184px;
  height: 279px;
  padding: 20px;
}
.Layout li span {
  width: 201px;
  height: 30px;
  line-height: 30px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.Layout li p {
  color: red;
  height: 30px;
  line-height: 30px;
  font-size: 18px;
}
.Layout li button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 135px;
  height: 32px;
  text-align: center;
  line-height: 32px;
}
.Layout li button span {
  width: 70px;
  vertical-align: middle;
}
.Layout li button i {
  display: inline-block;
  vertical-align: middle;
  width: 20px;
  height: 20px;
  background-image: url(http://sph-cart.atguigu.cn/img/icons.png);
  background-position: 139px -130.5px;
}
</style>