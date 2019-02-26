<template>
  <div>
  <dl v-for="n in title" class="newslist">
    <dt>
      <p>{{n.id}}</p>
      <span>{{n.name}}</span>
    </dt>
    <dd>
      <img :src="n.img" alt="">
    </dd>
  </dl>
  </div>
</template>

<script>
    export default {
        name: "NewsInof",
      data () { //注意：data即使不需要传数据，也必须return,否则会报错
        return {
          message: "啦啦啦啦啦",
          title: [
            {
              "id": "海关重要发布：2018年中国外贸进出口总值达30年最高...",
              "img": require("../../../assets/img/news2.png"),
              "name": "20小时以前"
            }
          ]
        }
      }
    }
</script>

<style scoped>
  @import "../../../assets/css/index.css";

</style>
