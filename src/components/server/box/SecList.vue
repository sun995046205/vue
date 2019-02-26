<template>
  <section>
    <h2 class="title">精选服务 <span>更多</span></h2>
    <dl v-for="n in title">
      <dt><img :src="n.img" alt=""></dt>
      <dd>
        <h1>{{n.name}}</h1>
        <p>{{n.company}}</p>
        <div>{{n.tips}}</div>
      </dd>
    </dl>
  </section>
</template>

<script>
    export default {
      name: "SecList",
      data() { //注意：data即使不需要传数据，也必须return,否则会报错
        return {
          message: "啦啦啦啦啦",
          title: [
            {
              "name": "金蝶KIS旗舰版电商ERP",
              "img": require("../../../assets/img/tip1.png"),
              "company": "深圳金蝶奇思科技有限公司",
              "tips": "￥10000-80000"
            },
            {
              "name": "国际物流仓储",
              "img": require("../../../assets/img/tip2.png"),
              "company": "天珅(上海)电子商务有限公司",
              "tips": "费用面议"
            },
            {
              "name": "全网数商微信商城系统",
              "img": require("../../../assets/img/tip3.png"),
              "company": "北京全网数商科技有限公司",
              "tips": "费用面议"
            },
            {
              "name": "网易七鱼云客服",
              "img": require("../../../assets/img/tip4.png"),
              "company": "杭州朗和科技有限公司",
              "tips": "费用面议"
            },
            {
              "name": "金蝶KIS旗舰版电商ERP",
              "img": require("../../../assets/img/tip1.png"),
              "company": "深圳金蝶奇思科技有限公司",
              "tips": "￥10000-80000"
            },
            {
              "name": "国际物流仓储",
              "img": require("../../../assets/img/tip2.png"),
              "company": "天珅(上海)电子商务有限公司",
              "tips": "费用面议"
            },
            {
              "name": "全网数商微信商城系统",
              "img": require("../../../assets/img/tip3.png"),
              "company": "北京全网数商科技有限公司",
              "tips": "费用面议"
            },
            {
              "name": "网易七鱼云客服",
              "img": require("../../../assets/img/tip4.png"),
              "company": "杭州朗和科技有限公司",
              "tips": "费用面议"
            }
          ]
        }
      }
    }
</script>

<style scoped>
  @import "../../../assets/css/server.css";

</style>
