<template>
  <section>
    <div class="swiper-container swiper1">
      <div class="swiper-wrapper">
        <div v-for="n in title" class="swiper-slide"><a href=""><img :src="n.img" alt=""></a></div>
      </div>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
    export default {
        name: "Slider",
      data(){
        return {
          message: "啦啦啦啦啦",
          title:[
            {"img":require("../../../assets/img/meet1.png")},
            {"img":require("../../../assets/img/meet2.png")},
            {"img":require("../../../assets/img/meet3.png")},
            {"img":require("../../../assets/img/meet4.png")}
          ]
        }
      },
      mounted() {
        var mySwiper = new Swiper ('.swiper1', {
          loop : true,
          autoplay:true,
          speed:500,
          autoplayDisableOnInteraction: false,
        })
      }
    }
</script>

<style scoped>
  @import "../../../assets/css/index.css";
  @import 'swiper/dist/css/swiper.css';
</style>
