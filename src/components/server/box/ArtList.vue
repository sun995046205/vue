<template>
  <div class="serverlist">
    <dl v-for="n in title">
      <dt><img :src="n.img" alt=""></dt>
      <dd> <h3>{{n.name}}</h3></dd>
    </dl>
  </div>

</template>

<script>
    export default {
      name: "ArtList",
      data() { //注意：data即使不需要传数据，也必须return,否则会报错
        return {
          message: "啦啦啦啦啦",
          title: [
            {
              "name": "马克华菲--电商服务解密",
              "img": require("../../../assets/img/adv1.png")
            },
            {
              "name": "柯玛妮克--电商服务解密",
              "img": require("../../../assets/img/adv1.png")
            },
            {
              "name": "碧生源--电商服务解密",
              "img": require("../../../assets/img/adv1.png")
            },
            {
              "name": "罗莱家纺--电商服务解密",
              "img": require("../../../assets/img/adv1.png")
            },
            {
              "name": "七匹狼--电商服务解密",
              "img": require("../../../assets/img/adv1.png")
            }
          ]
        }
      }
    }
</script>

<style scoped>
  @import "../../../assets/css/server.css";

</style>
