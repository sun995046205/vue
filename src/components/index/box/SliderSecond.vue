<template>
  <article>
    <dl>
      <dt>
        <a href=""><img src="../../../assets/img/newsflash.png" alt=""></a>
      </dt>
      <dd>
        <div class="swiper-container swiper2">
          <div class="swiper-wrapper">
            <div v-for="n in title" class="swiper-slide ">{{n.img}}</div>
            <!--<div class="swiper-slide ">来伊份“搭伙”美团点评</div>-->
            <!--<div class="swiper-slide ">安佑集团入股农信互联</div>-->
          </div>
        </div>
      </dd>
    </dl>
  </article>
</template>

<script>
  import Swiper from 'swiper'
    export default {
        name: "SliderSecond",
      data(){
        return {
          message: "啦啦啦啦啦",
          title:[
            {"img":"风口上的社区团购还能火多久"},
            {"img":"来伊份“搭伙”美团点评"},
            {"img":"安佑集团入股农信互联"}
          ]
        }
      },
      mounted() {
        var mySwiper1 = new Swiper ('.swiper2', {
          loop : true,
          autoplay:true,
          direction:"vertical",
          autoplayDisableOnInteraction: false,
        })
      }
    }
</script>

<style scoped>
  @import 'swiper/dist/css/swiper.css';
  @import "../../../assets/css/index.css";

</style>
