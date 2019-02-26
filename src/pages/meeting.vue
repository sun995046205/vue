<template>
  <div class="meetingbox">
    <Header></Header>
    <Box></Box>
    <Footer></Footer>
  </div>
</template>

<script>
  import Header from "../components/meeting/Header"
  import Box from "../components/meeting/Box"
  import Footer from "../components/Footer"

  export default {
        name: "meeting",
        components: {
          Header,Box,Footer
        }
  }
</script>

<style scoped>
  .meetingbox{
    height: 100%;
    display: flex;
    flex-direction: column;

  }
</style>
