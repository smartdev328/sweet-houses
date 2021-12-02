<template>
  <div id="app">
        <Navbar/>
    <router-view  />
    <Footer v-if="!$route.meta.hideNavbar"></Footer>
  </div>
</template>

<style>
@import url(assets/css/style.css);
</style>
<script>
export default {
  methods:{
  },
  mounted(){

  }
}
</script>
<style>
#app{
  height: 100vh;
}
</style>
