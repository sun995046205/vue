<template>
    <div>
      <find-sec></find-sec>
      <find-art></find-art>
      <find-aside></find-aside>
      <find-one></find-one>
      <find-two></find-two>
      <find-answer></find-answer>
    </div>
</template>

<script>
  import FindSec from './box/FindSec'
  import FindArt from './box/FindArt'
  import FindAside from './box/FindAside'
  import FindOne from './box/FindOne'
  import FindTwo from './box/FindTwo'
  import FindAnswer from './box/FindAnswer'



  export default {
        name: "Box",
      components:{
        FindSec,FindArt,FindAside,FindOne,FindTwo,FindAnswer
      }
    }
</script>

<style scoped>

div{
  flex: 1;
  overflow-x: auto;
}
</style>
