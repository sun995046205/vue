<template>
    <div class="cup">
      <Slider></Slider>
      <News></News>
    </div>
</template>

<script>
    import Slider from './box/Slider'
    import News from './box/News'

    export default {
        name: "Box",
        components:{
          Slider,News
      }
    }
</script>

<style scoped>
  .cup{
    flex: 1;
    overflow-y: auto;
  }
</style>
