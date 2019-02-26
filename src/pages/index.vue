<template>
  <div class="cup">
    <Header></Header>
    <Box></Box>
    <Footer></Footer>
  </div>

</template>

<script>
  import Header from "../components/index/Header"
  import Box from "../components/index/Box"
  import Footer from "../components/Footer"


  export default {
        name: "index",
       components: {
          Header,Box,Footer
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
