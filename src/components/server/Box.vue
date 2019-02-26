<template>
  <div class="cups">
    <nav-list></nav-list>

    <art-list></art-list>
    <sec-list></sec-list>
  </div>

</template>

<script>
  import NavList from './box/NavList'
  import ArtList from './box/ArtList'
  import SecList from './box/SecList'

  export default {
        name: "Box",
        components:{
          NavList,ArtList,SecList
      }
    }
</script>

<style scoped>
  .cups{
    flex: 1;
    overflow-y: auto;
  }

</style>
