<template>
  <nav>
    <h2 class="title">服务类型 <span>更多</span></h2>
    <div class="menu">
      <a v-for="n in title" href="">
        <img :src="n.img" alt=""><span>{{n.name}}</span>
      </a>
    </div>
  </nav>
</template>

<script>
    export default {
      name: "NavList",
      data() { //注意：data即使不需要传数据，也必须return,否则会报错
        return {
          message: "啦啦啦啦啦",
          title: [
            {
              "name": "运营外包",
              "img": require("../../../assets/img/server1.png")
            },
            {
              "name": "设计",
              "img": require("../../../assets/img/server2.png")
            },
            {
              "name": "仓储物流",
              "img": require("../../../assets/img/server3.png")
            },
            {
              "name": "跨境电商",
              "img": require("../../../assets/img/server4.png")
            },
            {
              "name": "商业软件",
              "img": require("../../../assets/img/server5.png")
            },
            {
              "name": "技术开发",
              "img": require("../../../assets/img/server6.png")
            },
            {
              "name": "营销策略",
              "img": require("../../../assets/img/server7.png")
            },
            {
              "name": "金融",
              "img": require("../../../assets/img/server8.png")
            }
          ]
        }
      }
    }
</script>

<style scoped>
  @import "../../../assets/css/server.css";

</style>
