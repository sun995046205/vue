<template>
  <section>
    <div class="swiper-container swiper1">
      <div class="swiper-wrapper">
        <div v-for="n in title" class="swiper-slide "><a href=""><img :src="n.img" alt=""></a></div>
        <!--<div class="swiper-slide "><a href=""><img src="../../../assets/img/sw2.jpg" alt=""></a></div>-->
        <!--<div class="swiper-slide "><a href=""><img src="../../../assets/img/sw3.jpg" alt=""></a></div>-->
      </div>
    </div>
  </section>
</template>

<script>
  import Swiper from 'swiper'
    export default {
        name: "SliderFirst",
        data(){
            return {
              message: "啦啦啦啦啦",
              title:[
                {"img":require("../../../assets/img/sw1.jpg")},
                {"img":require("../../../assets/img/sw2.jpg")},
                {"img":require("../../../assets/img/sw3.jpg")},
                {"img":require("../../../assets/img/sw1.jpg")},
                {"img":require("../../../assets/img/sw2.jpg")},
                {"img":require("../../../assets/img/sw3.jpg")}
              ]
            }
        },
      mounted() {
        var mySwiper = new Swiper ('.swiper1', {
          loop : true,
          autoplay:true,
          speed:500,
          autoplayDisableOnInteraction: false
        })
      }
    }
</script>

<style scoped>
  @import "../../../assets/css/index.css";
  @import 'swiper/dist/css/swiper.css';

</style>
