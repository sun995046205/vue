<template>
  <footer>
    <router-link :to="n.name"  v-for="n in title" :key="n.id"><img :src="n.img" alt="">{{n.id}}</router-link>
  </footer>
</template>

<script>
    export default {
        name: "Footer",
       data (){ //注意：data即使不需要传数据，也必须return,否则会报错
        return {
          message: "啦啦啦啦啦",
          title:[
            {
              "id":"头条",
              "img":require("../assets/img/footer1.png"),
              "name":"/"
            },
            {
              "id":"会议",
              "img":require("../assets/img/footer2.png"),
              "name":"/meeting"
            },
            {
              "id":"找服务",
              "img":require("../assets/img/footer3.png"),
              "name":"/server"
            },
            {
              "id":"发现",
              "img":require("../assets/img/footer4.png"),
              "name":"/find"
            },
            {
              "id":"我的",
              "img":require("../assets/img/footer5.png"),
              "name":"/mine"
            }
          ]
        }
      }
    }
</script>

<style scoped>
  @import "../assets/css/index.css";

</style>
