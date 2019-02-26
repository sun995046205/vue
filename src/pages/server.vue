<template>
  <div class="server-box">
    <header-sev></header-sev>
    <Box></Box>
    <Job></Job>
    <Footer></Footer>
  </div>
</template>

<script>
  import HeaderSev from "../components/server/HeaderSev"
  import Box from "../components/server/Box"
  import Job from "../components/server/Job"
  import Footer from "../components/Footer"
    export default {
        name: "server",
        components:{
        HeaderSev,Box,Job,Footer
      }
    }
</script>

<style scoped>
  .server-box{
    height: 100%;
    display: flex;
    flex-direction: column;
  }

</style>
