<template>
  <section>
    <div v-for="n in title" class="sectop">
      <img :src="n.img" alt="">
      {{n.name}}
       <span>{{n.id}} </span>
    </div>
  </section>
</template>

<script>
    export default {
        name: "MineList",
      data(){
          return{
            message: "啦啦啦啦啦",
            title:[
              {
                "img":require("../../../assets/img/mine-1.png"),
                "name":"申请易邦号",
                "id":"未认证 >"
              },
              {
                "img":require("../../../assets/img/mine-2.png"),
                "name":"积分任务",
                "id":" >"
              },
              {
                "img":require("../../../assets/img/mine-3.png"),
                "name":"积分商城",
                "id":" >"
              },
              {
                "img":require("../../../assets/img/mine-4.png"),
                "name":"我的订单",
                "id":" >"
              },
              {
                "img":require("../../../assets/img/mine-5.png"),
                "name":"我要爆料",
                "id":" >"
              },
              {
                "img":require("../../../assets/img/mine-1.png"),
                "name":"意见反馈",
                "id":" >"
              },
              {
                "img":require("../../../assets/img/mine-2.png"),
                "name":"设置",
                "id":" >"
              }
            ]
          }
      }
    }
</script>

<style scoped>
  @import "../../../assets/css/mine.css";
</style>
