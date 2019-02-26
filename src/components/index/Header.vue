<template>
  <header>
    <span><img src="../../assets/img/search1.png" alt=""></span>
    <nav>
      <a href="#" v-for="n in title">{{n}}</a>
    </nav>
    <span><img src="../../assets/img/search2.png" alt=""></span>
  </header>
</template>

<script>
    export default {
        name: "Header",
      data (){ //注意：data即使不需要传数据，也必须return,否则会报错
        return {
          message: "啦啦啦啦啦",
          title:["推荐","快讯","订阅","易邦号","新闻","体育","科技","更多"]
        }
      }
    }
</script>

<style scoped>
  @import "../../assets/css/index.css";
</style>
