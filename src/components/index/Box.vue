<template>
  <div>
    <slider-first></slider-first>
    <slider-second></slider-second>
    <news-list></news-list>
    <hood-app></hood-app>
    <news-inof></news-inof>
    <news-list></news-list>
    <news-list></news-list>
    <news-inof></news-inof>
  </div>
</template>

<script>
import SliderFirst from './box/SliderFirst'
import SliderSecond from './box/SliderSecond'
import NewsList from './box/NewsList'
import HoodApp from './box/HoodApp'
import NewsInof from './box/NewsInof'
export default {
        name: "Box",
        components: {
          SliderFirst,SliderSecond,NewsList,HoodApp,NewsInof
        }
    }
</script>

<style scoped>
  div{
    flex: 1;
    overflow-y: auto;
  }
</style>
