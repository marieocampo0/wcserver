<template>
  <div id="app">
    <the-desktop-nav id="desktop-nav" />
    <div class="view-container">

    <router-view/>
    </div>
  </div>
</template>
<script>
import TheDesktopNav from '@/components/TheDesktopNav'
export default {
  components: {
    TheDesktopNav
  }
  
}
</script>

<style scope>
.view-container{
  width: 79vw;
  padding: 1.5em;
  margin-left: 20vw;
  box-sizing: border-box;
  min-height: 100vh;
}
</style>