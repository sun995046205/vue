<template>
  <div>
  <dl v-for="n in title" class="newslist">
    <dt>
      <p>{{n.id}}</p>
      <div class="btn">{{n.name}}</div>
    </dt>
    <dd>
      <img :src="n.img" alt="">
    </dd>
  </dl>
  </div>
</template>

<script>
    export default {
        name: "NewsList",
      data () { //注意：data即使不需要传数据，也必须return,否则会报错
        return {
          message: "啦啦啦啦啦",
          title: [
            {
              "id": "印尼：电商卖家需与政府共享用户数据 且必须纳税",
              "img": require("../../../assets/img/news1.png"),
              "name": "置顶"
            }
          ]
        }
      }
    }
</script>

<style scoped>
  @import "../../../assets/css/index.css";

</style>
