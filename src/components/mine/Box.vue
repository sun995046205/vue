<template>
  <div class="cup">
    <mind-head></mind-head>
    <mine-nav></mine-nav>
    <mine-list></mine-list>
  </div>

</template>

<script>
  import MindHead from './box/MindHead'
  import MineNav from './box/MineNav'
  import MineList from './box/MineList'

  export default {
        name: "Box",
    components:{
      MindHead,MineNav,MineList
    }
    }
</script>

<style scoped>
  .cup{
    flex: 1;
    overflow-y: auto;
  }
</style>
