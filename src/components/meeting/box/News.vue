<template>
  <div >
  <dl  v-for="s in title" class="newslist">
    <dt ><img :src="s.img" alt=""></dt>
    <dd>
      <h3>{{s.name}}</h3>
      <p>{{s.time}}</p>
      <div>
        <span>{{s.place}}</span>
        <span>报名中</span>
      </div>
    </dd>
  </dl>
  </div>
</template>

<script>
    export default {
        name: "News",
      data () { //注意：data即使不需要传数据，也必须return,否则会报错
        return {
          message: "啦啦啦啦啦",
          title: [
            {
              "name":"全球互联网经济大会？GIEC2019春季峰会",
              "img":require("../../../assets/img/meet1.png"),
              "time":"04.02-04.03",
              "place":"北京市"
            },
            {
              "name":"高效能团队之电商招聘与面试技巧1.19上海",
              "img":require("../../../assets/img/meet2.png"),
              "time":"01.19-01.19",
              "place":"上海市"
            },
            {
              "name":"CMO特训营第五期|企业会员制运营方略",
              "img":require("../../../assets/img/meet3.png"),
              "time":"01.18-01.19",
              "place":"上海市"
            },
            {
              "name":"第二届全球技术峰会暨华鹰奖颁奖典礼",
              "img":require("../../../assets/img/meet4.png"),
              "time":"03.21-03.22",
              "place":"上海市"
            },
            {
              "name":"全球互联网经济大会？GIEC2019春季峰会",
              "img":require("../../../assets/img/meet1.png"),
              "time":"04.02-04.03",
              "place":"北京市"
            },
            {
              "name":"高效能团队之电商招聘与面试技巧1.19上海",
              "img":require("../../../assets/img/meet2.png"),
              "time":"01.19-01.19",
              "place":"上海市"
            },
            {
              "name":"CMO特训营第五期|企业会员制运营方略",
              "img":require("../../../assets/img/meet3.png"),
              "time":"01.18-01.19",
              "place":"上海市"
            },
            {
              "name":"第二届全球技术峰会暨华鹰奖颁奖典礼",
              "img":require("../../../assets/img/meet4.png"),
              "time":"03.21-03.22",
              "place":"上海市"
            }
          ]
        }
      }
    }
</script>

<style scoped>
  @import "../../../assets/css/meeting.css";
</style>
