<template>
  <div>
  <dl v-for="n in title" class="hoodapp">
    <dt><img :src="n.img" alt=""></dt>
    <dd>
      <span class="btn"> {{n.id}}</span>   {{n.name}}
    </dd>
  </dl>
  </div>
</template>

<script>
    export default {
        name: "HoodApp",
        data () { //注意：data即使不需要传数据，也必须return,否则会报错
          return {
            message: "啦啦啦啦啦",
            title: [
              {
                "id": "投票",
                "img": require("../../../assets/img/banner.png"),
                "name": "218参与"
              }
            ]
          }
        }
    }
</script>

<style scoped>
  @import "../../../assets/css/index.css";

</style>
