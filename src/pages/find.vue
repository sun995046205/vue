<template>
  <div class="cup">
    <Header></Header>
    <Box></Box>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from '../components/find/Header'
  import Box from '../components/find/Box'
  import Footer from '../components/Footer'
  export default {
        name: "find",
        components:{
          Box,Footer,Header
      }
    }
</script>

<style scoped>
  .cup{
    height: 100%;
    display: flex;
    flex-direction: column;
  }
</style>
