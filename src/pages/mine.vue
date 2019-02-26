<template>
  <div class="mine-box">
    <Header></Header>
    <Box></Box>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../components/mine/Header"
  import Box from "../components/mine/Box"
  import Footer from "../components/Footer"

  export default {
        name: "mine",
        components: {
          Header,Box,Footer
        }
    }
</script>

<style scoped>
.mine-box{
  height: 100%;
  display: flex;
  flex-direction: column;
}
</style>
